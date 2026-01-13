
import {
  logo,
  backend,
  creator,
  mobile,
  web,
  css,
  machinelearning,
  streamflix,
  cinemadiscovery,
  mysql,
  aws,
  
  framer,
  figma,
  html,
  javascript,
  nodejs,
  reactjs,
  tailwind,
  pandas,
  numpy,
  scipy,
  sklearn,
  jupyter,
  matplotlib,
  seaborn,
  sql,
} from '../assets'


// Import logos separately
import digitax from "../assets/company/digitax logo.png";



export const navLinks = [


  {
    id: "about",
    title: "About",
    
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Full-Stack Developer",
    icon: web,
  },
  {
    title: "Frontend Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Machine Learning Engineer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "framer",
    icon: framer,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "AWS",
    icon: aws,
  },
  {
    name: "MySql",
    icon: mysql,
  },
 // ===== Machine Learning & Data Cleaning =====
  {
    name: "Pandas",
    icon: pandas,
  },
  {
    name: "NumPy",
    icon: numpy,
  },
  {
    name: "SciPy",
    icon: scipy,
  },
  {
    name: "Scikit-learn",
    icon: sklearn,
  },
  {
    name: "Jupyter Notebook",
    icon: jupyter,
  },
  {
    name: "Matplotlib",
    icon: matplotlib,
  },
  {
    name: "Seaborn",
    icon: seaborn,
  },
  {
    name: "SQL (Data Cleaning)",
    icon: sql,
  },

];


const experiences = [
  {
    title: "Software Developer-Intern",
    company_name: "DigiTax-Namiri",
    icon: digitax,
    iconBg: "#383E56",
    date: "Jan 2025 - June 2025",
    points: [
      "Developed responsive user interfaces using Next.js and JavaScript, contributing to the front-end of DigiTax's tax management platform and improving user experience for over 1,000 active users.",
      "Collaborated with the development team to integrate APIs, ensuring seamless data flow between front-end and back-end systems, which reduced load times by 20%.",
      "Conducted thorough testing of product features, including unit and integration tests, identifying and fixing 15+ bugs that enhanced product stability and reliability.",
      "Participated in agile sprints and code reviews, gaining hands-on experience in version control with Git and fostering team collaboration in a fast-paced startup environment.",
      "Successfully contributed to a key product update that streamlined tax filing processes, resulting in positive feedback from beta testers and a 10% increase in user engagement metrics.",
    ],
  },
];


const projects = [
  {
    name: "Streamflix",
    description:
      "A streaming platform that allows users to browse, search, and watch a wide variety of movies and TV shows across different genres and languages.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "white-text-gradient",
      },
      {
        name: "nextjs",
        color: "pink-text-gradient",
      },
 
    ],
    image: streamflix,
    source_code_link: "https://github.com/Mary-Njiru/streamflix-react-platform.git",
  },
  {
    name: "Machine Learning Feature Engineering Project",
    description:
      "A machine learning project focused on building a feature engineering pipeline to preprocess and transform raw data into meaningful features for improved model performance.",
    tags: [
      {
        name: "pandas",
        color: "blue-text-gradient",
      },
      {
        name: "Numpy",
        color: "green-text-gradient",
      },
      {
        name: "matplotlib",
        color: "pink-text-gradient",
      },
    ],
    image: machinelearning,
    source_code_link: "https://github.com/Mary-Njiru/ml-feature-engineering-pipeline.git",
  },
  {
    name: "Cinema Discovery Platform",
    description:
      "A web application that enables users to explore and discover movies based on their preferences, providing personalized recommendations and detailed information about each film.",
    tags: [
      {
        name: "javascript",
        color: "blue-text-gradient",
      },
      {
        name: "html",
        color: "white-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
    ],
    image: cinemadiscovery,
    source_code_link: "https://github.com/Mary-Njiru/cinema-discovery-platform.git",
  },
];

export { services, technologies, experiences, projects };
