
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";

export interface UpcomingProject {
  id: string;
  title: string;
  description: string;
  date: string;
}

export const useUpcomingProjects = () => {
  return useQuery({
    queryKey: ["upcomingProjects"],
    queryFn: async (): Promise<UpcomingProject[]> => {
      const { data, error } = await supabase
        .from("upcoming_projects")
        .select("*")
        .order("date", { ascending: true });

      if (error) {
        console.error("Error fetching upcoming projects:", error);
        throw error;
      }

      return data;
    },
  });
};
