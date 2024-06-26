"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";


export default function About() {
  const { ref } = useSectionInView("ABOUT");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.47 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3 text-justify">
        My journey in the tech world kicked off back in Web 1.0, where I dabbled in crafting static websites. 
        I created sites as a hobby for friends and eventually for bands and record labels. My passion for music
        took precedent and as I began playing music more I worked on websites less. Fast forward to 2020, decided 
        to make a career shift and go all-in on{" "}
        <span className="font-medium">Web Development</span>. I enrolled in classes online at HarvardX, through edX, 
        as well as freeCodeCampand learned{" "}
        <span className="font-medium">full-stack web development</span>.{" "}
        <span className="italic">My favorite thing about web development</span> is the
        ability to creatively solve problems with code. My core stack
        is{" "}
        <span className="font-medium">
          React, Next.js, Node.js, and MongoDB
        </span>
        . I am also familiar with TypeScript and Laravel. I'm always hungry to learn and master new tech. I am 
        currently looking for a{" "}
        <span className="font-medium">full-time position</span> as a
        developer.
      </p>
      <p>
        <span className="italic">When I'm not coding</span>, I enjoy creating music, 
        discovering new grooves, coaching youth soccer, watching footy, and hanging
        with the fam at the beach. 
      </p>
      <p className="mt-3 text-xl font-medium">
      Let's make something!
      </p>
    </motion.section>
  );
}