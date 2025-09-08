import { Users, BookOpen, Lightbulb, Globe, HandHeart, GraduationCap } from "lucide-react";

// ------------------- Types -------------------
export interface NavLink {
  id: number;
  url: string;
  label: string;
  children?: { id: number; url: string; label: string }[];
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
  description: string;
  href: string;
}
export interface SocialMedia {
  href: string;
  src: string;
  label: string;
}
export interface AboutCarousel{
  src: string;
}
export interface CardVission {
  title: string;
  description: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  iconColor: string;
  borderColor: string;
  bgColor?: string;
}

// ------------------- Navigation Links -------------------
export const NavLinks: NavLink[] = [
  { id: 1, url: "", label: "Home" },
  { id: 2, url: "about", label: "About",
    children: [
    { id: 1, url: "about/about-us", label: "About CCSP" },
    { id: 2, url: "about/about-team", label: "About Team" },
    ],
  },
  { id: 3, url: "projects", label: "Projects"},
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
    description:
      "We aim to empower students through hands-on STEM projects that drive innovation, teamwork, and positive change in the community.",
    href: "/projects/stem",
  },
  {
    src: "/images/home/homepage1.png",
    tag: "STEM",
    readableDate: "3-4 Jan 2025",
    title:
      "Support Our Mission: STEM4Change: Together, We Can Improve Our Community Better!",
      description:
      "We aim to empower students through hands-on STEM projects that drive innovation, teamwork, and positive change in the community.",
    href: "/projects/stem",
  },
  {
    src: "/images/home/homepage1.png",
    tag: "STEM",
    readableDate: "3-4 Jan 2025",
    title:
      "Support Our Mission: STEM4Change: Together, We Can Improve Our Community Better!",
      description:
      "We aim to empower students through hands-on STEM projects that drive innovation, teamwork, and positive change in the community.",
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

export const slide: AboutCarousel[] =[
  { src: "/images/carousel/carousel1.png" },
  { src: "/images/carousel/carousel2.png" },
  { src: "/images/carousel/carousel3.png" }
]

export const cards: CardVission[] = [
  {
    title: "Empower",
    description: "We aim to provide underprivileged communities, especially children, with the tools and opportunities to create change in their lives through education and skills development.",
    icon: HandHeart,
    iconColor: "text-[#1565c0]",
    borderColor: "border-[#1565c0]",
  },
  {
    title: "Education",
    description: "We focus on providing access to quality education in STEM and digital literacy, as education is key to creating lasting positive impacts.",
    icon: GraduationCap,
    iconColor: "text-[#B22234]",
    borderColor: "border-[#B22234]",
  },
  {
    title: "Sustain",
    description: "We are committed to ensuring that the positive changes we create are long-lasting, fostering continued growth and development for future generations.",
    icon: Globe,
    iconColor: "text-[#008000]",
    borderColor: "border-[#008000]",
  },
]