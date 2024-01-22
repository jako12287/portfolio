import { ProjectDataItem, SkillsDataItem } from "@/types";
import Natural from "../app/assets/icons/projectsImage/naturalmarketing.png";
import SaveLock from "../app/assets/icons/projectsImage/savelock.png";
import Next from "../app/assets/icons/skillsImage/nextjs.png";
import ReactJs from "../app/assets/icons/skillsImage/reactjs.png";
import ReactNative from "../app/assets/icons/skillsImage/reactnative.png";
import Graphql from "../app/assets/icons/skillsImage/GraphQL_Logo.svg.png";
import JavaScript from "../app/assets/icons/skillsImage/javascript logo.png";
import Html from "../app/assets/icons/skillsImage/html5.png";
import Css from "../app/assets/icons/skillsImage/CSS3.png";
import Node from "../app/assets/icons/skillsImage/nodejs.png";
import Express from "../app/assets/icons/skillsImage/expressjs.png";
import Postgre from "../app/assets/icons/skillsImage/Postgre.png";
import MongoDB from "../app/assets/icons/skillsImage/mongodb.png";
import Firbase from "../app/assets/icons/skillsImage/firebase.png";
import Figma from "../app/assets/icons/skillsImage/figma.png";

export const listProjects: ProjectDataItem[] = [
  {
    _id: "001",
    backgroundColor: "#1f1f20",
    title: "Natural Marketing",
    iconImage: Natural,
    route: "naturalmarketing",
  },
  {
    _id: "002",
    backgroundColor: "#ffffff",
    title: "Save Lock",
    iconImage: SaveLock,
    route: "savelock",
  },
];

export const dataSkills: SkillsDataItem[] = [
  {
    _id: "001",
    name: "NEXT.Js",
    icon: Next,
  },
  {
    _id: "002",
    name: "React",
    icon: ReactJs,
  },
  {
    _id: "003",
    name: "React Native",
    icon: ReactNative,
  },
  {
    _id: "005",
    name: "Graphql",
    icon: Graphql,
  },
  {
    _id: "006",
    name: "JavaScript",
    icon: JavaScript,
  },
  {
    _id: "007",
    name: "HTML",
    icon: Html,
  },
  {
    _id: "008",
    name: "CSS",
    icon: Css,
  },
  {
    _id: "009",
    name: "Node.js",
    icon: Node,
  },
  {
    _id: "004",
    name: "Express js",
    icon: Express,
  },
  {
    _id: "010",
    name: "Postgre SQL",
    icon: Postgre,
  },
  {
    _id: "011",
    name: "MongoDB",
    icon: MongoDB,
  },
  {
    _id: "012",
    name: "Firebase",
    icon: Firbase,
  },
  {
    _id: "013",
    name: "Figma",
    icon: Figma,
  },
];
