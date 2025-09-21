import fs from "fs";
import path from "path";
import matter from "gray-matter";

export interface Blog {
  slug: string;
  title: string;
  date: string;
  author: string;
  content: string;
  featuredImage?: string;
  galleryImages?: string[];
}

// Get all projects for a locale
export function getAllProjects(locale: "en" | "km"): Blog[] {
  const dirPath = path.resolve("./content", locale); // always resolve from root
  if (!fs.existsSync(dirPath)) {
    throw new Error(`Locale folder not found: ${dirPath}`);
  }

  const files = fs.readdirSync(dirPath);

  return files.map((file) => {
    const slug = file.replace(/\.md$/, "");
    const filePath = path.join(dirPath, file);
    const fileContent = fs.readFileSync(filePath, "utf-8");
    const { data, content } = matter(fileContent);

    return {
      slug,
      title: data.title || slug,
      date: data.date || "",
      author: data.author || "Unknown",
      content,
      featuredImage: data.featuredImage || null,
      galleryImages: data.galleryImages || [],
    };
  });
}

// Get a single project
export function getProject(locale: "en" | "km", project: string): Blog {
  if (!locale || !project) throw new Error("Missing locale or project");

  const filePath = path.resolve("./content", locale, `${project}.md`);
  if (!fs.existsSync(filePath)) {
    throw new Error(`Markdown file not found: ${filePath}`);
  }

  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContent);

  return {
    slug: project,
    title: data.title || project,
    date: data.date || "",
    author: data.author || "Unknown",
    content,
    featuredImage: data.featuredImage || null,
    galleryImages: data.galleryImages || [],
  };
}
