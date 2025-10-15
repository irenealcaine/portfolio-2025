import React, { useState } from "react";
import Layout from "../../Components/Layout/Layout";
import ProjectCard from "../../Components/ProjectCard/ProjectCard";
import "./Portfolio.css";
import react from "../../assets/react.svg"
import firebase from "../../assets/firebase.svg"

// Ejemplo de proyectos
const projects = [
  {
    id: 1,
    title: "WeatherApp",
    logo: react,
    screenshot: "https://via.placeholder.com/350x120?text=WeatherApp",
    technologies: [react, firebase],
    description:
      "Aplicación para consultar el clima en tiempo real usando una API pública.",
  },
  {
    id: 2,
    title: "Task Manager",
    logo: react,
    screenshot: "https://via.placeholder.com/350x120?text=Task+Manager",
    technologies: [firebase],
    description:
      "Gestor de tareas con autenticación y sincronización en la nube.",
  },
  {
    id: 3,
    title: "Portfolio 2025",
    logo: react,
    screenshot: "https://via.placeholder.com/350x120?text=Portfolio+2025",
    technologies: [react],
    description:
      "Sitio web personal para mostrar proyectos y experiencia profesional.",
  },
  {
    id: 4,
    title: "E-commerce Demo",
    logo: firebase,
    screenshot: "https://via.placeholder.com/350x120?text=E-commerce+Demo",
    technologies: [react, firebase],
    description:
      "Tienda online con carrito, pagos y panel de administración.",
  },{
    id: 5,
    title: "WeatherApp",
    logo: react,
    screenshot: "https://via.placeholder.com/350x120?text=WeatherApp",
    technologies: [react, firebase],
    description:
      "Aplicación para consultar el clima en tiempo real usando una API pública.",
  },
  {
    id: 6,
    title: "Task Manager",
    logo: react,
    screenshot: "https://via.placeholder.com/350x120?text=Task+Manager",
    technologies: [react],
    description:
      "Gestor de tareas con autenticación y sincronización en la nube.",
  },
  {
    id: 7,
    title: "Portfolio 2025",
    logo: react,
    screenshot: "https://via.placeholder.com/350x120?text=Portfolio+2025",
    technologies: [react],
    description:
      "Sitio web personal para mostrar proyectos y experiencia profesional.",
  },
  {
    id: 8,
    title: "E-commerce Demo",
    logo: firebase,
    screenshot: "https://via.placeholder.com/350x120?text=E-commerce+Demo",
    technologies: [react, firebase],
    description:
      "Tienda online con carrito, pagos y panel de administración.",
  },
];

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
