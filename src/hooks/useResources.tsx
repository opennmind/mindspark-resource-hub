
import { useState, useEffect } from 'react';
import { Resource, ResourceCategory } from '@/data/resources';
import { useToast } from "@/components/ui/use-toast";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { useUpcomingProjects, UpcomingProject } from "./useUpcomingProjects";

interface UseResourcesReturn {
  allResources: Resource[];
  filteredResources: Resource[];
  favorites: string[];
  recentlyViewed: Resource[];
  recommended: Resource[];
  searchTerm: string;
  activeCategory: string;
  sortOrder: 'newest' | 'a-z';
  searchResults: Resource[];
  isSearching: boolean;
  setSearchTerm: (term: string) => void;
  setActiveCategory: (category: string) => void;
  setSortOrder: (order: 'newest' | 'a-z') => void;
  toggleFavorite: (id: string) => void;
  viewResource: (resource: Resource) => void;
  getResourceById: (id: string) => Resource | undefined;
  getUpcomingProjects: () => UpcomingProject[];
}

export const useResources = (): UseResourcesReturn => {
  const [filteredResources, setFilteredResources] = useState<Resource[]>([]);
  const [favorites, setFavorites] = useState<string[]>([]);
  const [recentlyViewed, setRecentlyViewed] = useState<Resource[]>([]);
  const [recommended, setRecommended] = useState<Resource[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  const [sortOrder, setSortOrder] = useState<'newest' | 'a-z'>('newest');
  const [searchResults, setSearchResults] = useState<Resource[]>([]);
  const [isSearching, setIsSearching] = useState(false);
  
  const { toast } = useToast();

  const { data: upcomingProjects, isLoading: isLoadingProjects, error: projectsError } = useUpcomingProjects();

  const { data: allResources = [], isLoading: isLoadingResources } = useQuery({
    queryKey: ["resources"],
    queryFn: async () => {
      try {
        const { data, error } = await supabase
          .from("resources")
          .select("*")
          .order("upload_date", { ascending: false });

        if (error) {
          console.error("Error fetching resources:", error);
          throw error;
        }

        // Map the database schema to our Resource type
        return (data || []).map(item => ({
          id: item.id,
          title: item.title,
          description: item.description,
          category: item.category as ResourceCategory,
          uploadDate: item.upload_date,
          thumbnailUrl: item.thumbnail_url || undefined,
          tags: item.tags,
          author: {
            name: item.author_name,
            avatarUrl: item.author_avatar_url
          },
          detailedInfo: item.detailed_info || undefined
        }));
      } catch (err) {
        console.error("Failed to fetch resources:", err);
        throw err;
      }
    },
    retry: 1,
    staleTime: 1000 * 60 * 5, // 5 minutes
  });

  const getUpcomingProjects = (): UpcomingProject[] => {
    if (projectsError) {
      console.error("Error loading upcoming projects:", projectsError);
      return [];
    }
    return upcomingProjects || [];
  };

  useEffect(() => {
    const storedFavorites = localStorage.getItem('favorites');
    if (storedFavorites) {
      setFavorites(JSON.parse(storedFavorites));
    }

    const storedRecentlyViewed = localStorage.getItem('recentlyViewed');
    if (storedRecentlyViewed) {
      setRecentlyViewed(JSON.parse(storedRecentlyViewed));
    }

    if (allResources.length > 0) {
      const randomIndex = Math.floor(Math.random() * allResources.length);
      setRecommended([allResources[randomIndex]]);
    }
  }, [allResources]);

  useEffect(() => {
    let results = [...allResources];
    
    if (activeCategory !== 'all' && activeCategory !== 'favorites') {
      results = results.filter(resource => resource.category === activeCategory);
    } else if (activeCategory === 'favorites') {
      results = results.filter(resource => favorites.includes(resource.id));
    }

    if (sortOrder === 'a-z') {
      results.sort((a, b) => a.title.localeCompare(b.title));
    } else {
      results.sort((a, b) => new Date(b.uploadDate).getTime() - new Date(a.uploadDate).getTime());
    }

    setFilteredResources(results);
  }, [allResources, activeCategory, sortOrder, favorites]);

  useEffect(() => {
    if (searchTerm.trim() === '') {
      setSearchResults([]);
      setIsSearching(false);
      return;
    }

    setIsSearching(true);
    const term = searchTerm.toLowerCase();
    const results = allResources.filter(resource => 
      resource.title.toLowerCase().includes(term) || 
      resource.description.toLowerCase().includes(term) ||
      resource.tags.some(tag => tag.toLowerCase().includes(term))
    );

    setSearchResults(results);
  }, [searchTerm, allResources]);

  const toggleFavorite = (id: string) => {
    const isFavorite = favorites.includes(id);
    let newFavorites: string[];
    
    if (isFavorite) {
      newFavorites = favorites.filter(favoriteId => favoriteId !== id);
      toast({
        title: "Removed from favorites",
        description: "The resource has been removed from your favorites.",
      });
    } else {
      newFavorites = [...favorites, id];
      toast({
        title: "Added to favorites",
        description: "The resource has been added to your favorites.",
      });
    }
    
    setFavorites(newFavorites);
    localStorage.setItem('favorites', JSON.stringify(newFavorites));
  };

  const viewResource = (resource: Resource) => {
    const isAlreadyViewed = recentlyViewed.some(item => item.id === resource.id);
    let newRecentlyViewed: Resource[];
    
    if (isAlreadyViewed) {
      newRecentlyViewed = [
        resource,
        ...recentlyViewed.filter(item => item.id !== resource.id)
      ];
    } else {
      newRecentlyViewed = [resource, ...recentlyViewed].slice(0, 5);
    }
    
    setRecentlyViewed(newRecentlyViewed);
    localStorage.setItem('recentlyViewed', JSON.stringify(newRecentlyViewed));
  };

  const getResourceById = (id: string) => {
    return allResources.find(resource => resource.id === id);
  };

  return {
    allResources,
    filteredResources,
    favorites,
    recentlyViewed,
    recommended,
    searchTerm,
    activeCategory,
    sortOrder,
    searchResults,
    isSearching,
    setSearchTerm,
    setActiveCategory,
    setSortOrder,
    toggleFavorite,
    viewResource,
    getResourceById,
    getUpcomingProjects
  };
};
