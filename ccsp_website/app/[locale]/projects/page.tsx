import ProjectCard from "@/components/Project/ProjectCard";
import { getProjectsForCards } from "@/lib/getProjectsForCards";

interface ProjectOverviewProps {
  params: { locale: "en" | "km" };
}

export default function AllProjects({ params }: ProjectOverviewProps) {
  const cards = getProjectsForCards(params.locale); // server-side

  return (
    <div className="overflow-hidden pt-[12vh]">
      <div className="container my-20">
        {/* Header Section */}
        <div
          className="flex justify-center items-center flex-col space-y-6 mb-12"
        >
          <div className="text-center space-y-4">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-full blur-xl opacity-30"></div>
              <h1 className="relative text-header font-bold leading-snug bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
                CCSP Projects
              </h1>
            </div>
          </div>
          <p className="text-center text-gray-200 subtext ">
            Highlighting the diverse projects organized by student clubs,
            dedicated to connecting knowledge with community service.
          </p>
        </div>

        {/* Project Cards */}
        <ProjectCard projects={cards} />
      </div>
    </div>
  );
}
