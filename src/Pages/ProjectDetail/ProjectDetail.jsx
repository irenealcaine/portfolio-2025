import React from "react";
import { useParams } from "react-router-dom";
import Layout from "../../Components/Layout/Layout";
import { projects } from "../../data/projects";
import { useTranslation } from "react-i18next";
import BackLink from "../../Components/BackLink/BackLink";
import Button from "../../Components/Button/Button"; // <-- agregado
import "./ProjectDetail.css";

const ProjectDetail = () => {
  const { t, i18n } = useTranslation();

  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <Layout>
        <div className="project-detail">
          <h2>{t("projects.notFound")}</h2>
          <BackLink to="/portfolio">{t("projects.backToPortfolio")}</BackLink>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="project-detail">
        <BackLink to="/portfolio" text={t("projects.backToPortfolio")} />

        <header className="project-detail__header">
          <img
            src={project.logo}
            alt={`${i18n.language === "es" ? project.title.es : project.title.en} logo`}
            className="project-detail__logo"
          />
          <h2 className="project-detail__title">
            {i18n.language === "es" ? project.title.es : project.title.en}
          </h2>
        </header>

        <img
          src={project.screenshot}
          alt={`${i18n.language === "es" ? project.title.es : project.title.en} screenshot`}
          className="project-detail__screenshot"
        />

        <p className="project-detail__description">
          {i18n.language === "es" ? project.description.es : project.description.en}
        </p>

        <div className="project-detail__techs" aria-label="Tecnologías utilizadas">
          <strong style={{ marginRight: 8 }}>Tecnologías:</strong>
          {project.technologies.map((tech, idx) => (
            <div key={idx} className="project-detail__tech">
              <img src={tech} alt={tech} style={{ width: "100%", height: "100%", objectFit: "contain" }} />
            </div>
          ))}
        </div>

        <div className="project-detail__actions">
          {project.url && (
            <Button href={project.url} target="_blank" variant="primary">
              {t("projects.visitSite") || "Visitar"}
            </Button>
          )}
          {project.github && (
            <Button href={project.github} target="_blank" variant="ghost">
              GitHub
            </Button>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default ProjectDetail;