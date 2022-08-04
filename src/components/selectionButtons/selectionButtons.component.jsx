import "./selectionButtons.style.css";
import { highlighted } from "../../context/project.context";
import { useContext } from "react";
import { ProjectContext } from "../../context/project.context";
import { projectsCategory } from "../../context/project.context";

const SelectionButtons = () => {
  const { highlight, setHighlight, setProjects } = useContext(ProjectContext);
  const setHighlightAll = () => {
    setHighlight(highlighted.all);
    setProjects(projectsCategory.all);
  };
  const setHighlightHtml = () => {
    setHighlight(highlighted.html);
    setProjects(projectsCategory.html);
  };
  const setHighlightJs = () => {
    setHighlight(highlighted.javascript);
    setProjects(projectsCategory.javascript);
  };
  const setHighlightReact = () => {
    setHighlight(highlighted.react);
    setProjects(projectsCategory.react);
  };
  return (
    <div className="selectionButtons">
      <h2
        className={
          highlight === "all"
            ? "selectionButtonsBtn highlighted"
            : "selectionButtonsBtn"
        }
        onClick={setHighlightAll}
      >
        ALL
      </h2>
      <h2
        className={
          highlight === "html"
            ? "selectionButtonsBtn highlighted"
            : "selectionButtonsBtn"
        }
        onClick={setHighlightHtml}
      >
        HTML
      </h2>
      <h2
        className={
          highlight === "javascript"
            ? "selectionButtonsBtn highlighted"
            : "selectionButtonsBtn"
        }
        onClick={setHighlightJs}
      >
        JAVASCRIPT
      </h2>
      <h2
        className={
          highlight === "react"
            ? "selectionButtonsBtn highlighted"
            : "selectionButtonsBtn"
        }
        onClick={setHighlightReact}
      >
        REACT
      </h2>
    </div>
  );
};

export default SelectionButtons;
