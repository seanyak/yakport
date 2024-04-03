import React from "react";
import { VscSymbolNamespace } from "react-icons/vsc";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import richard from "@/public/richard.png";
import JimDine from "@/public/proj_JimDine.png";
import AAMG from "@/public/proj_AAMG.png";
import Skidmore from "@/public/proj_Skidmore.png"
import SLC from "@/public/proj_SLC.png"

export const portrait = {
    imageUrl: richard,
}

export const links = [
  {
    name: "HOME",
    hash: "#home",
  },
  {
    name: "ABOUT",
    hash: "#about",
  },
  {
    name: "PROJECTS",
    hash: "#projects",
  },
  {
    name: "SKILLS",
    hash: "#skills",
  },
  {
    name: "EXPERIENCE",
    hash: "#experience",
  },
  {
    name: "CONTACT",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Harvard X",
    location: "Online",
    description:
      "Completion of Computer Science (CS50) and Web Programming with Python and JavaScript (CS50W) coursework",
    icon: React.createElement(LuGraduationCap),
    date: "2021-2022",
  },
  {
    title: "freeCodeCamp",
    location: "Online",
    description:
      "Completeion of coursework in Web Design, Front End Development Libraries, Data Visualization, JavaScript Algorithms and Data Structures",
    icon: React.createElement(VscSymbolNamespace),
    date: "2022-2023",
  },
  {
    title: "Web Developer",
    location: "Freelance",
    description:
      "I have been working as a freelance web developer since 2021. My stack includes React, Next.js, TypeScript, Tailwind, and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2021 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Jim Dine",
    description:
      "Worked on site design and development, content creation, and SEO",
    tags: ["Squarespace", "Design", "Develop", "SEO"],
    imageUrl: JimDine,
    projUrl: "https://www.jimdine.com/",
  },
  {
    title: "Artist Asset Management Group",
    description:
      "I worked on the design and development of their site, content creation, and SEO.",
    tags: ["Squarespace", "Design", "Develop", "SEO"],
    imageUrl: AAMG,
    projUrl: "https://www.artassetmanagementgroup.com/",
  },
  {
    title: "Skidmore Contemporary Art",
    description:
      "Designed and developed their site to showcase their Artists & Exhibitions. Also worked on content creation, and SEO.",
    tags: ["Big Commerce", "Design", "Develop", "SEO"],
    imageUrl: Skidmore,
    projUrl: "https://skidmorecontemporaryart.com/",
  },
  {
    title: "Self Love Club",
    description:
      "I worked on the design and development of their website. Also worked on graphic design, content creation, and SEO.",
    tags: ["Square", "Design", "Develop", "SEO"],
    imageUrl: SLC,
    projUrl: "https://self-love-club-bodyworks-and-massage.square.site/",
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Express",
  "PostgreSQL",
  "Python",
  "Django",
  "Flask",
  "Framer Motion",
  "Adobe Creative Suite",
  "Ableton",
] as const;