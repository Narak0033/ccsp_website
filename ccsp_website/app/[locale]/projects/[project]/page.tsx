import React from "react";
import { getProject } from "@/lib/posts";
import ProjectBlog from "@/components/Project/ProjectBlog";

interface ProjectDetailProps {
  params: { locale: "en" | "km"; project: string };
}

export default function ProjectDetailPage({ params }: ProjectDetailProps) {
  const { locale, project } = params;
  const post = getProject(locale, project);

  return (
    <div className="overflow-hidden">
    <div className="container my-20 grid grid-cols-1 lg:grid-cols-3 gap-8">
      {/* Main content */}
      <div className="lg:col-span-2">
        <ProjectBlog post={post} />
      </div>

      {/* Sidebar */}
      <aside className="lg:col-span-1 sticky top-24 space-y-6">
        <div className="p-6 rounded-xl bg-gray-800 text-center">
          <img
            src={`/logos/${project}.png`}
            alt={`${post.title} Logo`}
            className="w-24 h-auto mx-auto mb-4"
          />
          <h3 className="text-lg font-bold">{post.title}</h3>
          <p className="text-gray-400">{post.author}</p>
        </div>

        <div className="p-6 rounded-xl bg-gray-800">
          <h4 className="font-semibold mb-3">Follow Us</h4>
          <ul className="space-y-2">
            <li>
              <a href="#" className="text-blue-400 hover:underline">
                Facebook
              </a>
            </li>
            <li>
              <a href="#" className="text-blue-400 hover:underline">
                Instagram
              </a>
            </li>
          </ul>
        </div>
      </aside>
    </div>
  </div>
  );
}
