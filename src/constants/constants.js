import duam from "../../public/images/4.png";
import T17 from "../../public/images/Basic-T17.jpeg";
import gitIcon from "../../public/images/icons/git_icon.png";
import jsIcon from "../../public/images/icons/js_icon.png";
import mongoIcon from "../../public/images/icons/MongoDB_icon.png";
import nextIcon from "../../public/images/icons/nextjs_icon.png";
import nodeJsIcon from "../../public/images/icons/nodejs_icon.png";
import pyIcon from "../../public/images/icons/py_icon.png";
import reactIcon from "../../public/images/icons/reactjs_icon.png";
import unityIcon from "../../public/images/icons/unity_icon.png";
import kimm from "../../public/images/kimm.png";
import lookation from "../../public/images/lookation.png";
import quantum from "../../public/images/quantum-computing.jpeg";
import youtube from "../../public/images/youtube.png";
export const projects = [
  {
    title: "Robotics Competitions",
    description:
      "During my time at high school I participated in multiple robotics competitions using Basic Stamp (Parallax) and Arduino. I was leading a team of 4 in national-wide competitions, such as Liga Robótica, Kidzania - Liga Robótica, INACAP - Robotic Week, Universidad Técnica Feredico Santa María",
    image: T17,
    tags: ["Basic Stamp", "Arduino", "3D Printing"],
    source: "https://neoeduca.cl",
    visit: "https://neoeduca.cl",
    id: 0,
  },
  {
    title: "Quantum Computing",
    description:
      "In grade 11 I was accepted to the Qubit by Qubit High School Introduction to Quantum Computing course. I was able to learn about quantum computing and how to use it in my own projects. I was also able to learn about quantum mechanics and its impact in the current society.",
    image: quantum,
    tags: ["Quantum Computing", "Python", "Qiskit"],
    source: "https://verified.cv/en/verify/82579078660284",
    visit: "https://www.qubitbyqubit.org/",
    id: 1,
  },
  {
    title: "Kimm Education",
    description:
      "Kimm is a multi-platform educational platform that allows teachers to create courses and students to enroll in them. The platform is developed in React, Node.js, Express and MongoDB. It has Unity developed games.",
    image: kimm,
    tags: ["React", "MongoDB", "Express", "Node.js"],
    source: "https://kimmweb.herokuapp.com",
    visit: "https://kimmweb.herokuapp.com",
    id: 2,
  },
  {
    title: "Charlas Duam",
    description:
      "Charlas means Talks in Spanish, and Duam is Idea in Mapudungún, a language spoken by a native tribe in Chile. And this project is a way to share my experience along with others about innovation, entrepreneurship, and technology in different schools in Chile.",
    image: duam,
    tags: ["Community", "Technology", "Leadership"],
    source: "https://sebastianlorca.com",
    visit: "https://sebastianlorca.com",
    id: 3,
  },
  {
    title: "In Progress - Personal Blog",
    description:
      "I've met many chilean students aspiring to study abroad, but because of the lack of information and resources provided, they decide to study in Chile. I've been working on this project to provide a platform for students to learn from my experience in this process and create a community dedicated to personal development and betterment of their lives.",
    image: youtube,
    tags: ["React", "MongoDB", "Express", "Node.js"],
    source: "https://blog.sebastianlorca.com",
    visit: "https://blog.sebastianlorca.com",
    id: 4,
  },
  {
    title: "Lookation",
    description:
      "Lookation is a project with the purpose of providing assistance in enclosed spaces to visually impaired people through color sensors that allow localization and give the user an understanding of the environment. The project was developed in the context of the XVI Regional Congress of Scholar Science and Technology, PAR Explora (2019).",
    image: lookation,
    tags: ["Impact", "Arduino", "3D Printing"],
    source:
      "https://drive.google.com/drive/folders/1ZPZmCV_6ZCSTt5zpCgVQuO1g7bsIdJ2p?usp=sharing",
    visit: "https://www.instagram.com/_lookation/",
    id: 5,
  },
];

export const TimeLineData = [
  { year: 2014, text: "Started my journey in a robotics workshop" },
  { year: 2016, text: "Participated in robotic competitions" },
  { year: 2018, text: "Joined as a CISV volunteer" },
  { year: 2019, text: "Designed and developed Lookation" },
  {
    year: 2021,
    text: "Completed QxQ Quantum Computing course and started developing Kimm Education",
  },
  { year: 2022, text: "Launched Kimm Education" },
  { year: 2022, text: "Launched Duam Talks" },
];
/**
 * @description: This is the list of technologies that I use in my projects
 * @type {Array}
 * @constant
 */
export const Stack = [
  { source: gitIcon, text: "Git", height: "383px", width: "383px" },
  { source: jsIcon, text: "JavaScript", height: "512px", width: "512px" },
  { source: nextIcon, text: "Next.js", height: "383px", width: "640px" },
  { source: nodeJsIcon, text: "Node.js", height: "2400px", width: "2643px" },
  { source: pyIcon, text: "Python", height: "2000px", width: "2000px" },
  { source: reactIcon, text: "React", height: "600px", width: "537px" },
  { source: mongoIcon, text: "MongoDB", height: "512px", width: "512px" },
  { source: unityIcon, text: "Unity", height: "256px", width: "256px" },
];
