import { createContext } from "react";
import { useState } from "react";
export const projectsCategory = {
  all: [
    {
      img: "https://i.ibb.co/jV1sTXc/fintrakr-Url.png",
      link: "https://najib-b.github.io/finTrakr/",
      description:
        "FinTrakr is a virtual app that help you track and organize your activities",
      stack: "HTML, CSS, Bootstrap 5",
      name: "FinTrakr",
      id: 1,
    },
    {
      img: "https://i.ibb.co/bm26NDb/najib-Quiz-Img.png",
      link: "https://master.d2jlldhnm1hiur.amplifyapp.com/",
      description:
        "A simple quiz app that can be utilized by small schools for testing students, You can set your quiz and share your quiz link with friends.",
      stack: "Typescript, React, Firebase, styled-components",
      name: "Quiz Maker",
      id: 2,
    },

    {
      img: "https://i.ibb.co/gzknvnq/react-Memory-Game-Img.png",
      link: "https://memory-game-najib.netlify.app/",
      description:
        "A simple memory game that test your memory strength and eye sight speed and is also fun. Hurry up and level up.",
      stack: "React, Redux, Firebase, styled-components",
      name: "Memory Game",
      id: 3,
    },
    {
      img: "https://i.ibb.co/MG5trsz/athirst-Img.png",
      link: "https://athirst-foundationorg.netlify.app/",
      description:
        "A freelance website I did for charity oganization, it stuffed with lots of animations and very responsive.",
      stack: "React, Context Api,  CSS, Chakra UI",
      name: "Athirst Foundation",
      id: 4,
    },

    {
      img: "https://i.ibb.co/PzmBVVv/weather-App.png",
      link: "https://najib-b.github.io/weatherApp/",
      description:
        "A simple weather app that tells you the weather condition of any location in the world.",
      stack: "HTML, CSS, Javascript",
      name: "weather App",
      id: 5,
    },
    {
      img: "https://i.ibb.co/y8xVP7W/beeaxh-Url.png",
      link: "https://najib-b.github.io/bbb/",
      description:
        "A virtual website where parent can help their kids invest in crypto and secure their futures. ",
      stack: "HTML, CSS, Bootstrap 5",
      name: "Beeaxh",
      id: 6,
    },
    {
      img: "https://i.ibb.co/mJbZd7n/tic-tac-toe.png",
      link: "https://najib-b.github.io/tic-tac-toe/",
      description:
        "It's a classic tic-tac-toe game made with JavaScript, fun to play when together with friends. From this moment you don't have to waste your ink anymore.",
      stack: "HTML, CSS, Javascript",
      name: "Tic-Tac-Toe",
      id: 7,
    },

    {
      img: "https://i.ibb.co/kX9zz3m/password-Generator.png",
      link: "https://najib-b.github.io/Password-Generator/",
      description:
        "A very useful tool this app helps you generate passwords at random",
      stack: "HTML, CSS, Javascript",
      name: "Password Generator",
      id: 8,
    },
    {
      img: "https://i.ibb.co/JjbvY4f/portfolio.png",
      link: "https://muhammadnajib.netlify.app",
      description: "My portfolio website",
      stack: "HTML, CSS, React",
      name: "Portfolio site",
      id: 9,
    },
  ],
  html: [
    {
      img: "https://i.ibb.co/jV1sTXc/fintrakr-Url.png",
      link: "https://najib-b.github.io/finTrakr/",
      description:
        "FinTrakr is a virtual app that help you track and organize your activities",
      stack: "HTML, CSS, Bootstrap 5",
      name: "FinTrakr",
      id: 1,
    },
    {
      img: "https://i.ibb.co/y8xVP7W/beeaxh-Url.png",
      link: "https://najib-b.github.io/bbb/",
      description:
        "A virtual website where parent can help their kids invest in crypto and secure their futures. ",
      stack: "HTML, CSS, Bootstrap 5",
      name: "Beeaxh",
      id: 5,
    },
  ],
  javascript: [
    {
      img: "https://i.ibb.co/mJbZd7n/tic-tac-toe.png",
      link: "https://najib-b.github.io/tic-tac-toe/",
      description:
        "It's a classic tic-tac-toe game made with JavaScript, fun to play when together with friends. From this moment you don't have to waste your ink anymore.",
      stack: "HTML, CSS, Javascript",
      name: "Tic-Tac-Toe",
      id: 6,
    },
    {
      img: "https://i.ibb.co/PzmBVVv/weather-App.png",
      link: "https://najib-b.github.io/weatherApp/",
      description:
        "A simple weather app that tells you the weather condition of any location in the world.",
      stack: "HTML, CSS, Javascript",
      name: "weather App",
      id: 4,
    },
    {
      img: "https://i.ibb.co/kX9zz3m/password-Generator.png",
      link: "https://najib-b.github.io/Password-Generator/",
      description:
        "A very useful tool this app helps you generate passwords at random",
      stack: "HTML, CSS, Javascript",
      name: "Password Generator",
      id: 7,
    },
  ],
  react: [
    {
      img: "https://i.ibb.co/bm26NDb/najib-Quiz-Img.png",
      link: "https://master.d2jlldhnm1hiur.amplifyapp.com/",
      description:
        "A simple quiz app that can be utilized by small schools for testing students, You can set your quiz and share your quiz link with friends.",
      stack: "Typescript, React, Firebase, styled-components",
      name: "Quiz Maker",
      id: 2,
    },

    {
      img: "https://i.ibb.co/gzknvnq/react-Memory-Game-Img.png",
      link: "https://memory-game-najib.netlify.app/",
      description:
        "A simple memory game that test your memory strength and eye sight speed and is also fun. Hurry up and level up.",
      stack: "React, Redux, Firebase, styled-components",
      name: "Memory Game",
      id: 3,
    },
    {
      img: "https://i.ibb.co/JjbvY4f/portfolio.png",
      link: "https://muhammadnajib.netlify.app",
      description: "My portfolio website",
      stack: "HTML, CSS, React",
      name: "Portfolio site",
      id: 8,
    },
  ],
};
export const highlighted = {
  all: "all",
  html: "html",
  javascript: "javascript",
  react: "react",
};
export const ProjectContext = createContext({
  projects: [],
  setProjects: () => {},
  highlight: "",
  setHighlight: () => {},
});
export const ProjectProvider = ({ children }) => {
  const [projects, setProjects] = useState(projectsCategory.all);
  const [highlight, setHighlight] = useState(highlighted.all);

  const value = {
    projects,
    setProjects,
    highlight,
    setHighlight,
  };

  return (
    <ProjectContext.Provider value={value}>{children}</ProjectContext.Provider>
  );
};
