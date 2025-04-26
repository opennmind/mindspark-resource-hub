
import { useState, useEffect, useRef } from 'react';
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { Resource } from '@/data/resources';

interface SearchBarProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  searchResults: Resource[];
  isSearching: boolean;
  onSelectResource: (resource: Resource) => void;
}

export const SearchBar = ({ 
  searchTerm, 
  setSearchTerm, 
  searchResults, 
  isSearching,
  onSelectResource
}: SearchBarProps) => {
  const [showSuggestions, setShowSuggestions] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);

  // Close suggestions when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setShowSuggestions(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    setShowSuggestions(true);
  };

  const handleSuggestionClick = (resource: Resource) => {
    onSelectResource(resource);
    setShowSuggestions(false);
  };

  return (
    <div className="relative w-full max-w-md" ref={searchRef}>
      <div className="relative search-bar">
        <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
        <Input
          placeholder="Search resources..."
          value={searchTerm}
          onChange={handleInputChange}
          onFocus={() => isSearching && setShowSuggestions(true)}
          className="pl-9 pr-3 py-2 w-full rounded-md border border-gray-200"
        />
      </div>
      
      {showSuggestions && isSearching && searchResults.length > 0 && (
        <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-md shadow-lg z-10 max-h-60 overflow-y-auto">
          {searchResults.map((result) => (
            <div
              key={result.id}
              className="px-4 py-2 hover:bg-gray-50 cursor-pointer flex items-center"
              onClick={() => handleSuggestionClick(result)}
            >
              <div className={`w-2 h-2 rounded-full mr-3 bg-category-${result.category}`}></div>
              <div>
                <p className="text-sm font-medium">{result.title}</p>
                <p className="text-xs text-gray-500 truncate">{result.description}</p>
              </div>
            </div>
          ))}
        </div>
      )}
      
      {showSuggestions && isSearching && searchResults.length === 0 && (
        <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-md shadow-lg z-10">
          <div className="px-4 py-3 text-sm text-gray-500">
            No results found
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchBar;
