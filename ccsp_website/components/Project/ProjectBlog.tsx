// components/Project/ProjectBlog.tsx
import React from "react";
import { Blog } from "@/lib/posts";

interface ProjectBlogProps {
  post: Blog;
}

export default function ProjectBlog({ post }: ProjectBlogProps) {
  return (
    <div className="rounded-xl shadow-lg p-6 bg-gray-900 text-white">
      <h1 className="text-3xl font-bold mb-2">{post.title}</h1>
      <p className="text-gray-400 text-sm mb-6">
        By {post.author} | {post.date}
      </p>
      <div className="whitespace-pre-line">{post.content}</div>
    </div>
  );
}
