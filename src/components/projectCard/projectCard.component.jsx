import "./projectCard.style.css";
import { Fragment } from "react";

const ProjectCard = (props) => {
  const { img, link } = props.project;
  return (
    <Fragment>
      <a href={link} target="_blank" className="projectImg" rel="noopener noreferrer">
        <img src={img} alt="" />
      </a>
    </Fragment>
  );
};

export default ProjectCard;
