import htmlLogo from "./assets/tech_logo/html.png";
import cssLogo from "./assets/tech_logo/css.png";
import javascriptLogo from "./assets/tech_logo/javascript.png";
import typescriptLogo from "./assets/tech_logo/typescript.png";
import reactjsLogo from "./assets/tech_logo/reactjs.png";
import reduxLogo from "./assets/tech_logo/redux.png";
import tailwindcssLogo from "./assets/tech_logo/tailwindcss.png";
import bootstrapLogo from "./assets/tech_logo/bootstrap.png";

import nodejsLogo from "./assets/tech_logo/nodejs.png";
import expressjsLogo from "./assets/tech_logo/express.png";

import mysqlLogo from "./assets/tech_logo/mysql.png";
import mongodbLogo from "./assets/tech_logo/mongodb.png";
import postgreLogo from "./assets/tech_logo/postgre.png";
import redisLogo from "./assets/tech_logo/redis.jpg";

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
// PERSONAL INFO
// ==========================
export const personalInfo = {
  name: "Saksham Agarwal",
  roleTitle: "Software Developer",
  tagline: "Building scalable web architectures, enterprise CRMs, and cloud-native solutions",
  email: "sakshamagarwal706@gmail.com",
  phone: "+91-9897787403",
  location: "Gurugram / New Delhi, India",
  linkedin: "https://linkedin.com/in/saksham-agarwal706",
  github: "https://github.com/Saksham706",
  leetcode: "https://leetcode.com/u/saksham706",
  resume: "https://drive.google.com/file/d/1f4LqYGM-_9eCMhyzzpyVc25HfMPmAi64/view?usp=drivesdk",
  summary:
    "Software Developer with experience building scalable web architectures, enterprise CRM systems, and cloud-native applications. Proficient in full-stack engineering using Node.js, Express, React.js, and RESTful API integrations, with containerization via Docker and secure RBAC/JWT auth. Adept at translating business requirements into high-availability solutions in IT consulting and fast-paced environments. Finalist at HackKRMU 3.0 (Top 10/100).",
  stats: [
    { label: "DSA Solved", value: "300+", sub: "LeetCode Problems" },
    { label: "Hackathon Finalist", value: "Top 10", sub: "Out of 100+ Teams" },
    { label: "Setup Time Cut", value: "~90%", sub: "Docker Containerization" },
    { label: "API Speedup", value: "35%", sub: "Query Optimization" },
  ],
};

// ==========================
// SKILLS
// ==========================
export const SkillsInfo = [
  {
    title: "Languages",
    skills: [
      { name: "JavaScript (ES6+)", logo: javascriptLogo },
      { name: "TypeScript", logo: typescriptLogo },
      { name: "C++", logo: cppLogo },
      { name: "Java", logo: javaLogo },
      { name: "SQL", logo: mysqlLogo },
    ],
  },
  {
    title: "Backend & Architecture",
    skills: [
      { name: "Node.js", logo: nodejsLogo },
      { name: "Express.js", logo: expressjsLogo },
      { name: "RESTful APIs", logo: expressjsLogo },
      { name: "WebSockets (Socket.io)", logo: nodejsLogo },
      { name: "Microservices", logo: dockerLogo },
      { name: "JWT Auth & RBAC", logo: nodejsLogo },
    ],
  },
  {
    title: "Frontend Development",
    skills: [
      { name: "React.js", logo: reactjsLogo },
      { name: "HTML5", logo: htmlLogo },
      { name: "CSS3", logo: cssLogo },
      { name: "Tailwind CSS", logo: tailwindcssLogo },
      { name: "Bootstrap", logo: bootstrapLogo },
      { name: "Monaco Editor", logo: vscodeLogo },
      { name: "Responsive UI/UX", logo: reactjsLogo },
    ],
  },
  {
    title: "Databases & Caching",
    skills: [
      { name: "MongoDB", logo: mongodbLogo },
      { name: "MySQL", logo: mysqlLogo },
      { name: "PostgreSQL", logo: postgreLogo },
      { name: "Redis", logo: redisLogo },
      { name: "Schema Design & Optimization", logo: mongodbLogo },
    ],
  },
  {
    title: "Enterprise & Cloud Tools",
    skills: [
      { name: "Docker", logo: dockerLogo },
      { name: "Containerization", logo: dockerLogo },
      { name: "OpenAI API", logo: openaiLogo },
      { name: "Third-Party API Integration", logo: postmanLogo },
      { name: "Postman", logo: postmanLogo },
      { name: "Git & GitHub", logo: githubLogo },
      { name: "Vercel / Netlify CI/CD", logo: vercelLogo },
    ],
  },
  {
    title: "Core Concepts",
    skills: [
      { name: "Data Structures & Algorithms", logo: cppLogo },
      { name: "System Design", logo: dockerLogo },
      { name: "Object-Oriented Programming", logo: javaLogo },
      { name: "SDLC & Agile/Scrum", logo: gitLogo },
    ],
  },
];

// ==========================
// EXPERIENCE
// ==========================
export const experiences = [
  {
    id: 0,
    role: "Software Developer Intern",
    company: "Bitmax Technology Pvt Ltd",
    badge: "Current Role",
    date: "Oct 2026 – Present",
    location: "IT Consulting",
    img: null,
    initials: "BT",
    bullets: [
      "Engineered an end-to-end custom Lead Management CRM for business development, centralizing lead acquisition, stage tracking, and qualification pipelines to accelerate client conversion.",
      "Integrated multiple third-party REST APIs and enterprise CRMs, establishing secure webhooks and bi-directional data synchronization to eliminate manual data entry.",
      "Designed scalable backend endpoints using Node.js and Express with optimized database schemas, ensuring sub-100ms response times for high-volume lead updates.",
      "Collaborated in an Agile consulting environment to analyze business specifications and deliver reliable client-facing features ahead of schedule.",
    ],
    skills: [
      "Node.js",
      "Express.js",
      "CRM Systems",
      "RESTful APIs",
      "Webhooks",
      "Database Optimization",
      "Agile/Scrum",
      "Git",
    ],
  },
  {
    id: 1,
    role: "Web Developer Intern",
    company: "Ikkasa Concept Pvt Ltd",
    badge: "Founder's Office",
    date: "Jul 2025 – Nov 2025",
    location: "Gurugram, India",
    img: ikkasaLogo,
    initials: "IC",
    bullets: [
      "Built a responsive admin dashboard integrating 11+ camera APIs, enabling real-time monitoring and cutting operational oversight.",
      "Designed and implemented JWT-based RBAC, hardening application security across multi-tier administrative privilege levels.",
      "Optimized critical database queries and indexing strategies, improving API response times by 35% under heavy production loads.",
      "Streamlined order management workflows—routing, forwarding, and inventory tracking—reducing operational friction across the fulfilment pipeline.",
    ],
    skills: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT & RBAC",
      "REST APIs",
      "Tailwind CSS",
      "Camera API Integration",
    ],
  },
];

// ==========================
// ACHIEVEMENTS & CERTIFICATIONS
// ==========================
export const achievements = [
  {
    id: 0,
    title: "HackerRank Certified",
    subtitle: "Software Engineer & JavaScript Specialist",
    date: "Jul 2026",
    issuer: "HackerRank",
    category: "Role & Skill Certification",
    description:
      "Demonstrated industry-standard proficiency in core software engineering, algorithms, modern JavaScript (ES6+), and problem-solving.",
    link: "https://www.hackerrank.com",
    badge: "Verified Certification",
    type: "cert",
  },
  {
    id: 1,
    title: "Hackathon Finalist (Top 10)",
    subtitle: "HackKRMU 3.0",
    date: "2024",
    issuer: "K.R. Mangalam University",
    category: "Competitive Hackathon",
    description:
      "Secured Top 10 rank out of 100+ competing regional developer teams after building and pitching an end-to-end prototype under a 36-hour sprint.",
    badge: "Top 10 / 100+ Teams",
    type: "award",
  },
  {
    id: 2,
    title: "Dean's List Honoree",
    subtitle: "Academic Achievement Award",
    date: "2023 - 2024",
    issuer: "K.R. Mangalam University",
    category: "Academic Distinction",
    description:
      "Awarded academic honor by department faculty and leadership for consistent top-tier academic excellence in Computer Science & Engineering.",
    badge: "Academic Honors",
    type: "award",
  },
  {
    id: 3,
    title: "Competitive Programming",
    subtitle: "300+ Problems Solved on LeetCode",
    date: "Continuous",
    issuer: "LeetCode",
    category: "Algorithms & Problem Solving",
    description:
      "Solved 300+ algorithmic challenges covering Dynamic Programming, Trees, Graphs, Sliding Window, and Greedy approaches.",
    link: "https://leetcode.com/u/saksham706",
    badge: "300+ DSA Solved",
    type: "code",
  },
];

// ==========================
// PROJECTS
// ==========================
export const projects = [
  {
    id: 0,
    title: "VocodeAI – Cloud IDE Platform",
    subtitle: "Multi-Language Containerized Cloud IDE with AI Code Intelligence",
    featured: true,
    description:
      "Architected a multi-language cloud IDE with Docker/Judge0 containerization, isolating user code sandboxes and slashing dev setup time by ~90%. Integrated OpenAI API for context-aware code generation, automated refactoring, and real-time syntax debugging with granular JWT + RBAC authorization.",
    bullets: [
      "Architected a multi-language cloud IDE with Docker/Judge0 containerization, isolating user code sandboxes and slashing dev setup time by ~90%.",
      "Integrated OpenAI API for context-aware code generation, automated refactoring, and real-time syntax debugging.",
      "Built JWT + RBAC authentication supporting granular access control for private projects and collaborative workspaces.",
    ],
    image: vocodeLogo,
    tags: [
      "React.js",
      "Node.js",
      "Docker",
      "Judge0",
      "MongoDB",
      "OpenAI API",
      "Monaco Editor",
      "JWT / RBAC",
    ],
    github: "https://github.com/Saksham706/Vocodeai",
    liveDemo: "https://github.com/Saksham706/Vocodeai",
    metric: "~90% Setup Reduction",
  },
  {
    id: 1,
    title: "UnivSync – Notification Platform",
    subtitle: "Event-Driven Real-Time Notification & Academic Scheduling Platform",
    featured: true,
    description:
      "Built an event-driven notification platform using Socket.io WebSockets, delivering real-time push alerts with sub-second latency. Optimized MongoDB aggregation pipelines and REST API payload architecture, reducing redundant queries and minimizing latency.",
    bullets: [
      "Built an event-driven notification platform using Socket.io WebSockets, delivering real-time push alerts with sub-second latency.",
      "Optimized MongoDB aggregation pipelines and REST API payload architecture, reducing redundant queries and minimizing latency.",
      "Created a role-separated administrative dashboard supporting user permissions, broadcast messaging, and audit logging.",
    ],
    image: unisyncLogo,
    tags: [
      "React.js",
      "Node.js",
      "Socket.io",
      "MongoDB",
      "WebSockets",
      "REST APIs",
      "Tailwind CSS",
    ],
    github: "https://github.com/Saksham706/Smart-Timetable-Notification-Bot-for-Students",
    liveDemo: "https://github.com/Saksham706/Smart-Timetable-Notification-Bot-for-Students",
    metric: "Sub-Second Latency",
  },
  {
    id: 2,
    title: "DineWise – Restaurant Booking",
    subtitle: "Full-Stack Reservation & Real-Time Table Booking Engine",
    featured: false,
    description:
      "A full-stack restaurant booking and review application featuring dynamic table reservation, user reviews, location search services, and responsive UI for enhanced dining experiences.",
    bullets: [
      "Designed full-stack reservation workflows with live table availability and conflict resolution.",
      "Integrated geolocation services and responsive filters for quick restaurant discovery.",
    ],
    image: dinewiseLogo,
    tags: [
      "React.js",
      "Node.js",
      "MongoDB",
      "Express.js",
      "REST APIs",
      "Location API",
    ],
    github: "https://github.com/Saksham706/DineWise",
    liveDemo: "https://github.com/Saksham706/DineWise",
    metric: "Real-time Booking",
  },
  {
    id: 3,
    title: "Notebook – Cloud Notes App",
    subtitle: "Secure MERN Stack Note Organizer with Categorization & Autosave",
    featured: false,
    description:
      "A secure MERN stack note-taking application featuring JWT authentication, category folders, autosave synchronization, and clean responsive note management.",
    bullets: [
      "Implemented secure JWT user authentication and protected REST endpoints.",
      "Designed folder organization with autosave functionality and quick search.",
    ],
    image: notebookLogo,
    tags: [
      "React.js",
      "Node.js",
      "MongoDB",
      "JWT Auth",
      "Express.js",
      "Tailwind CSS",
    ],
    github: "https://github.com/Saksham706",
    liveDemo: "https://github.com/Saksham706",
    metric: "Instant Autosave",
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
    date: "2022 – 2026",
    grade: "CGPA: 7.91 / 10",
    degree: "B.Tech in Computer Science & Engineering",
    highlights: "Dean's List Honoree • HackKRMU 3.0 Finalist (Top 10)",
    desc:
      "Specialized in Full-Stack Engineering, Distributed Systems, Data Structures & Algorithms, Object-Oriented System Design, and Database Architecture.",
  },
  {
    id: 1,
    img: gmpsLogo,
    school: "Great Mission Public School (CBSE)",
    date: "2021 – 2022",
    grade: "81%",
    degree: "Higher Secondary (Class XII)",
    highlights: "PCM Stream (Physics, Chemistry, Mathematics)",
    desc:
      "Graduated with distinction in Mathematics and Computer Science, establishing strong analytical and logical reasoning foundations.",
  },
  {
    id: 2,
    img: gmpsLogo,
    school: "Great Mission Public School (CBSE)",
    date: "2019 – 2020",
    grade: "83%",
    degree: "Secondary Education (Class X)",
    highlights: "CBSE Board",
    desc:
      "Excelled across Science and Mathematics with active participation in STEM competitions and school tech events.",
  },
];
