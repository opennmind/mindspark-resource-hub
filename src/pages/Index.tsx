
import { useState } from "react";
import { useResources } from "@/hooks/useResources";
import { Resource } from "@/data/resources";

// Components
import Sidebar from "@/components/Sidebar";
import { SearchBar } from "@/components/SearchBar";
import { ResourceCard } from "@/components/ResourceCard";
import { ResourceView } from "@/components/ResourceView";
import { RecommendedSection } from "@/components/RecommendedSection";
import { UpcomingProjects } from "@/components/UpcomingProjects";
import { RecentlyViewed } from "@/components/RecentlyViewed";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const Index = () => {
  const {
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
    getUpcomingProjects,
  } = useResources();

  const [selectedResource, setSelectedResource] = useState<Resource | null>(null);
  const [isViewOpen, setIsViewOpen] = useState(false);

  // Handle view resource
  const handleViewResource = (resource: Resource) => {
    setSelectedResource(resource);
    setIsViewOpen(true);
    viewResource(resource);
  };

  // Handle toggle favorite for the selected resource
  const handleToggleFavorite = () => {
    if (selectedResource) {
      toggleFavorite(selectedResource.id);
    }
  };

  // Filter buttons for categories
  const filterButtons = [
    { value: 'all', label: 'All' },
    { value: 'photo', label: 'Photos' },
    { value: 'code', label: 'Code' },
    { value: 'survey', label: 'Surveys' },
  ];

  // Resources to display (either search results or filtered resources)
  const displayResources = isSearching ? searchResults : filteredResources;

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar activeCategory={activeCategory} setActiveCategory={setActiveCategory} />
      
      <main className="flex-1 overflow-y-auto p-8">
        <header className="mb-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <h1 className="text-3xl font-bold">OpenMind Resources</h1>
            <SearchBar 
              searchTerm={searchTerm} 
              setSearchTerm={setSearchTerm} 
              searchResults={searchResults}
              isSearching={isSearching}
              onSelectResource={handleViewResource}
            />
          </div>
        </header>

        {recommended.length > 0 && !isSearching && (
          <RecommendedSection resources={recommended} onViewResource={handleViewResource} />
        )}

        {recentlyViewed.length > 0 && !isSearching && (
          <RecentlyViewed resources={recentlyViewed} onViewResource={handleViewResource} />
        )}

        <section className="mt-10">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
            <div className="flex flex-wrap gap-2">
              {filterButtons.map((filter) => (
                <Button
                  key={filter.value}
                  variant={activeCategory === filter.value ? "default" : "outline"}
                  size="sm"
                  onClick={() => setActiveCategory(filter.value)}
                  className="rounded-full"
                >
                  {filter.label}
                </Button>
              ))}
            </div>
            
            <div className="flex items-center">
              <span className="text-sm text-gray-500 mr-2">Sort by:</span>
              <Select 
                value={sortOrder} 
                onValueChange={(value) => setSortOrder(value as 'newest' | 'a-z')}
              >
                <SelectTrigger className="w-[120px]">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="newest">Newest</SelectItem>
                  <SelectItem value="a-z">A-Z</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          
          {displayResources.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {displayResources.map((resource) => (
                <ResourceCard
                  key={resource.id}
                  resource={resource}
                  isFavorite={favorites.includes(resource.id)}
                  onToggleFavorite={() => toggleFavorite(resource.id)}
                  onView={() => handleViewResource(resource)}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-12 bg-white rounded-lg shadow-sm">
              <h3 className="text-lg font-medium text-gray-900">No resources found</h3>
              <p className="mt-2 text-gray-500">
                {activeCategory === 'favorites' 
                  ? "You haven't added any favorites yet" 
                  : "Try a different category or search term"}
              </p>
              {activeCategory === 'favorites' && (
                <Button 
                  className="mt-4" 
                  onClick={() => setActiveCategory('all')}
                >
                  Browse All Resources
                </Button>
              )}
            </div>
          )}
        </section>

        {!isSearching && (
          <UpcomingProjects projects={getUpcomingProjects()} />
        )}
        
        <footer className="mt-16 py-6 text-center text-sm text-gray-500 border-t">
          <p>© 2025 OpenMind Resources Platform. All resources are for demonstration purposes only.</p>
        </footer>
      </main>
      
      {/* Resource View Dialog */}
      <ResourceView 
        resource={selectedResource} 
        isOpen={isViewOpen} 
        onClose={() => setIsViewOpen(false)}
        isFavorite={selectedResource ? favorites.includes(selectedResource.id) : false}
        onToggleFavorite={handleToggleFavorite}
      />
    </div>
  );
};

export default Index;
