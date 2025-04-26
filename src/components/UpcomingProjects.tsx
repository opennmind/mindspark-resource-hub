
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { upcomingProjects } from "@/data/resources";
import { formatDistanceToNow } from 'date-fns';
import { useState } from "react";
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle 
} from "@/components/ui/dialog";
import { X, ChevronLeft } from "lucide-react";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";

interface UpcomingProjectsProps {
  projects: typeof upcomingProjects;
}

interface Project {
  id: string;
  title: string;
  description: string;
  date: string;
}

export const UpcomingProjects = ({ projects }: UpcomingProjectsProps) => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [showAllProjects, setShowAllProjects] = useState(false);
  
  if (projects.length === 0) return null;

  // Handle body scroll lock when modals are open
  if (typeof document !== 'undefined') {
    document.body.style.overflow = (!!selectedProject || showAllProjects) ? 'hidden' : '';
  }

  const handleViewProject = (project: Project) => {
    setSelectedProject(project);
  };

  const handleCloseProjectView = () => {
    setSelectedProject(null);
  };

  const handleViewAllProjects = () => {
    setShowAllProjects(true);
  };

  return (
    <>
      <section className="mt-10">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Upcoming Projects</h2>
          <Button variant="link" className="text-sm" onClick={handleViewAllProjects}>
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
                  <Button 
                    variant="outline" 
                    size="sm" 
                    onClick={() => handleViewProject(project)}
                  >
                    View
                  </Button>
                </div>
              </Card>
            );
          })}
        </div>
      </section>

      {/* Individual Project Detail View */}
      <Dialog open={!!selectedProject} onOpenChange={handleCloseProjectView}>
        <DialogContent className="full-screen-modal w-full h-full max-w-none m-0 p-0 rounded-none border-none">
          <div className="h-full w-full flex flex-col overflow-hidden bg-background p-4 sm:p-6 md:p-8">
            <DialogHeader className="relative border-b pb-4 mb-4">
              <div className="flex justify-between items-center">
                <Badge className="category-tag bg-blue-100 text-blue-800">Upcoming Project</Badge>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={handleCloseProjectView}
                  className="absolute right-0 top-0"
                >
                  <X size={24} />
                </Button>
              </div>
              <DialogTitle className="text-3xl font-bold mt-4">
                {selectedProject?.title}
              </DialogTitle>
            </DialogHeader>
            
            <div className="flex-1 overflow-y-auto px-2 custom-scrollbar">
              <div className="my-6 max-w-4xl mx-auto">
                <span className="text-gray-500 block mb-6">
                  Coming {selectedProject && formatDistanceToNow(new Date(selectedProject.date), { addSuffix: true })}
                </span>
                <p className="text-gray-700 text-lg whitespace-pre-wrap">
                  {selectedProject?.description}
                </p>
              </div>
            </div>
            
            <div className="flex justify-end mt-6 pt-4 border-t sticky bottom-0 bg-background">
              <Button variant="default" onClick={handleCloseProjectView}>
                Close
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* All Projects View */}
      <Dialog open={showAllProjects} onOpenChange={() => setShowAllProjects(false)}>
        <DialogContent className="full-screen-modal w-full h-full max-w-none m-0 p-0 rounded-none border-none">
          <div className="h-full w-full flex flex-col overflow-hidden bg-background p-4 sm:p-6 md:p-8">
            <DialogHeader className="relative border-b pb-4 mb-4">
              <div className="flex items-center">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setShowAllProjects(false)}
                  className="mr-2"
                >
                  <ChevronLeft size={20} />
                </Button>
                <DialogTitle className="text-3xl font-bold">All Upcoming Projects</DialogTitle>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setShowAllProjects(false)}
                  className="absolute right-0 top-0"
                >
                  <X size={24} />
                </Button>
              </div>
            </DialogHeader>
            
            <div className="flex-1 overflow-y-auto px-2 custom-scrollbar">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-6">
                {projects.map((project) => {
                  const formattedDate = formatDistanceToNow(new Date(project.date), { addSuffix: true });
                  
                  return (
                    <Card key={project.id} className="p-6 hover:shadow-md transition-shadow">
                      <h3 className="font-semibold text-xl mb-3">{project.title}</h3>
                      <p className="text-gray-600 mb-6">{project.description}</p>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-500">Coming {formattedDate}</span>
                        <Button 
                          variant="outline" 
                          onClick={() => {
                            setShowAllProjects(false);
                            setTimeout(() => handleViewProject(project), 100);
                          }}
                        >
                          View Details
                        </Button>
                      </div>
                    </Card>
                  );
                })}
              </div>
              
              {projects.length === 0 && (
                <div className="flex flex-col items-center justify-center h-[50vh]">
                  <h3 className="text-xl font-medium text-gray-800">No upcoming projects found</h3>
                  <p className="text-gray-500 mt-2">Check back soon for new projects</p>
                </div>
              )}
            </div>
            
            <div className="flex justify-end mt-6 pt-4 border-t sticky bottom-0 bg-background">
              <Button variant="default" onClick={() => setShowAllProjects(false)}>
                Close
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

import { Badge } from "@/components/ui/badge";
export default UpcomingProjects;
