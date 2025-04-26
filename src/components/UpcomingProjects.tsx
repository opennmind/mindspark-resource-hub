
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { upcomingProjects } from "@/data/resources";
import { formatDistanceToNow } from 'date-fns';

interface UpcomingProjectsProps {
  projects: typeof upcomingProjects;
}

export const UpcomingProjects = ({ projects }: UpcomingProjectsProps) => {
  if (projects.length === 0) return null;

  return (
    <section className="mt-10">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Upcoming Projects</h2>
        <Button variant="link" className="text-sm">
          View All Projects
        </Button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {projects.slice(0, 3).map((project) => {
          const formattedDate = formatDistanceToNow(new Date(project.date), { addSuffix: true });
          
          return (
            <Card key={project.id} className="p-4 hover:shadow-md transition-shadow">
              <h3 className="font-semibold mb-2">{project.title}</h3>
              <p className="text-sm text-gray-500 mb-4">{project.description}</p>
              <div className="flex justify-between items-center">
                <span className="text-xs text-gray-500">Coming {formattedDate}</span>
                <Button variant="ghost" size="sm" className="text-xs">
                  Notify me
                </Button>
              </div>
            </Card>
          );
        })}
      </div>
    </section>
  );
};

export default UpcomingProjects;
