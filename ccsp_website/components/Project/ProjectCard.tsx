// components/ProjectCard.tsx
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { projects, Projects } from "@/constant/constant"; 
import { Calendar } from "lucide-react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import React from "react";
import Image from "next/image";

const ProjectCard: React.FC = () => {
  function truncateText(text: string, wordLimit: number) {
  const words = text.split(" ");
  if (words.length <= wordLimit) return text;
  return words.slice(0, wordLimit).join(" ") + "...";
}

  return (
    <div className="grid grid-cols-1 gap-6 md:px-8 lg:px-0 ">
      {projects.map((project: Projects, idx: number) => (
        <Card
          key={idx}
          className="bg-[#0f142ed9] border-gray-600 rounded-sm overflow-hidden p-0 gap-2 flex flex-col md:flex-row">
          
          <div className="relative">
            <Image
              src={project.src}
              alt={project.title}
              width={600}
              height={400}
              priority
              className="w-full object-cover block"
            />
          </div>

          <div className="p-4 space-y-4 mb-2">
            <Badge className="bg-[#B22234]/80">{project.tag}</Badge>

            <div className="flex items-center gap-2">
              <Calendar size={14} className="text-white/70" />
              <time className="text-xs text-white/70 font-medium">
                {project.readableDate}
              </time>
            </div>

            <h4 className="text-xl text-white leading-relaxed">{project.title}</h4>
            <p className="text-sm text-white/80">
              {truncateText(project.description, 20)} {/* limit to 20 words */}
            </p>
            <Link
              href={project.href}
              className="group inline-flex items-center text-[#B22234] hover:underline font-medium"
            >
              See more
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </Card>
      ))}
    </div>
  );
};

export default ProjectCard;
