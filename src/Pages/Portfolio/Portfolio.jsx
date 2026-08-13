import React, { useState, useEffect } from "react";
import Layout from "../../Components/Layout/Layout";
import ProjectCard from "../../Components/ProjectCard/ProjectCard";
import SEOHead from "../../Components/SEOHead/SEOHead";
import "./Portfolio.css";
import { projects } from "../../data/projects";
import { useTranslation } from "react-i18next";
import Button from "../../Components/Button/Button";

// Obtener todas las tecnologías únicas
const allTechs = Array.from(new Set(projects.flatMap((p) => p.technologies)));

const PortfolioPage = () => {
  const { t, i18n } = useTranslation();
  const [filter, setFilter] = useState("Todos");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const filteredProjects =
    filter === "Todos"
      ? projects
      : projects.filter((p) => p.technologies.includes(filter));

  // mostrar en orden inverso al array original
  const displayedProjects = filteredProjects.slice().reverse();

  const seo = {
    es: {
      title: "Portafolio | Irene Alcaine",
      description: "Todos los proyectos web de Irene Alcaine. Aplicaciones con React, Firebase, Tailwind, Vue y más. Explora mi trabajo en desarrollo frontend y full-stack.",
    },
    en: {
      title: "Portfolio | Irene Alcaine",
      description: "All web projects by Irene Alcaine. Applications built with React, Firebase, Tailwind, Vue and more. Explore my frontend and full-stack development work.",
    },
  }

  const currentSeo = i18n.language === "es" ? seo.es : seo.en

  return (
    <Layout>
      <SEOHead
        title={currentSeo.title}
        description={currentSeo.description}
        path="/portfolio"
      />
      <h1 className="portfolio-title">{t("portfolio.home")}</h1>
      <div>
        <div className="buttons-container">
          <Button
            type="button"
            variant={filter === "Todos" ? "primary" : "ghost"}
            onClick={() => setFilter("Todos")}
          >
            {t?.("portfolio.all") || "Todos"}
          </Button>

          {allTechs.map((tech) => (
            <Button
              key={tech}
              type="button"
              variant={filter === tech ? "primary" : "ghost"}
              onClick={() => setFilter(tech)}
            >
              <img src={tech} alt={tech} style={{ width: 16, height: 16 }} />
            </Button>
          ))}
        </div>
      </div>
      <div className="projects-container">
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
