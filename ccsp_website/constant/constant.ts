import { Users, BookOpen, Lightbulb, Globe, HandHeart, GraduationCap } from "lucide-react";


// ------------------- Types -------------------
export interface NavLink {
  id: number;
  url: string;
  label: string;
  children?: { id: number; url: string; label: string }[];
}
export interface FooterLinks {
  id: number;
  url: string;
  label: string;
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
export interface SocialLinksType{
  facebook: string;
  instagram: string;
}
export interface TeamMember{
  name: string;
  role: string;
  major: string;
  image: string;
  social?: SocialLinksType;
}
// ------------------- Navigation Links -------------------
export const NavLinks: NavLink[] = [
  { id: 1, url: "", label: "home" },
  {
    id: 2,
    url: "about",
    label: "about",
    children: [
      { id: 1, url: "about/about-us", label: "about-ccsp" },
      { id: 2, url: "about/about-team", label: "about-team" },
    ],
  },
  { id: 3, url: "projects", label: "projects" },
  { id: 4, url: "contact", label: "contact" },
];


export const projects: Projects[] = [
  {
    src: "/images/logo/stem.webp",
    tag: "STEM",
    readableDate: "3-4 Jan 2025",
    title:
      "Support Our Mission: STEM4Change: Together, We Can Improve Our Community Better!",
    description:
      "We aim to empower students through hands-on STEM projects that drive innovation, teamwork, and positive change in the community.",
    href: "/projects/stem",
  },
  {
    src: "/images/logo/ncic.webp",
    tag: "Community Service",
    readableDate: "April 6 2025",
    title:
      "Support Our Mission: STEM4Change: Together, We Can Improve Our Community Better!",
      description:
      "We aim to empower students through hands-on STEM projects that drive innovation, teamwork, and positive change in the community.",
    href: "/projects/stem",
  },
  {
    src: "/images/logo/cyberai.webp",
    tag: "CyberAI",
    readableDate: "Aug-September 2025",
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
      src:  "/images/media-logo/fb.webp",
      label: "Facebook",
    },
    {
      href: "https://www.instagram.com/aupp_ccsp?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
       src:  "/images/media-logo/ig.webp",
      label: "Instagram",
    },
];

export const slide: AboutCarousel[] =[
  { src: "/images/carousel/carousel1.webp" },
  { src: "/images/carousel/carousel3.webp" }
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

export const advisor: TeamMember[] = [
  {
    name: "Dr. Danet Hak",
    role: "Advisor",
    major: "Liberal Arts and Sciences",
    image: "/images/team/advisor-danet.webp",
    social: {
      facebook: "https://www.facebook.com/hak.danet.7",
      instagram: "https://www.instagram.com/hakdanet.7?igsh=MTYxZ3RtbWk1NnNxdw==",
    },
  },
]
export const leaders: TeamMember[] = [
  {
    name: "Chhoeth Chanrithlaksmey",
    role: "Leader",
    major: "Cybersecurity",
    image: "/images/team/leader-smi.webp",
    social: {
      facebook: "https://www.facebook.com/leaksmiii",
      instagram: "https://www.instagram.com/l34k5m111?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
    },
  },
  {
    name: "Leam Sreypich",
    role: "Co Leader",
    major: "Cybersecurity",
    image: "/images/team/leader-pich.webp",
    social: {
      facebook: "https://www.facebook.com/leam.sreypich.5",
      instagram: "https://www.instagram.com/h_orang.hae?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
    },
  },
]
export const member: TeamMember[] = [
  {
    name: "Chhay Chanboromey",
    role: "Officer",
    major: "Computer Science",
    image: "/images/team/member-mey.webp",
    social: {
      facebook: "https://www.facebook.com/chhay.chanboromey",
      instagram: "https://www.instagram.com/iamboromey?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
    },
  },
  {
    name: "Keo Ching Chou",
    role: "Officer",
    major: "Computer Science",
    image: "/images/team/member-chou.webp",
    social: {
      facebook: "https://www.facebook.com/XBangZeX",
      instagram: "https://www.instagram.com/xbangzex/?utm_source=ig_web_button_share_sheet",
    },
  },
  {
    name: "Tan Lydana",
    role: "Officer",
    major: "Software Development",
    image: "/images/team/member-dana.webp",
    social: {
      facebook: "https://www.facebook.com/dana.974245/",
      instagram: "https://www.instagram.com/__danaaaa__/",
    },
  },
  {
    name: "Horn Narak",
    role: "Officer",
    major: "Digital Infrastructure",
    image: "/images/team/member-narak.webp",
    social: {
      facebook: "https://www.facebook.com/na.rak.459263",
      instagram: "https://www.instagram.com/narak_03?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
    },
  },
  {
    name: "Hor Visal",
    role: "Officer",
    major: "Computer Science",
    image: "/images/team/member-visal.webp",
    social: {
      facebook: "https://www.facebook.com/share/1FzonyxWBm/",
      instagram: "https://www.instagram.com/svisal._?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
    },
  },
]

export const footerLinks: FooterLinks[] = [
  { id: 1, url: "", label: "home" },
  { id: 2, url: "about/about-us", label: "about-ccsp" },
  { id: 3, url: "about/about-team", label: "about-team" },
  { id: 4, url: "projects", label: "projects" },
  { id: 5, url: "contact", label: "contact" },
];
