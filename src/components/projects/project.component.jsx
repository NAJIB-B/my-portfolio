import "./projects.style.css";
import SelectionButtons from "../selectionButtons/selectionButtons.component";
import { useContext } from "react";
import { ProjectContext } from "../../context/project.context";
import ProjectCard from "../projectCard/projectCard.component";

const Projects = () => {
  const { projects } = useContext(ProjectContext);
  return (
    <div className="projectsContainer" id="projects">
      <h2>PROJECTS</h2>
      <SelectionButtons></SelectionButtons>

      <div className="projectsGrid">
        {projects.map((item) => {
          return <ProjectCard key={item.id} project={item}></ProjectCard>;
        })}
      </div>
    </div>
  );
};

export default Projects;
