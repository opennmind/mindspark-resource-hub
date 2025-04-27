
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
      try {
        const { data, error } = await supabase
          .from("upcoming_projects")
          .select("*")
          .order("date", { ascending: true });

        if (error) {
          console.error("Error fetching upcoming projects:", error);
          throw error;
        }

        return data || [];
      } catch (err) {
        console.error("Failed to fetch upcoming projects:", err);
        throw err;
      }
    },
    retry: 1,
    staleTime: 1000 * 60 * 5, // 5 minutes
  });
};
