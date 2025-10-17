import React, { useState } from "react";
import Layout from "../../Components/Layout/Layout";
import ProjectCard from "../../Components/ProjectCard/ProjectCard";
import "./Portfolio.css";
import { projects } from "../../data/projects";
import { useTranslation } from "react-i18next"
import Button from "../../Components/Button/Button";



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
            <Button
              type="button"
              variant={filter === "Todos" ? "primary" : "ghost"}
              size="sm"
              onClick={() => setFilter("Todos")}
              style={{ marginRight: "0.5rem" }}
            >
              {t?.('portfolio.all') || 'Todos'}
            </Button>

            {allTechs.map((tech) => (
              <Button
                key={tech}
                type="button"
                variant={filter === tech ? "primary" : "ghost"}
                size="sm"
                onClick={() => setFilter(tech)}
                style={{ marginRight: "0.5rem", display: "inline-flex", alignItems: "center" }}
              >
                <img src={tech} alt={tech} style={{width: 16, height: 16, verticalAlign: 'middle', marginRight: 6}} />
                {/* puedes añadir texto aquí si quieres */}
              </Button>
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
