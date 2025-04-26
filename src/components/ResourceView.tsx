
import { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ChevronDown, ChevronUp, Star, X } from "lucide-react";
import { format } from 'date-fns';
import { Resource } from '@/data/resources';
import { cn } from '@/lib/utils';

interface ResourceViewProps {
  resource: Resource | null;
  isOpen: boolean;
  onClose: () => void;
  isFavorite: boolean;
  onToggleFavorite: () => void;
}

export const ResourceView = ({ 
  resource, 
  isOpen, 
  onClose,
  isFavorite,
  onToggleFavorite
}: ResourceViewProps) => {
  const [showDetails, setShowDetails] = useState(false);

  if (!resource) return null;

  const {
    title,
    description,
    category,
    uploadDate,
    thumbnailUrl,
    tags,
    author,
    detailedInfo
  } = resource;

  const categoryLabel = category.charAt(0).toUpperCase() + category.slice(1);
  const formattedDate = format(new Date(uploadDate), 'MMMM dd, yyyy');
  
  return (
    <Dialog open={isOpen} onOpenChange={() => onClose()}>
      <DialogContent className="sm:max-w-3xl">
        <DialogHeader>
          <div className="flex justify-between items-center">
            <Badge 
              className={cn(
                "category-tag", 
                category
              )}
            >
              {categoryLabel}
            </Badge>
            <button
              className="text-gray-400 hover:text-gray-600"
              onClick={onClose}
            >
              <X size={18} />
            </button>
          </div>
          <DialogTitle className="text-2xl font-semibold mt-3">{title}</DialogTitle>
        </DialogHeader>

        {thumbnailUrl && (
          <div className="my-4 overflow-hidden rounded-lg">
            <img 
              src={thumbnailUrl}
              alt={title}
              className="w-full h-64 object-cover"
            />
          </div>
        )}

        <div className="my-4">
          <p className="text-gray-700">{description}</p>
        </div>

        <div className="flex flex-wrap gap-2 my-4">
          {tags.map((tag) => (
            <Badge key={tag} variant="secondary" className="bg-gray-100 text-gray-800">
              {tag}
            </Badge>
          ))}
        </div>

        <div className="flex justify-between items-center my-4">
          <div className="flex items-center">
            <img
              src={author.avatarUrl}
              alt={author.name}
              className="w-8 h-8 rounded-full mr-2"
            />
            <span className="text-sm text-gray-700">{author.name}</span>
          </div>
          <span className="text-sm text-gray-500">Uploaded {formattedDate}</span>
        </div>

        {detailedInfo && (
          <div className="my-4">
            <Button
              variant="outline"
              className="w-full flex items-center justify-center"
              onClick={() => setShowDetails(!showDetails)}
            >
              <span className="mr-1">
                {showDetails ? "Hide Details" : "Expand Details"}
              </span>
              {showDetails ? (
                <ChevronUp size={16} />
              ) : (
                <ChevronDown size={16} />
              )}
            </Button>
            
            {showDetails && (
              <div className="mt-4 p-4 bg-gray-50 rounded-lg text-gray-700 animate-fade-in">
                {detailedInfo}
              </div>
            )}
          </div>
        )}

        <div className="flex justify-between mt-6">
          <Button
            variant={isFavorite ? "destructive" : "outline"}
            className={cn(
              "favorite-icon",
              isFavorite ? "bg-amber-500 hover:bg-amber-600 text-white border-0" : ""
            )}
            onClick={onToggleFavorite}
          >
            <Star className="mr-1 h-4 w-4" />
            {isFavorite ? "Remove from Favorites" : "Add to Favorites"}
          </Button>
          <Button variant="default" onClick={onClose}>
            Close
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ResourceView;
