import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import fcSchalkeImg from "@/public/fc_schalke.png";
import hrAnalyticsImg from "@/public/hr_analytics.png";
import salaryPredImg from "@/public/salary_pred.png";

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
      "Currently I am working  with Prof. Dr. Christian Deutscher on diverse sports research projects. Skilled in data scraping, statistical modeling, and visualizing insights from large datasets, including >3M data points from Bundesliga, Marathons, Hockey, and NBA L2M reports.",
    icon: React.createElement(CgWorkAlt),
    date: "May 2024 - Present",
  },
  {
    title: "Hochschule Bielefeld",
    location: "Bielefeld, Germany",
    description:
      "Learned and contributed to the development privacy-preserving machine learning solutions for the CareTech OWL project, leveraging Fully Homomorphic Encryption (FHE) and Concrete-ML to further securely train models on real-world sensor data while ensuring data confidentiality.",
    icon: React.createElement(CgWorkAlt),
    date: "May 2024 - Aug 2024",
  },
  {
    title: "Bielefeld University(Department of Mathematics)",
    location: "Bielefeld, Germany",
    description:
      "Teaching Assistant for Mathematics 1 at Bielefeld University, conducting weekly 3 in-person tutorials and collaborating with Prof. Dr. Michael Hinz and fellow tutors.",
    icon: React.createElement(CgWorkAlt),
    date: "Oct 2023 - Mar 2024",
  }
] as const;

export const projectsData = [
  {
    title: "FC Schalke Statistical Consulting",
    description:
      "Analyzed large and complex Bundesliga game data using clustering techniques to uncover patterns in player performance during 2vs1 situations.",
    tags: ["python", "Excel", "Scikit-learn", "Seaborn", "Latex"],
    imageUrl: fcSchalkeImg,
    url: "https://github.com/BhautikLukhi/Statistical-Consulting",
  },
  {
    title: "HR Analytics Power BI Dashboard",
    description:
      "Designed and developed an HR Analytics Power BI Dashboard from scratch, transforming raw data into actionable insights.",
    tags: ["Power BI", "Excel", "Microsoft 365"],
    imageUrl: hrAnalyticsImg,
    url: "https://app.powerbi.com/groups/me/reports/f096b884-84c5-40bb-80de-0d5a90d1a96b/ReportSection?experience=power-bi",
  },
  {
    title: "Salary Prediction Web app",
    description:
      "Built a machine learning model using real-world data from Stack Overflow and developed a salary predictor web app and deployed the app using the Streamlit library.",
    tags: ["python", "Streamlit", "Scikit-learn"],
    imageUrl: salaryPredImg,
    url: "https://salary-predictor-2024.streamlit.app",
  },
] as const;

export const skillsData = [
  "python",
  "R",
  "Latex",
  "Pandas",
  "NumPy",
  "Matplotlib",
  "Seaborn",
  "BeautifulSoup",
  "Selenium",
  "TensorFlow",
  "Keras",
  "Scikit-learn",
  "OpenCV",
  "Git/GitHub",
  "SQL",
  "Power BI",
  "Excel",
  "REST-APIs",
  "MS Office Suite",
  "German(A2-B1)",
] as const;