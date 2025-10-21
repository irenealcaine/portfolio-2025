import todo from "../assets/check.svg"
import weather from "../assets/sun.svg"
import shop from "../assets/shop.png"
import coin from "../assets/bitcoin.svg"
import netflix from "../assets/netflix.svg"
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
    slug: "todododo",
    title: {
      es: "Todododo",
      en: "Todododo"
    },
    logo: todo,
    screenshot: "https://picsum.photos/500/200",
    technologies: [react, tailwind, firebase],
    description: {
      es: "Web de lista de tareas pendientes, cada tarea está asignada a una categoría y se muestran con colores diferentes. Cada tarea se puede editar, marcar como realizada o borrar. Los datos se almacenan en localStorage si entras como invitado, pero puedes registrate para accedes a tus tareas en otros dispositivos.",
      en: "App for a to-do list, where each task is assigned to a category and displayed with different colors. Each task can be edited, marked as done, or deleted. The data is stored in localStorage if you enter as a guest, but you can register if you want to see your tasks in other devices."
    },
    url: "https://todododo-irene.netlify.app/",
    github: "https://github.com/irenealcaine/todododo/",
    color: "pink"
  },
  {
    id: 20,
    slug: "weather-app",
    title: {
      es: "Aplicación del tiempo",
      en: "Weather app"
    },
    logo: weather,
    screenshot: "https://picsum.photos/500/200",
    technologies: [react, tailwind],
    description: {
      es: "Web de pronóstico del tiempo que proporciona información detallada sobre el clima actual y los pronósticos para los próximos días utilizando la API de Open Meteo. Muestra la fecha y hora actual, así como la temperatura, humedad y velocidad del viento. Además, muestra una gráfica de las próximas 24 horas con la temperatura y probabilidad de lluvia, y una vista de siete días con información sobre la temperatura, velocidad del viento y probabilidad de lluvia para cada día.",
      en: "Weather forecast website that offers detailed information about the current weather and forecasts for the upcoming days using the Open Meteo API. It displays the current date and time, as well as temperature, humidity, and wind speed. Additionally, it presents a graph for the next 24 hours showing temperature and rainfall probability, along with a seven-day view providing information about temperature, wind speed, and rain probability for each day."
    },
    url: "https://www.eltiempodeirene.netlify.app",
    github: "https://github.com/irenealcaine/eltiempo",
    color: "yellow"
  },
  {
    id: 30,
    slug: "shop-catalog",
    title: {
      es: "Catálogo de tienda",
      en: "Shop catalog"
    },
    logo: shop,
    screenshot: "https://picsum.photos/500/200",
    technologies: [react, bootstrap],
    description: {
      es: "Catálogo sencillo de una tienda ficticia. Con barra de búsqueda, ordenación por precio, número de ventas y opiniones de usuarios y filtros de stock, nota de usuarios y categorías. Posibilidad de añadir al carrito, el cual tiene una página propia donde gestiona los productos añadidos.",
      en: "Simple catalog of a fictional store. With a search bar, sorting by price, number of sales, and user reviews, as well as filters for stock availability, user ratings, and categories. The option to add items to the shopping cart, which has its own page for managing the added products."
    },
    url: "https://ecommerce-irene.netlify.app/",
    github: "https://github.com/irenealcaine/commerce-react/",
    color: "purple"
  },
  {
    id: 40,
    slug: "crypto-tracker",
    title: {
      es: "Seguimiento de cryptos",
      en: "Crypto tracker"
    },
    logo: coin,
    screenshot: "https://picsum.photos/500/200",
    technologies: [react, materialui],
    description: {
      es: "Información actualizada de las criptomonedas más populares utilizando la API de Coingecko. Precios y gráficas de variación de precios del último año de 100 criptomonedas, así como el precio y market cap en tiempo real, tanto en euros como en dólares.",
      en: "Up-to-date information on the most popular cryptocurrencies using the Coingecko API. Prices and price variation charts from the last year for 100 cryptocurrencies, as well as real-time price and market cap in both euros and dollars."
    },
    url: "https://cryptotracker-irene.netlify.app/",
    github: "https://github.com/irenealcaine/cryptotracker",
    color: "orange"
  },
  {
    id: 50,
    slug: "netfliclon",
    title: {
      es: "Clon de netflix",
      en: "Netflix Clone"
    },
    logo: netflix,
    screenshot: "https://picsum.photos/500/200",
    technologies: [react, tailwind, firebase],
    description: {
      es: "Web que imita la de Netflix usando la API de TMDB. En la página principal se pueden ver los detalles de una de las películas de moda, así como listas de las novedades, las películas populares, las películas en tendencia, las mejor valoradas y documentales. Cada película tiene su propia página con información de la película, como una descripción, la fecha de estreno, la duración y la nota. También se muestran los actores que participan y películas similares. Cada actor tiene también su propia página donde se muestra la fecha de nacimiento y la de fallecimiento si la hubiera, lugar de nacimiento, descripción de su carrera y sus participaciones en películas.",
      en: "A website that mimics Netflix's layout using the TMDB API. On the main page, you can view details about a trending movie, as well as lists of new releases, popular films, trending movies, top-rated movies, and documentaries. Each movie has its own page with film information such as a description, release date, duration, and rating. The actors involved and similar movies are also displayed. Each actor also has their own page showcasing their birthdate, date of passing if applicable, place of birth, career description, and filmography."
    },
    url: "https://netfliclon-irene.netlify.app/",
    github: "https://github.com/irenealcaine/netfliclon",
    color: "red"
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
    color: "light-blue"
  },
];