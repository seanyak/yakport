import React from "react";
import { VscSymbolNamespace } from "react-icons/vsc";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import selfloveclubImg from "@/public/SLCbam.jpg";
import infinitewellnessImg from "@/public/logo_infinitewellness.png";
import sonicdefcultImg from "@/public/defcult01.jpg";
import zoohausImg from "@/public/lp_zoohaus.jpg";
import richard from "@/public/richard.png"

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
    title: "Self Love Club",
    description:
      "I worked as a full-stack developer on this project, building their website from start to finish. Worked on web development, graphic design, content creation, marketing, SEO",
    tags: ["React", "Next.js", "MongoDB", "Tailwind"],
    imageUrl: selfloveclubImg,
  },
  {
    title: "Infinite Wellness",
    description:
        "I worked as a full-stack developer on this project, building their website from start to finish. Worked on web development, graphic design, content creation, marketing, SEO.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: infinitewellnessImg,
  },
  {
    title: "Def Cult",
    description:
      "A public web app for music lovers. Worked on web development, graphic design, content creation, marketing, SEO",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Adobe"],
    imageUrl: sonicdefcultImg,
  },
  {
    title: "ZooHaus",
    description:
      "A public web app for the artist known as ZooHaus. Worked on web development, graphic design, content creation, marketing, SEO, audio, video",
    tags: ["React", "Next.js", "Tailwind", "Adobe", "Ableton"],
    imageUrl: zoohausImg,
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
  "Adobe",
  "Ableton",
] as const;