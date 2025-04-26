
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Resource } from "@/data/resources";

interface RecommendedSectionProps {
  resources: Resource[];
  onViewResource: (resource: Resource) => void;
}

export const RecommendedSection = ({ resources, onViewResource }: RecommendedSectionProps) => {
  if (resources.length === 0) return null;
  
  const resource = resources[0];
  const categoryLabel = resource.category.charAt(0).toUpperCase() + resource.category.slice(1);
  
  // Generate some random avatar images for recommendation social proof
  const avatars = [
    "https://i.pravatar.cc/100?img=31",
    "https://i.pravatar.cc/100?img=32",
    "https://i.pravatar.cc/100?img=33",
    "https://i.pravatar.cc/100?img=34",
  ];
  
  return (
    <section className="mt-8">
      <h2 className="text-xl font-semibold mb-4">Recommended For You</h2>
      <Card className="p-5 bg-gray-50">
        <div className="flex flex-col md:flex-row md:gap-6">
          {resource.thumbnailUrl && (
            <div className="mb-4 md:mb-0 md:w-1/3 lg:w-1/4">
              <img 
                src={resource.thumbnailUrl}
                alt={resource.title}
                className="w-full h-40 object-cover rounded-md"
              />
            </div>
          )}
          
          <div className="flex-1">
            <div className="flex justify-between items-start mb-2">
              <Badge className={`category-tag ${resource.category}`}>
                {categoryLabel}
              </Badge>
            </div>
            
            <h3 className="font-semibold text-lg mb-2">{resource.title}</h3>
            <p className="text-gray-600 mb-4 text-sm">{resource.description}</p>
            
            <div className="flex items-center justify-between">
              <div className="flex -space-x-2">
                {avatars.map((avatar, index) => (
                  <img
                    key={index}
                    src={avatar}
                    alt="User"
                    className="w-6 h-6 rounded-full border border-white"
                  />
                ))}
                <span className="ml-3 text-xs text-gray-500 flex items-center">
                  +18 others viewed this
                </span>
              </div>
              
              <Button 
                size="sm"
                onClick={() => onViewResource(resource)}
              >
                View
              </Button>
            </div>
          </div>
        </div>
      </Card>
    </section>
  );
};

export default RecommendedSection;
