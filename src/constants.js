// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import reduxLogo from './assets/tech_logo/redux.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import javaLogo from './assets/tech_logo/java.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import mcLogo from './assets/tech_logo/mc.png';
import netlifyLogo from './assets/tech_logo/netlify.png';
import vercelLogo from './assets/tech_logo/vercel.png';
import postgreLogo from './assets/tech_logo/postgre.png';
import jestLogo from './assets/tech_logo/jest.png';
import junitLogo from './assets/tech_logo/junit.png';
import mochaLogo from './assets/tech_logo/mocha.jpeg';
import webpackLogo from './assets/tech_logo/Webpack.jpeg';
import gradleLogo from './assets/tech_logo/gradle.png';
import dockerLogo from './assets/tech_logo/docker.png'
// Experience Section Logo's
import ikkasaLogo from './assets/company_logo/Ikkasa_Logo_1.webp';
import ggsandco from './assets/company_logo/ggsandco..png';

// Education Section Logo's
import krmuLogo from './assets/education_logo/krmu.jpeg';
import gmpsLogo from './assets/education_logo/gmps.jpeg';

// Project Section Logo's
import dinewiseLogo from './assets/work_logo/dinewise.png';
import notebookLogo from './assets/work_logo/notebook.png';
import newsappLogo from './assets/work_logo/newsapp.png';
import textutilsLogo from './assets/work_logo/Textutils.png';



export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Redux', logo: reduxLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
      { name: 'PostgreSQL', logo: postgreLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'C++', logo: cppLogo },
      { name: 'Java', logo: javaLogo },
      { name: 'JavaScript', logo: javascriptLogo },
    ],
  },
  {
    title: 'Testing Tools',
    skills: [
      { name: 'Jest', logo: jestLogo },
      { name: 'Junit', logo: junitLogo },
      { name: 'Mocha/chai', logo: mochaLogo },
    ],
  },
  {
    title: 'Build Tools',
    skills: [
      { name: 'Webpack', logo: webpackLogo },
      { name: 'Gradle', logo: gradleLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Docker' ,logo:dockerLogo},
      { name: 'Postman', logo: postmanLogo },
      { name: 'Compass', logo: mcLogo },
      { name: 'Vercel', logo: vercelLogo },
      { name: 'Netlify', logo: netlifyLogo },
    ],
  },
];

  export const experiences = [
    {
      id: 0,
      img: ikkasaLogo,
      role: "Fullstack Developer",
      company: "Ikkasa",
      date: "July 2025 - Present",
      desc: "Developed dynamic and scalable web applications using the MERN stack, handling both frontend and backend development. Collaborated with cross-functional teams to build responsive UI, implement RESTful APIs, and optimize application performance in an agile environment.",
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "React JS",
        "Node JS",
        "Tailwind CSS",
        "MongoDb",
        "Redux",
      ],
    },
    {
      id: 1,
      img: ggsandco,
      role: "Fullstack developer Intern",
      company: "GGS and Co.",
      date: "June 2025 - July 2025",
      desc: "I worked on enhancing and modifying the company’s website using the MERN stack, gaining hands-on experience in full-stack development and real-world workflows. My contributions included building and updating frontend components with React.js to improve UI/UX, and creating RESTful APIs using Node.js and Express.js. I also managed and optimized MongoDB database operations to ensure efficient data handling and performance.",
      skills: [
        "ReactJS",
        "Redux",
        "JavaScript",
        "Tailwind CSS",
        "HTML",
        "CSS",
        "MongoDb",
      ],
    },
  ];
  
  export const education = [
    {
      id: 0,
      img: krmuLogo,
      school: "K.R Mangalam University, Gurugram",
      date: "Aug 2022 - Present",
      grade: "8.0 CGPA",
      desc: "I completed my Bachelor's degree in Computer Science and Engineering from K.R Mangalam University, Gurugram. Throughout my studies, I was immersed in a variety of subjects that deepened my understanding of computing and technology. From exploring Data Structures and Algorithms to diving into Web Development and Database Management Systems, I gained practical insights into the world of software development. My time at K.R Mangalam Univeristy allowed me to work on projects that applied theoretical concepts to real-world problems.",
      degree: "Bachelor of Technology - B.Tech(Computor Science and Engineering)",
    },
    {
      id: 1,
      img: gmpsLogo,
      school: "Great Mission Public School, Ramnagar Uttarakhand",
      date: "Apr 2021 - March 2022",
      grade: "81%",
      desc: "I completed my class 12 education from Great Mission Public School, Ramnagar Uttarakhand, under the CBSE board, where I studied Physics, Chemistry, and Mathematics (PCM).",
      degree: "CBSE(XII) - PCM ",
    },
    {
      id: 2,
      img: gmpsLogo,
      school: "Great Mission Public School, Ramnagar Uttarakhand",
      date: "Apr 2019 - March 2020",
      grade: "83%",
      desc: "I completed my class 10 education from Great Mission Public School, Ramnagar Uttarakhand, under the CBSE board.",
      degree: "CBSE(X)",
    },
  ];
  
  export const projects = [
    {
      id: 0,
      title: "DineWise - REAL TIME DINE-OUT APPLICATION  ",
      description:
        "DineWise is a smart restaurant booking and review system built to elevate your dining experience. It empowers users to find, book, and review restaurants effortlessly, while providing restaurant owners with insights and feedback to improve their services.",
      image: dinewiseLogo,
      tags: ["HTML", "CSS", "JavaScript", "React JS", "Node JS", "Express JS", "MongoDB","API"],
      github: "https://github.com/Saksham706/DineWise",
    },
    {
      id: 1,
      title: "Notebook Web Application",
      description:
        "Welcome to NoteBook — a secure, full-stack note-taking app built with React, Vite, Node.js, and Express.js. Organize your thoughts by creating folders and notes, with autosave and strong authentication to keep your data safe.",
      image: notebookLogo,
      tags: ["React JS", "Node.js", "MongoDB", "Express", "HTML", "CSS", "JavaScript"],
      github: "https://github.com/codingmastr/CSPrep",
    },
    {
      id: 2,
      title: "News App",
      description:
        "NewsApp is a React-based web application that delivers daily updated news from around the world using a third-party news API. Users can stay informed with the latest headlines, view article details including the publisher's name and publication date, and explore stories across various topics.",
      image: newsappLogo,
      tags: ["React JS", "API", "HTML", "CSS", "JavaScript"],
      github: "https://github.com/Saksham706/NewsApp",
    },
    {
      id: 3,
      title: "TextUtils",
      description:
        "TextUtils is a simple and interactive React-based web application that allows users to analyze and manipulate text quickly and efficiently. With a sleek user interface and essential utilities, this tool is ideal for students, developers, writers, or anyone working with text.",
      image: textutilsLogo,
      tags: ["HTML","CSS","Javascript","React JS"],
      github: "https://github.com/Saksham706/textUtils",
    }
  ];  