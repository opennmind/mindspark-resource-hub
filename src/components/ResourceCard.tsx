
import { useState } from 'react';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, X } from "lucide-react";
import { formatDistanceToNow } from 'date-fns';
import { Resource } from '@/data/resources';
import { cn } from '@/lib/utils';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

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
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  
  const { title, description, category, uploadDate, thumbnailUrl, tags, author } = resource;
  
  const categoryLabel = category.charAt(0).toUpperCase() + category.slice(1);
  const formattedDate = formatDistanceToNow(new Date(uploadDate), { addSuffix: true });
  
  const handleView = () => {
    setIsDialogOpen(true);
    onView();
  };
  
  return (
    <>
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
              onClick={handleView}
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

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="max-w-4xl h-[90vh] overflow-y-auto">
          <DialogHeader className="relative">
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-0 top-0"
              onClick={() => setIsDialogOpen(false)}
            >
              <X className="h-4 w-4" />
            </Button>
            <DialogTitle className="text-2xl font-bold mb-4">{title}</DialogTitle>
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-2">
                <Badge className={cn("category-tag", category)}>{categoryLabel}</Badge>
                <span className="text-sm text-gray-500">{formattedDate}</span>
              </div>
              {thumbnailUrl && (
                <div className="w-full aspect-video rounded-lg overflow-hidden">
                  <img 
                    src={thumbnailUrl} 
                    alt={title}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
              <p className="text-gray-700 whitespace-pre-wrap">{description}</p>
              {tags && tags.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              )}
              {author && (
                <div className="flex items-center gap-2 mt-4">
                  <img
                    src={author.avatarUrl}
                    alt={author.name}
                    className="w-8 h-8 rounded-full"
                  />
                  <span className="text-sm text-gray-700">{author.name}</span>
                </div>
              )}
            </div>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ResourceCard;
