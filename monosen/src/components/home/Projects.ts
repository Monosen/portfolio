import reactIcon from "../../assets/imgs/icon/react-icon.svg";
import cssIcon from "../../assets/imgs/icon/css-icon.svg";
import expressIcon from "../../assets/imgs/icon/express-icon.svg";
import htmlIcon from "../../assets/imgs/icon/html-icon.svg";
import javascriptIcon from "../../assets/imgs/icon/javascript-icon.svg";
import mongodbIcon from "../../assets/imgs/icon/mongodb-icon.svg";
import nextIcon from "../../assets/imgs/icon/next-js-icon.svg";
import tailwindcssIcon from "../../assets/imgs/icon/tailwindcss-icon.svg";
import typescriptIcon from "../../assets/imgs/icon/typescript-icon.svg";
import nodejsIcon from "../../assets/imgs/icon/nodejs-icon.svg";
import bootstrapIcon from "../../assets/imgs/icon/bootstrap-5-icon.svg";

export interface Project {
  type: string;
  name: string;
  img: string;
  url: string;
  icons: string[];
}

export interface Icon {
  name: string;
  icon: string | any;
}

export const Projects: Project[] = [
  {
    type: "Web App",
    name: "Ecommerce",
    img: "ecommerce-teslo-screenshot.png",
    url: "https://ecommerce-teslo-production.up.railway.app/",
    icons: ["Next", "TypeScript", "MongoDB", "Node"],
  },
  {
    type: "Web App",
    name: "Trivia",
    img: "trivia-screenshot.png",
    url: "https://trivia-silk.vercel.app/",
    icons: ["Html", "Css", "JavaScript", "bootstrap"],
  },
  {
    type: "Web App",
    name: "GitHub",
    img: "github-screenshop.png",
    url: "https://github-api-nu.vercel.app/",
    icons: ["React", "Tailwind"],
  },
  {
    type: "Web App",
    name: "Weather",
    img: "weather-screenshop.png",
    url: "https://weather-app-monosen.vercel.app/",
    icons: ["React", "Tailwind"],
  },
].map((project) => ({
  ...project,
  icons: project.icons.map((icon) => icon.toLowerCase()),
}));

export const Icons: Icon[] = [
  { name: "React", icon: reactIcon },
  { name: "Css", icon: cssIcon },
  { name: "Express", icon: expressIcon },
  { name: "Html", icon: htmlIcon },
  { name: "JavaScript", icon: javascriptIcon },
  { name: "MongoDB", icon: mongodbIcon },
  { name: "Node", icon: nodejsIcon },
  { name: "Redux", icon: "redux-icon.svg" },
  { name: "Tailwind", icon: tailwindcssIcon },
  { name: "TypeScript", icon: typescriptIcon },
  { name: "Next", icon: nextIcon },
  { name: "Bootstrap", icon: bootstrapIcon },
].map((icon) => ({ ...icon, name: icon.name.toLowerCase() }));
