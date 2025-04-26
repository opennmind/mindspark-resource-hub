
import { useState } from 'react';
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Home, Image, Code, FileText, BookmarkIcon, ChevronLeft, ChevronRight } from "lucide-react";

interface SidebarProps {
  activeCategory: string;
  setActiveCategory: (category: string) => void;
}

export const Sidebar = ({ activeCategory, setActiveCategory }: SidebarProps) => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  const navItems = [
    { name: 'all', label: 'Home', icon: <Home size={20} /> },
    { name: 'photo', label: 'Photos', icon: <Image size={20} /> },
    { name: 'code', label: 'Code', icon: <Code size={20} /> },
    { name: 'survey', label: 'Surveys', icon: <FileText size={20} /> },
    { name: 'favorites', label: 'Favorites', icon: <BookmarkIcon size={20} /> },
  ];

  return (
    <div
      className={cn(
        "bg-white border-r border-gray-100 flex flex-col h-screen sticky top-0 transition-all duration-300",
        isCollapsed ? "w-16" : "w-64"
      )}
    >
      <div className="flex items-center justify-between p-4 border-b border-gray-100">
        <h1 
          className={cn(
            "text-xl font-semibold transition-opacity", 
            isCollapsed ? "opacity-0 w-0" : "opacity-100"
          )}
        >
          OpenMind
        </h1>
        <Button
          variant="ghost"
          size="icon"
          onClick={toggleSidebar}
          className="text-gray-500 hover:text-black hover:bg-gray-50"
        >
          {isCollapsed ? <ChevronRight size={16} /> : <ChevronLeft size={16} />}
        </Button>
      </div>

      <div className="flex-1 py-8">
        <nav>
          <ul className="space-y-2 px-2">
            {navItems.map((item) => (
              <li key={item.name}>
                <Button
                  variant="ghost"
                  size={isCollapsed ? "icon" : "default"}
                  className={cn(
                    "w-full justify-start",
                    activeCategory === item.name
                      ? "bg-gray-100 text-black font-medium"
                      : "text-gray-600 hover:text-black hover:bg-gray-50"
                  )}
                  onClick={() => setActiveCategory(item.name)}
                >
                  <span className="mr-2">{item.icon}</span>
                  {!isCollapsed && <span>{item.label}</span>}
                </Button>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
