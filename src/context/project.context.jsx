import { createContext } from "react";
import { useState } from "react";
export const projectsCategory = {
  all: [
    {
      img: "https://i.ibb.co/mGGV1mX/fintrakr.png",
      link: "https://najib-b.github.io/finTrakr/",
      id: 1,
    },
    {
      img: "https://i.ibb.co/KVrg2Ym/crwn-Clothing.png",
      link: "https://crownclothingg.netlify.app/",
      id: 2,
    },
    {
      img: "https://i.ibb.co/8sDSBNn/memory-Game.png",
      link: "https://najib-b.github.io/Memory-game/",
      id: 3,
    },
    {
      img: "https://i.ibb.co/CBy0tYy/weather-App.png",
      link: "https://najib-b.github.io/weatherApp/",
      id: 4,
    },
    {
      img: "https://i.ibb.co/029XDR9/beeaxh.png",
      link: "https://najib-b.github.io/bbb/",
      id: 5,
    },
    {
      img: "https://i.ibb.co/02TKMdX/tic-Tac-Toe.png",
      link: "https://najib-b.github.io/tic-tac-toe/",
      id: 6,
    },
    {
      img: "https://i.ibb.co/Br1SXkC/youtube.png",
      link: "najib-youtube.netlify.app",
      id: 7,
    },
    {
      img: "https://i.ibb.co/mqYQBx3/password-Generator.png",
      link: "https://najib-b.github.io/Password-Generator/",
      id: 8,
    },
    {
      img: "https://i.ibb.co/HhxzL6p/expense-Tracker.png",
      link: "https://najib-b.github.io/expenseTracker/",
      id: 9,
    },
    {
      img: "https://i.ibb.co/3MYgNg4/todoApp.png",
      link: "https://najib-b.github.io/todoApp/",
      id: 10,
    },
  ],
  html: [
    {
      img: "https://i.ibb.co/mGGV1mX/fintrakr.png",
      link: "https://najib-b.github.io/finTrakr/",
      id: 1,
    },
    {
      img: "https://i.ibb.co/029XDR9/beeaxh.png",
      link: "https://najib-b.github.io/bbb/",
      id: 2,
    },
  ],
  javascript: [
    {
      img: "https://i.ibb.co/CBy0tYy/weather-App.png",
      link: "https://najib-b.github.io/weatherApp/",
      id: 1,
    },
    {
      img: "https://i.ibb.co/8sDSBNn/memory-Game.png",
      link: "https://najib-b.github.io/Memory-game/",
      id: 2,
    },
    {
      img: "https://i.ibb.co/02TKMdX/tic-Tac-Toe.png",
      link: "https://najib-b.github.io/tic-tac-toe/",
      id: 3,
    },
    {
      img: "https://i.ibb.co/mqYQBx3/password-Generator.png",
      link: "https://najib-b.github.io/Password-Generator/",
      id: 4,
    },
    {
      img: "https://i.ibb.co/HhxzL6p/expense-Tracker.png",
      link: "https://najib-b.github.io/expenseTracker/",
      id: 5,
    },
    {
      img: "https://i.ibb.co/3MYgNg4/todoApp.png",
      link: "https://najib-b.github.io/todoApp/",
      id: 6,
    },
  ],
  react: [
    {
      img: "https://i.ibb.co/Br1SXkC/youtube.png",
      link: "najib-youtube.netlify.app",
      id: 1,
    },
    {
      img: "https://i.ibb.co/KVrg2Ym/crwn-Clothing.png",
      link: "https://crownclothingg.netlify.app/",
      id: 1,
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
