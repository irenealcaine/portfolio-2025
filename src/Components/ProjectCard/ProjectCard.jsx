import React from "react";
import "./ProjectCard.css";

const ProjectCard = ({ title, logo, screenshot, technologies, description }) => (
  <div className="project-card">
    <img src={logo} alt={`${title} logo`} className="project-logo" /> 
    <h3>{title}</h3>
    <div className="project-techs">
      {technologies.map((tech) => (
          <img key={tech} src={tech} alt={`${title} ${tech}`} className="project-tech"/>
      ))}
    </div>
  </div>
);

export default ProjectCard;