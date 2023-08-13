import portfolio from "../assets/covers/portfolio.png";
import harvester from "../assets/covers/harvester.jpg";
import capstone from "../assets/covers/capstone.png";
import restapi from "../assets/covers/bookshelf.jpg";
import africasteel from "../assets/covers/africasteel.png";
import timer from "../assets/covers/timer.png";
import thinkLess from "../assets/covers/thinkLess.png";
import frameco from "../assets/covers/frameco.png";

export const projects = [
  {
    name: "Africa Steel",
    cover: africasteel,
    link: "https://africasteel.co.zw",
    technologies: [
      "React",
      "Node.js",
      "Typescript",
      "JavaScript",
      "npm",
      "email.js",
      "HTML",
      "CSS",
      "Vite",
    ],
    description:
      "Built a company website for a multi-million dollar company. The company has a range of steel products. Added contact forms, setup email templates, and configured their domain on cPanel.",
  },
  {
    name: "Frameco",
    cover: frameco,
    link: "https://frameco.co.zw",
    technologies: [
      "React",
      "Node.js",
      "Typescript",
      "JavaScript",
      "pnpm",
      "email.js",
      "HTML",
      "CSS",
      "Vite",
    ],
    description:
      "Build a website for a company that specialises in producing and selling aluminium roof trusses.",
  },
  {
    name: "Personal Portfolio",
    cover: portfolio,
    github: "https://github.com/ashilramjee/ashilramjee.github.io",
    technologies: [
      "React",
      "Node.js",
      "Typescript",
      "JavaScript",
      "npm",
      "email.js",
      "HTML",
      "CSS",
      "Vite",
    ],
    description:
      "Built a simple personal portfolio website for ease of access of information for potential stakeholders.",
  },
  {
    name: "OAI Harvester",
    cover: harvester,
    link: "https://github.com/ashilramjee/OAIharvester",
    github: "https://github.com/ashilramjee/ashilramjee.github.io",
    technologies: ["Python", "XML", "OAI protocol", "XSL"],
    description:
      "Built one of three components for the First Cultural Heritage Centralised Prototypes in South Africa. This compromised of the harvester component which takes in data, converts and exposes it",
  },
  {
    name: "PneumoVis",
    cover: capstone,
    github: "https://github.com/ashilramjee/ashilramjee.github.io",
    technologies: ["Python", "Django", "HTML", "CSS"],
    description:
      "Built a web application that visualizes Pneumococcal Infection Data that is supplied by the user. Users can visualise different statistics",
  },
  {
    name: "Bookshelf",
    cover: restapi,
    github: "https://github.com/ashilramjee/ashilramjee.github.io",
    technologies: ["Java", "Springboot", "Maven"],
    description:
      "Build a RestFul API that can be used to control a digital bookshelf",
  },
  {
    name: "Timer",
    cover: timer,
    link: "https://ashilramjee.com/timer",
    github: "https://github.com/ashilramjee/ashilramjee.github.io",
    technologies: [
      "React",
      "Node.js",
      "Typescript",
      "JavaScript",
      "npm",
      "HTML",
      "CSS",
    ],
    description:
      "Built a web timer that be used as an open tab. Uses audio and visuals to indicate that times up.",
  },
  {
    name: "ThinkLess",
    cover: thinkLess,
    github: "https://github.com/ashilramjee/ashilramjee.github.io",
    technologies: ["Swift", "MacOs"],
    description:
      "Built a MacOS menu bar app that you can use to control the locking and unlocking of keys. It can be used to lock the keyboard and any given time which blocks user keyboard input.",
  },
];
