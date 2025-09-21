import { getAllProjects, Blog } from "./posts";

export interface CardData {
  src: string;
  tag: string;
  readableDate: string;
  title: string;
  description: string;
  href: string;
}

export function getProjectsForCards(locale: "en" | "km"): CardData[] {
  const posts: Blog[] = getAllProjects(locale);

  return posts.map((post) => ({
    src: post.featuredImage 
      ? post.featuredImage 
      : `/images/logo/${post.slug}.png`, // fallback if no featuredImage
    tag: post.slug,
    readableDate: post.date,
    title: post.title,
    description: post.content.slice(0, 200) + "...",
    href: `/projects/${post.slug}`,
  }));
}
