import React from "react";
import { getProject } from "@/lib/posts";
import ProjectDetail from "@/components/Project/ProjectDetail";

interface ProjectDetailPageProps {
  params: { locale: "en" | "km"; project: string };
}

// Mark the page async
export default async function ProjectDetailPage({ params }: ProjectDetailPageProps) {
  // destructure params
  const { locale, project } = params;

  // fetch post
  const post = getProject(locale, project);

  // Optional 404
  if (!post) {
    return <div>Project not found</div>;
  }

  return (
    <div className="overflow-hidden pt-[12vh]">
      <ProjectDetail post={post} project={project} />
    </div>
  );
}
