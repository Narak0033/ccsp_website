// components/ProjectCard.tsx
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Calendar } from "lucide-react";
import Link from "next/link";
import React from "react";
import { projects, Projects } from "@/constant/constant"; 

const ProjectCard: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:px-8 lg:px-0 ">
      {projects.map((project: Projects, idx: number) => (
        <Card
          key={idx}
          className="bg-[#0f142ed9] border-gray-500 rounded-sm overflow-hidden p-0 gap-2 ">
          
          <div className="relative">
            <Image
              src={project.src}
              alt={project.title}
              width={600}
              height={400}
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

            <h4 className="text-base text-white leading-relaxed">{project.title}</h4>

            <Button asChild className="w-full p-4 bg-gray-600 text-white hover:bg-white hover:text-black">
              <Link href={project.href}>Read More</Link>
            </Button>
          </div>
        </Card>
      ))}
    </div>
  );
};

export default ProjectCard;
