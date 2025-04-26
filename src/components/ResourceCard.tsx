
import { useState } from 'react';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star } from "lucide-react";
import { formatDistanceToNow } from 'date-fns';
import { Resource } from '@/data/resources';
import { cn } from '@/lib/utils';

interface ResourceCardProps {
  resource: Resource;
  isFavorite: boolean;
  onToggleFavorite: () => void;
  onView: () => void;
}

export const ResourceCard = ({ 
  resource, 
  isFavorite, 
  onToggleFavorite, 
  onView 
}: ResourceCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  
  const { title, description, category, uploadDate } = resource;
  
  const categoryLabel = category.charAt(0).toUpperCase() + category.slice(1);
  const formattedDate = formatDistanceToNow(new Date(uploadDate), { addSuffix: true });
  
  return (
    <Card 
      className={cn(
        "resource-card overflow-hidden relative group",
        isHovered ? "shadow-md -translate-y-1" : "shadow-sm"
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="p-5">
        <div className="flex justify-between items-start mb-3">
          <Badge className={cn("category-tag", category)}>
            {categoryLabel}
          </Badge>
          <button 
            onClick={(e) => {
              e.stopPropagation();
              onToggleFavorite();
            }}
            className="favorite-icon text-gray-400 hover:text-amber-500"
            aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
          >
            <Star className={cn("h-5 w-5", isFavorite ? "fill-amber-500 text-amber-500" : "")} />
          </button>
        </div>
        
        <h3 className="font-semibold text-lg mb-2 line-clamp-2">{title}</h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{description}</p>
        
        <div className="flex items-center justify-between">
          <span className="text-xs text-gray-500">{formattedDate}</span>
          <Button 
            size="sm"
            variant="outline"
            onClick={(e) => {
              e.stopPropagation();
              onView();
            }}
          >
            View
          </Button>
        </div>
      </div>
      
      {isHovered && (
        <div className="tooltip">
          {description.substring(0, 100)}
          {description.length > 100 ? '...' : ''}
        </div>
      )}
    </Card>
  );
};

export default ResourceCard;
