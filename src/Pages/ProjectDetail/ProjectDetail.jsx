import React from "react";
import { useParams } from "react-router-dom";
import Layout from "../../Components/Layout/Layout";
import { projects } from "../../data/projects";
import { useTranslation } from "react-i18next";
import BackLink from "../../Components/BackLink/BackLink"; // <-- nuevo import

const ProjectDetail = () => {
  const { t, i18n } = useTranslation();

  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <Layout>
        <div>
          <h2>{t("projects.notFound")}</h2>
          <BackLink to="/portfolio">{t("projects.backToPortfolio")}</BackLink>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div style={{ maxWidth: 600, margin: "2rem auto" }}>
        <BackLink to="/portfolio">{t("projects.backToPortfolio")}</BackLink>

        <img src={project.logo} alt={`${project.title} logo`} style={{ width: 64, height: 64 }} />
        <h2>{i18n.language === "es" ? project.title.es : project.title.en}</h2>
        <img src={project.screenshot} alt={`${project.title} screenshot`} style={{ width: "100%", borderRadius: 8, margin: "1rem 0" }} />
        <p>{i18n.language === "es" ? project.description.es : project.description.en}</p>
        <div style={{ marginTop: "1rem" }}>
          <strong>Tecnologías:</strong>
          <div style={{ display: "flex", gap: "0.5rem", marginTop: "0.5rem" }}>
            {project.technologies.map((tech, idx) => (
              <img key={idx} src={tech} alt={tech} style={{ width: 32, height: 32 }} />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProjectDetail;