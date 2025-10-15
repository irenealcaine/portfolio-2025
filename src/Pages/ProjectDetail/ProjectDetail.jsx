import React from "react";
import { useParams, Link } from "react-router-dom";
import Layout from "../../Components/Layout/Layout";

const projects = [
  {
    slug: "slug-1",
    title: "WeatherApp",
    logo: "https://cdn-icons-png.flaticon.com/512/1116/1116453.png",
    screenshot: "https://t3.ftcdn.net/jpg/05/12/68/88/240_F_512688862_AjDnp2NNDitbnFF5s2Qk4oEVfm7aqXdI.jpg",
    technologies: [
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
    ],
    description: "Aplicación para consultar el clima en tiempo real usando una API pública.",
  },
  {
    slug: "slug-2",
    title: "Task Manager",
    logo: "https://cdn-icons-png.flaticon.com/512/1116/1116453.png",
    screenshot: "https://t3.ftcdn.net/jpg/03/67/77/00/240_F_367770009_35K04UmNrVB0me5tPtFfJen7LMhxrcDl.jpg",
    technologies: [
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
    ],
    description: "Aplicación para consultar el clima en tiempo real usando una API pública.",
  },
];

const ProjectDetail = () => {
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
        <h2>{project.title}</h2>
        <img src={project.screenshot} alt={`${project.title} screenshot`} style={{ width: "100%", borderRadius: 8, margin: "1rem 0" }} />
        <p>{project.description}</p>
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