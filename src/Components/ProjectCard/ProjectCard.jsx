import React from "react";
import "./ProjectCard.css";
import { Link } from "react-router-dom";

const ProjectCard = ({ title, logo, technologies, slug }) => (
  <Link to={`/portfolio/${slug}`} className="project-card">
    <img src={logo} alt={`${title} logo`} className="project-logo" /> 
    <h3>{title}</h3>
    <div className="project-techs">
      {technologies.map((tech) => (
          <img key={tech} src={tech} alt={`${title} ${tech}`} className="project-tech"/>
      ))}
    </div>
  </Link>
);

export default ProjectCard;