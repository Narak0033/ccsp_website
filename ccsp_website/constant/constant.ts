import { Users, BookOpen, Lightbulb, Globe } from "lucide-react";

// ------------------- Types -------------------
export interface NavLink {
  id: number;
  url: string;
  label: string;
}

export interface Feature {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  text: string;
  color: string;
}

export interface HeroSlide {
  src: string;
  title: string;
  description: string;
}
export interface Projects {
  src: string;
  tag: string;
  readableDate: string;
  title: string;
  href: string;
}
export interface SocialMedia {
  href: string;
  src: string;
  label: string;
}

// ------------------- Navigation Links -------------------
export const NavLinks: NavLink[] = [
  { id: 1, url: "", label: "Home" },
  { id: 2, url: "about", label: "About" },
  { id: 3, url: "projects", label: "Projects" },
  { id: 4, url: "contact", label: "Contact" },
];


// ------------------- Features -------------------
export const Features: Feature[] = [
  { icon: BookOpen, text: "STEM Education", color: "text-blue-600" },
  { icon: Globe, text: "English Language", color: "text-green-600" },
  { icon: Lightbulb, text: "Critical Thinking", color: "text-yellow-600" },
  { icon: Users, text: "Community Focus", color: "text-purple-600" },
];

// ------------------- Hero Slides -------------------
export const heroSlides: HeroSlide[] = [
  {
    src: "/images/home/homepage1.png",
    title: "Stem4Change",
    description: "Students engaging in hands-on STEM activities",
  },
  {
    src: "/images/home/homepage2.png",
    title: "Community Impact",
    description: "Making a difference in our community",
  },
];

export const projects: Projects[] = [
  {
    src: "/images/home/homepage1.png",
    tag: "STEM",
    readableDate: "3-4 Jan 2025",
    title:
      "Support Our Mission: STEM4Change: Together, We Can Improve Our Community Better!",
    href: "/projects/stem",
  },
  {
    src: "/images/home/homepage1.png",
    tag: "STEM",
    readableDate: "3-4 Jan 2025",
    title:
      "Support Our Mission: STEM4Change: Together, We Can Improve Our Community Better!",
    href: "/projects/stem",
  },
  {
    src: "/images/home/homepage1.png",
    tag: "STEM",
    readableDate: "3-4 Jan 2025",
    title:
      "Support Our Mission: STEM4Change: Together, We Can Improve Our Community Better!",
    href: "/projects/stem",
  },
];

export const socialLink: SocialMedia[] = [
  {
      href: "https://www.facebook.com/profile.php?id=61566459083009",
      src:  "/images/media-logo/fb.png",
      label: "Facebook",
    },
    {
      href: "https://www.instagram.com/aupp_ccsp?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
       src:  "/images/media-logo/ig.png",
      label: "Instagram",
    },
];