import fs from "fs";
import path from "path";
import matter from "gray-matter";

export interface Blog {
  slug: string;   // "ncic", "stem", etc.
  title: string;
  date: string;
  author: string;
  content: string;
}

export function getAllProjects(locale: string): Blog[] {
  const dirPath = path.join(process.cwd(), "content", locale);
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
    };
  });
}

export function getProject(locale: string, project: string): Blog {
  const filePath = path.join(process.cwd(), "content", locale, `${project}.md`);
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContent);

  return {
    slug: project,
    title: data.title || project,
    date: data.date || "",
    author: data.author || "Unknown",
    content,
  };
}
