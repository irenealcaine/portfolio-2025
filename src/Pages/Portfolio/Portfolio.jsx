import React, { useState } from "react";
import Layout from "../../Components/Layout/Layout";
import ProjectCard from "../../Components/ProjectCard/ProjectCard";
import "./Portfolio.css";
import { projects } from "../../data/projects";
import { useTranslation } from "react-i18next"



// Obtener todas las tecnologías únicas
const allTechs = Array.from(
  new Set(projects.flatMap((p) => p.technologies))
);

const PortfolioPage = () => {
  const { t, i18n } = useTranslation();
  const [filter, setFilter] = useState("Todos");

  const filteredProjects =
    filter === "Todos"
      ? projects
      : projects.filter((p) => p.technologies.includes(filter));

  // mostrar en orden inverso al array original
  const displayedProjects = filteredProjects.slice().reverse();

  return (
    <Layout>
        <h2>{t('portfolio.home')}</h2>
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
          {displayedProjects.map((project) => (
            <ProjectCard
              key={project.id}
              title={i18n.language === "es" ? project.title.es : project.title.en}
              slug={project.slug}
              technologies={project.technologies}
              logo={project.logo}
              color={project.color}
            />
          ))}
        </div>
    </Layout>
  );
};

export default PortfolioPage;
