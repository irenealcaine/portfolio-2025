import React from "react";
import "./ProjectCard.css";

const ProjectCard = ({ title, logo, screenshot, technologies, description }) => (
  <div className="project-card">
    <img src={logo} alt={`${title} logo`} className="project-logo" />
    <img src={screenshot} alt={`${title} screenshot`} className="project-screenshot" />
    <h3>{title}</h3>
    <p>{description}</p>
    <div className="project-techs">
      {technologies.map((tech) => (
        <span key={tech} className="project-tech">{tech}</span>
      ))}
    </div>
  </div>
);

export default ProjectCard;