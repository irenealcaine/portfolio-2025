import React from "react";
import { useParams, Link } from "react-router-dom";
import Layout from "../../Components/Layout/Layout";
import { projects } from "../../data/projects";
import { useTranslation } from "react-i18next"


const ProjectDetail = () => {
    const { t, i18n } = useTranslation();
  
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <Layout>
        <div>
          <h2>Proyecto no encontrado</h2>
          <Link to="/portfolio">Volver al portfolio</Link>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div style={{ maxWidth: 600, margin: "2rem auto" }}>
        <Link to="/portfolio" style={{ marginBottom: "1rem", display: "inline-block" }}>
          ← Volver al portfolio
        </Link>
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