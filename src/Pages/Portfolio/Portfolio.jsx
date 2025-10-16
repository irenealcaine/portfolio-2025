import React, { useState } from "react";
import Layout from "../../Components/Layout/Layout";
import ProjectCard from "../../Components/ProjectCard/ProjectCard";
import "./Portfolio.css";
import { projects } from "../../data/projects";


// Obtener todas las tecnologías únicas
const allTechs = Array.from(
  new Set(projects.flatMap((p) => p.technologies))
);

const PortfolioPage = () => {
  const [filter, setFilter] = useState("Todos");

  const filteredProjects =
    filter === "Todos"
      ? projects
      : projects.filter((p) => p.technologies.includes(filter));

  return (
    <Layout>
        <h2>Portfolio</h2>
        <div>
          <div>
            <button
              onClick={() => setFilter("Todos")}
              style={{
                marginRight: "0.5rem",
                fontWeight:
                  filter === "Todos" ? "bold" : "normal",
              }}
            >
              Todos
            </button>

            {allTechs.map((tech) => (
              <button
                key={tech}
                onClick={() => setFilter(tech)}
                style={{
                  marginRight: "0.5rem",
                  fontWeight:
                    filter === tech ? "bold" : "normal",
                }}
              >
                <img src={tech} alt={tech} style={{width: '16px', height: '16px', verticalAlign: 'middle', marginRight: '4px'}} />
              </button>
            ))}
          </div>
        </div>
        <div className="projects-container"
        >
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>
    </Layout>
  );
};

export default PortfolioPage;
