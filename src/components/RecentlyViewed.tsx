
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Resource } from "@/data/resources";

interface RecentlyViewedProps {
  resources: Resource[];
  onViewResource: (resource: Resource) => void;
}

export const RecentlyViewed = ({ resources, onViewResource }: RecentlyViewedProps) => {
  if (resources.length === 0) return null;
  
  return (
    <section className="mt-10">
      <h2 className="text-xl font-semibold mb-4">Recently Viewed</h2>
      
      <ScrollArea className="whitespace-nowrap pb-4">
        <div className="flex space-x-4">
          {resources.map((resource) => {
            const categoryLabel = resource.category.charAt(0).toUpperCase() + resource.category.slice(1);
            
            return (
              <Card 
                key={resource.id} 
                className="w-64 p-4 shrink-0 hover:shadow-md transition-shadow"
                onClick={() => onViewResource(resource)}
              >
                <div className="w-2 h-2 rounded-full bg-category-${resource.category} mb-2"></div>
                <h3 className="font-medium text-sm mb-1 line-clamp-1">{resource.title}</h3>
                <p className="text-xs text-gray-500 mb-3 line-clamp-2">{resource.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-xs">{categoryLabel}</span>
                  <Button size="sm" variant="ghost" className="text-xs p-0 h-auto">
                    View again
                  </Button>
                </div>
              </Card>
            );
          })}
        </div>
      </ScrollArea>
    </section>
  );
};

export default RecentlyViewed;
