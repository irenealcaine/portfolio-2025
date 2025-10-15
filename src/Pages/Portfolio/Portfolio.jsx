import React, { useState } from "react";
import Layout from "../../Components/Layout/Layout";
import ProjectCard from "../../Components/ProjectCard/ProjectCard";
import "./Portfolio.css";

// Ejemplo de proyectos
const projects = [
  {
    id: 1,
    title: "WeatherApp",
    logo: "https://cdn-icons-png.flaticon.com/512/1116/1116453.png",
    screenshot: "https://via.placeholder.com/350x120?text=WeatherApp",
    technologies: ["React", "Vite", "CSS"],
    description:
      "Aplicación para consultar el clima en tiempo real usando una API pública.",
  },
  {
    id: 2,
    title: "Task Manager",
    logo: "https://cdn-icons-png.flaticon.com/512/1828/1828911.png",
    screenshot: "https://via.placeholder.com/350x120?text=Task+Manager",
    technologies: ["React", "Redux", "Node.js"],
    description:
      "Gestor de tareas con autenticación y sincronización en la nube.",
  },
  {
    id: 3,
    title: "Portfolio 2025",
    logo: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
    screenshot: "https://via.placeholder.com/350x120?text=Portfolio+2025",
    technologies: ["React", "Vite", "Sass"],
    description:
      "Sitio web personal para mostrar proyectos y experiencia profesional.",
  },
  {
    id: 4,
    title: "E-commerce Demo",
    logo: "https://cdn-icons-png.flaticon.com/512/1170/1170678.png",
    screenshot: "https://via.placeholder.com/350x120?text=E-commerce+Demo",
    technologies: ["React", "Express", "MongoDB"],
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
                {tech}
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
