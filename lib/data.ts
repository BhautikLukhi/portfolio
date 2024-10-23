import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import projectManagerImg from "@/public/project_manager.png";
import twitterImg from "@/public/twitter.png";
import collegeWebsiteImg from "@/public/college_web.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Surf Beyond AS",
    location: "Remote",
    description:
      "Currently I am working on major system integration with third party server for IOT communication. Also work in front end dashboard made using Next.js and TailwindCSS.",
    icon: React.createElement(CgWorkAlt),
    date: "Dec 2023",
  },
  {
    title: "Wipro Pvt. Ltd.",
    location: "Remote",
    description:
      "I worked as a backend developer for a client and gained more experience towards developing backend intensive applications. Here, I have also fine tuned my TypeScript and Database management skills",
    icon: React.createElement(CgWorkAlt),
    date: "May 2022",
  },
  {
    title: "Infynno Solutions LLP",
    location: "Gujarat, India",
    description:
      "Got more exposure to work in Next.js and TailwindCSS to make eye pleasing user interfaces. Also worked in backend written in Node.js and MongoDB database.",
    icon: React.createElement(CgWorkAlt),
    date: "June 2023",
  }
] as const;

export const projectsData = [
  {
    title: "Project Management Site",
    description:
      "Partially functional and responsive project Management site for managing personal projects as tasks and share with others.",
    tags: ["React", "Firebase", "Custom Hooks"],
    imageUrl: projectManagerImg,
  },
  {
    title: "Twitter clone",
    description:
      "Tried to implement the Twitter user interface with responsive design using NextJS and Tailwind-CSS. Used NoSQL(Firestrore) database for manipulating tweets.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Firebase"],
    imageUrl: twitterImg,
  },
  {
    title: "GEC college website",
    description:
      "In collaboration with 2 other developers we made a website for our college and showcase the culture with details about amenities and faculties.",
    tags: ["React", "Node.js", "MongoDB", "Express.js"],
    imageUrl: collegeWebsiteImg,
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
  "Nest.js",
  "AWS",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "Express",
  "PostgreSQL",
  "Python",
  "Framer Motion",
] as const;