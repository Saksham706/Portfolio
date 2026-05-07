import htmlLogo from "./assets/tech_logo/html.png";
import cssLogo from "./assets/tech_logo/css.png";
import javascriptLogo from "./assets/tech_logo/javascript.png";
import reactjsLogo from "./assets/tech_logo/reactjs.png";
import reduxLogo from "./assets/tech_logo/redux.png";
import tailwindcssLogo from "./assets/tech_logo/tailwindcss.png";
import bootstrapLogo from "./assets/tech_logo/bootstrap.png";

import nodejsLogo from "./assets/tech_logo/nodejs.png";
import expressjsLogo from "./assets/tech_logo/express.png";

import mysqlLogo from "./assets/tech_logo/mysql.png";
import mongodbLogo from "./assets/tech_logo/mongodb.png";
import postgreLogo from "./assets/tech_logo/postgre.png";
import redisLogo from "./assets/tech_logo/redis.png";

import cppLogo from "./assets/tech_logo/cpp.png";
import javaLogo from "./assets/tech_logo/java.png";

import gitLogo from "./assets/tech_logo/git.png";
import githubLogo from "./assets/tech_logo/github.png";
import vscodeLogo from "./assets/tech_logo/vscode.png";
import postmanLogo from "./assets/tech_logo/postman.png";
import dockerLogo from "./assets/tech_logo/docker.png";
import vercelLogo from "./assets/tech_logo/vercel.png";
import netlifyLogo from "./assets/tech_logo/netlify.png";

import openaiLogo from "./assets/tech_logo/openai.png";

// ==========================
// COMPANY LOGOS
// ==========================

import ikkasaLogo from "./assets/company_logo/Ikkasa_Logo_1.webp";

// ==========================
// EDUCATION LOGOS
// ==========================

import krmuLogo from "./assets/education_logo/krmu.jpeg";
import gmpsLogo from "./assets/education_logo/gmps.jpeg";

// ==========================
// PROJECT LOGOS
// ==========================

import vocodeLogo from "./assets/work_logo/vocodeai.png";
import unisyncLogo from "./assets/work_logo/Unisynclogo.png";
import dinewiseLogo from "./assets/work_logo/dinewise.png";
import notebookLogo from "./assets/work_logo/notebook.png";

// ==========================
// SKILLS
// ==========================

export const SkillsInfo = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML5", logo: htmlLogo },
      { name: "CSS3", logo: cssLogo },
      { name: "JavaScript", logo: javascriptLogo },
      { name: "React JS", logo: reactjsLogo },
      { name: "Redux", logo: reduxLogo },
      { name: "Tailwind CSS", logo: tailwindcssLogo },
      { name: "Bootstrap", logo: bootstrapLogo },
    ],
  },

  {
    title: "Backend",
    skills: [
      { name: "Node JS", logo: nodejsLogo },
      { name: "Express JS", logo: expressjsLogo },
      { name: "REST APIs", logo: expressjsLogo },
      { name: "JWT Authentication", logo: nodejsLogo },
    ],
  },

  {
    title: "Databases",
    skills: [
      { name: "MongoDB", logo: mongodbLogo },
      { name: "MySQL", logo: mysqlLogo },
      { name: "PostgreSQL", logo: postgreLogo },
      { name: "Redis", logo: redisLogo },
    ],
  },

  {
    title: "Programming",
    skills: [
      { name: "JavaScript", logo: javascriptLogo },
      { name: "Java", logo: javaLogo },
      { name: "C++", logo: cppLogo },
    ],
  },

  {
    title: "AI & Cloud",
    skills: [
      { name: "OpenAI API", logo: openaiLogo },
      { name: "Prompt Engineering", logo: openaiLogo },
      { name: "Docker", logo: dockerLogo },
      { name: "Containerization", logo: dockerLogo },
    ],
  },

  {
    title: "Tools",
    skills: [
      { name: "Git", logo: gitLogo },
      { name: "GitHub", logo: githubLogo },
      { name: "VS Code", logo: vscodeLogo },
      { name: "Postman", logo: postmanLogo },
      { name: "Vercel", logo: vercelLogo },
      { name: "Netlify", logo: netlifyLogo },
    ],
  },
];

// ==========================
// EXPERIENCE
// ==========================

export const experiences = [
  {
    id: 0,

    img: ikkasaLogo,

    role: "Web Developer Intern",

    company: "Ikkasa Concept Pvt Ltd",

    date: "Jul 2025 - Nov 2025",

    desc:
      "Designed and developed a responsive admin dashboard integrating 11+ camera APIs for real-time monitoring and analytics. Implemented secure JWT authentication and optimized backend workflows including order routing, product tracking, and API performance.",

    skills: [
      "React JS",
      "Node JS",
      "Express JS",
      "MongoDB",
      "JWT Authentication",
      "REST APIs",
      "Tailwind CSS",
      "API Integration",
    ],
  },
];

// ==========================
// EDUCATION
// ==========================

export const education = [
  {
    id: 0,

    img: krmuLogo,

    school: "K.R. Mangalam University, Gurugram",

    date: "2022 - 2026",

    grade: "CGPA: 8.02",

    degree: "Bachelor of Technology - Computer Science Engineering",

    desc:
      "Pursuing B.Tech in Computer Science Engineering with strong focus on Full Stack Development, Data Structures & Algorithms, System Design, Database Management, and Software Engineering.",
  },

  {
    id: 1,

    img: gmpsLogo,

    school: "Great Mission Public School",

    date: "2021 - 2022",

    grade: "81%",

    degree: "Higher Secondary Education (CBSE)",

    desc:
      "Completed Higher Secondary education with Physics, Chemistry, and Mathematics (PCM).",
  },

  {
    id: 2,

    img: gmpsLogo,

    school: "Great Mission Public School",

    date: "2019 - 2020",

    grade: "83%",

    degree: "Secondary Education (CBSE)",

    desc:
      "Completed Secondary School education with excellent academic performance.",
  },
];

// ==========================
// PROJECTS
// ==========================

export const projects = [
  {
    id: 0,

    title: "VocodeAI - Secure Cloud IDE Platform",

    description:
      "Built a cloud-based IDE platform with AI-powered code generation, debugging, intelligent suggestions, voice-driven coding, and multi-language execution using Docker containerization and Judge0/Compilex.",

    image: vocodeLogo,

    tags: [
      "React JS",
      "Node JS",
      "Express JS",
      "MongoDB",
      "Docker",
      "OpenAI API",
      "Monaco Editor",
      "JWT Authentication",
      "REST APIs",
    ],

    github: "https://github.com/Saksham706",
  },

  {
    id: 1,

    title: "UnivSync - Smart Notification Platform",

    description:
      "Developed a MERN stack academic scheduling and notification platform supporting 500+ users with real-time communication using Socket.io and automated notification workflows.",

    image: unisyncLogo,

    tags: [
      "React JS",
      "Node JS",
      "MongoDB",
      "Socket.io",
      "REST APIs",
      "Authentication",
    ],

    github:
      "https://github.com/Saksham706/Smart-Timetable-Notification-Bot-for-Students",
  },

  {
    id: 2,

    title: "DineWise - Restaurant Booking Platform",

    description:
      "A full-stack restaurant booking and review application with real-time table booking, ratings, location services, and responsive UI for enhanced dining experiences.",

    image: dinewiseLogo,

    tags: [
      "React JS",
      "Node JS",
      "MongoDB",
      "Express JS",
      "REST APIs",
      "Location API",
    ],

    github: "https://github.com/Saksham706/DineWise",
  },

  {
    id: 3,

    title: "Notebook - Secure Notes Application",

    description:
      "A secure MERN stack note-taking application featuring authentication, folder management, autosave functionality, and organized note storage.",

    image: notebookLogo,

    tags: [
      "React JS",
      "Node JS",
      "MongoDB",
      "JWT Authentication",
      "Express JS",
    ],

    github: "https://github.com/Saksham706",
  },
];