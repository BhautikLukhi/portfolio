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
    title: "Bielefeld University(Department of Sports Science)",
    location: "Bielefeld, Germany",
    description:
      "Currently I am working  with Prof. Dr. Christian Deutscher on diverse sports research projects. Skilled in data scraping, statistical modeling, and visualizing insights from large datasets, including ~3M data points from marathons, hockey, and NBA reports.",
    icon: React.createElement(CgWorkAlt),
    date: "May 2024 - Present",
  },
  {
    title: "Hochschule Bielefeld",
    llocation: "Bielefeld, Germany",
    description:
      "Developed privacy-preserving machine learning solutions for the CareTech OWL project, leveraging Fully Homomorphic Encryption (FHE) and Concrete-ML to securely train models on real-world sensor data while ensuring data confidentiality.",
    icon: React.createElement(CgWorkAlt),
    date: "May 2024 - Aug 2024",
  },
  {
    title: "Bielefeld University(Department of Mathematics)",
    location: "Bielefeld, Germany",
    description:
      "Teaching Assistant for Mathematics 1 at Bielefeld University, conducting weekly 3 in-person tutorials and collaborating with Prof. Dr. Michael Hinz and fellow tutors",
    icon: React.createElement(CgWorkAlt),
    date: "Oct 2023 - Mar 2024",
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