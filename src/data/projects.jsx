import todo from "../assets/check.svg"
import weather from "../assets/sun.svg"
import resources from "../assets/code.svg"

import react from "../assets/react.svg"

import firebase from "../assets/firebase.svg"
import supabase from "../assets/supabase.svg"

import bootstrap from "../assets/bootstrap.svg"
import materialui from "../assets/materialui.svg"
import tailwind from "../assets/tailwind.svg"


export const projects = [
  {
    id: 10,
    slug: "todo-app",
    title: {
      es: "Gestor de Tareas",
      en: "Task Manager"
    },
    logo: todo,
    screenshot: "https://picsum.photos/500/400",
    technologies: [react, firebase],
    description: {
      es: "Gestor de Tareas lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      en: "Task Manager app to manage your daily tasks with cloud sync and authentication."
    },
    url: "https://weatherapp.example.com",
    github: "https://github.com/tu-usuario/weatherapp",
    color: "lime"
  },
  {
    id: 20,
    slug: "slug-2",
    title: {
      es: "Aplicación del Tiempo",
      en: "Weather App"
    },
    logo: weather,
    screenshot: "https://picsum.photos/500/400",
    technologies: [firebase, tailwind],
    description: {
      es: "Aplicación del tiempo con información en tiempo real y previsiones para varios días.",
      en: "Weather application providing real-time data and multi-day forecasts."
    },
    url: "https://tasks.example.com",
    github: "https://github.com/tu-usuario/task-manager",
    color: "dark-blue"
  },
  {
    id: 3,
    slug: "slug-3",
    title: {
      es: "Portfolio 2025",
      en: "Portfolio 2025"
    },
    logo: react,
    screenshot: "https://picsum.photos/500/400",
    technologies: [react, bootstrap],
    description: {
      es: "Sitio web personal para mostrar proyectos y experiencia profesional.",
      en: "Personal website to showcase projects and professional experience."
    },
    url: "https://tu-portfolio.example.com",
    github: "https://github.com/tu-usuario/portfolio-2025",
    color: "light-blue"
  },
  {
    id: 4,
    slug: "slug-4",
    title: {
      es: "Demo E-commerce",
      en: "E-commerce Demo"
    },
    logo: firebase,
    screenshot: "https://picsum.photos/500/400",
    technologies: [react, firebase],
    description: {
      es: "Tienda online con carrito, pagos y panel de administración.",
      en: "Online store demo with cart, payments and admin panel."
    },
    url: "https://ecommerce.example.com",
    github: "https://github.com/tu-usuario/ecommerce-demo",
    color: "orange"
  },
  {
    id: 5,
    slug: "slug-5",
    title: {
      es: "WeatherApp (v2)",
      en: "WeatherApp (v2)"
    },
    logo: react,
    screenshot: "https://picsum.photos/500/400",
    technologies: [react, firebase],
    description: {
      es: "Aplicación para consultar el clima en tiempo real usando una API pública.",
      en: "App to check real-time weather using a public API."
    },
    url: "https://weatherapp-v2.example.com",
    github: "https://github.com/tu-usuario/weatherapp-v2",
    color: "yellow"
  },
  {
    id: 6,
    slug: "slug-6",
    title: {
      es: "Gestor de Tareas (Lite)",
      en: "Task Manager (Lite)"
    },
    logo: react,
    screenshot: "https://picsum.photos/500/400",
    technologies: [react],
    description: {
      es: "Versión ligera del gestor de tareas, pensada para ser rápida y minimalista.",
      en: "Lightweight task manager focused on speed and simplicity."
    },
    url: "https://tasks-lite.example.com",
    github: "https://github.com/tu-usuario/task-manager-lite",
    color: "pink"
  },
  {
    id: 7,
    slug: "slug-7",
    title: {
      es: "Portfolio 2025 (Demo)",
      en: "Portfolio 2025 (Demo)"
    },
    logo: react,
    screenshot: "https://picsum.photos/500/400",
    technologies: [react, materialui],
    description: {
      es: "Versión demo del portfolio con ejemplos y plantillas.",
      en: "Demo version of the portfolio with examples and templates."
    },
    url: "https://portfolio-demo.example.com",
    github: "https://github.com/tu-usuario/portfolio-2025-demo",
    color: "purple"
  },
  {
    id: 8,
    slug: "slug-8",
    title: {
      es: "E-commerce Admin",
      en: "E-commerce Admin"
    },
    logo: firebase,
    screenshot: "https://picsum.photos/500/400",
    technologies: [react, firebase],
    description: {
      es: "Panel de administración para la tienda online con gestión de productos y pedidos.",
      en: "Admin panel for the online store with product and order management."
    },
    url: "https://ecommerce-admin.example.com",
    github: "https://github.com/tu-usuario/ecommerce-admin",
    color: "red"
  },
  {
    id: 9,
    slug: "slug-9",
    title: {
      es: "Recursos / E-commerce",
      en: "Resources / E-commerce"
    },
    logo: resources,
    screenshot: "https://picsum.photos/500/400",
    technologies: [supabase, react],
    description: {
      es: "Colección de recursos y utilidades para proyectos de comercio electrónico.",
      en: "Collection of resources and utilities for e-commerce projects."
    },
    url: "https://ecommerce-admin.example.com",
    github: "https://github.com/tu-usuario/ecommerce-admin",
    color: "lime"
  },
];