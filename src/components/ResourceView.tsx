
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
  
  // Handle body scroll lock when modal is open
  if (typeof document !== 'undefined') {
    document.body.style.overflow = isOpen ? 'hidden' : '';
  }
  
  return (
    <Dialog open={isOpen} onOpenChange={() => onClose()}>
      <DialogContent className="full-screen-modal w-full h-full max-w-none m-0 p-0 rounded-none border-none">
        <div className="h-full w-full flex flex-col overflow-hidden bg-background p-4 sm:p-6 md:p-8">
          <DialogHeader className="relative border-b pb-4 mb-4">
            <div className="flex justify-between items-center">
              <Badge 
                className={cn(
                  "category-tag", 
                  category
                )}
              >
                {categoryLabel}
              </Badge>
              <Button
                variant="ghost"
                size="icon"
                onClick={onClose}
                className="absolute right-0 top-0"
              >
                <X size={24} />
              </Button>
            </div>
            <DialogTitle className="text-3xl font-bold mt-4">{title}</DialogTitle>
          </DialogHeader>

          <div className="flex-1 overflow-y-auto px-2 custom-scrollbar">
            {thumbnailUrl && (
              <div className="my-6 overflow-hidden rounded-lg max-w-4xl mx-auto">
                <img 
                  src={thumbnailUrl}
                  alt={title}
                  className="w-full h-auto object-cover"
                />
              </div>
            )}

            <div className="my-6 max-w-4xl mx-auto">
              <p className="text-gray-700 text-lg">{description}</p>
            </div>

            <div className="flex flex-wrap gap-2 my-6 max-w-4xl mx-auto">
              {tags.map((tag) => (
                <Badge key={tag} variant="secondary" className="bg-gray-100 text-gray-800">
                  {tag}
                </Badge>
              ))}
            </div>

            <div className="flex justify-between items-center my-6 max-w-4xl mx-auto">
              <div className="flex items-center">
                <img
                  src={author.avatarUrl}
                  alt={author.name}
                  className="w-10 h-10 rounded-full mr-3"
                />
                <span className="text-gray-700">{author.name}</span>
              </div>
              <span className="text-gray-500">Uploaded {formattedDate}</span>
            </div>

            {detailedInfo && (
              <div className="my-6 max-w-4xl mx-auto">
                <Button
                  variant="outline"
                  className="w-full flex items-center justify-center mb-4"
                  onClick={() => setShowDetails(!showDetails)}
                >
                  <span className="mr-2">
                    {showDetails ? "Hide Details" : "Expand Details"}
                  </span>
                  {showDetails ? (
                    <ChevronUp size={18} />
                  ) : (
                    <ChevronDown size={18} />
                  )}
                </Button>
                
                {showDetails && (
                  <div className="mt-4 p-6 bg-gray-50 rounded-lg text-gray-700 animate-fade-in">
                    {detailedInfo}
                  </div>
                )}
              </div>
            )}
          </div>

          <div className="flex justify-between mt-6 pt-4 border-t sticky bottom-0 bg-background">
            <Button
              variant={isFavorite ? "destructive" : "outline"}
              className={cn(
                "favorite-icon",
                isFavorite ? "bg-amber-500 hover:bg-amber-600 text-white border-0" : ""
              )}
              onClick={onToggleFavorite}
            >
              <Star className="mr-2 h-4 w-4" />
              {isFavorite ? "Remove from Favorites" : "Add to Favorites"}
            </Button>
            <Button variant="default" onClick={onClose}>
              Close
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ResourceView;
