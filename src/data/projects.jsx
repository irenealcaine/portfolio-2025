import todo from "../assets/check.svg"
import weather from "../assets/sun.svg"
import shop from "../assets/shop.png"
import coin from "../assets/bitcoin.svg"
import netflix from "../assets/netflix.svg"
import sofa from "../assets/sofa.svg"
import monster from "../assets/monster.png"
import meal from "../assets/meal.png"
import list from "../assets/list.png"
import spiral from "../assets/spiral.svg"
import resources from "../assets/code.svg"

import react from "../assets/react.svg"

import firebase from "../assets/firebase.svg"
import supabase from "../assets/supabase.svg"

import bootstrap from "../assets/bootstrap.svg"
import materialui from "../assets/materialui.svg"
import tailwind from "../assets/tailwind.svg"
import sass from "../assets/sass.png"

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
    id: 60,
    slug: "the-corner-of-unthinking",
    title: {
      es: "El rincón de no pensar",
      en: "The Corner of Unthinking"
    },
    logo: sofa,
    screenshot: "https://picsum.photos/500/400",
    technologies: [react, tailwind],
    description: {
      es: "Web donde se encuentran proyectos pequeños pero llenos de encanto, todos ellos hechos con React y Tailwind. Aquí, presento una colección de creaciones modestas que, aunque demasiado pequeñas para tener su propio sitio web, merecen ser apreciadas y compartidas.",
      en: "A website where you'll find small yet charming projects, all made with React and Tailwind. Here, I present a collection of modest creations that, although too small to have their own website, deserve to be appreciated and shared."
    },
    url: "https://https://elrincondenopensar.netlify.app/",
    github: "https://github.com/irenealcaine/el-rincon-de-no-pensar",
    color: "dark-blue"
  },
  {
    id: 70,
    slug: "monster-hunter-database",
    title: {
      es: "Base de datos de Monster Hunter",
      en: "Monster Hunter Database"
    },
    logo: monster,
    screenshot: "https://picsum.photos/500/400",
    technologies: [react],
    description: {
      es: "Web con multitud de datos sobre Monster Hunter, informacion sobre los monstruos, armas, armaduras, localizaciones, habilidades, objetos, estados y su relación entre ellos. Utilizando la api de AP de Monster Hunter World.",
      en: "Website with a wealth of data on Monster Hunter, information about monsters, weapons, armor, locations, skills, items, ailments, and their relationships with each other. Using the API of Monster Hunter World."
    },
    url: "https://mh-api-irene.netlify.app/",
    github: "https://github.com/irenealcaine/mh-api/",
    color: "light-blue"
  },
  {
    id: 80,
    slug: "the-meal-wiki",
    title: {
      es: "Wiki de comidas",
      en: "The Meal Wiki"
    },
    logo: meal,
    screenshot: "https://picsum.photos/500/400",
    technologies: [react],
    description: {
      es: "Esta web esta hecha para participar en la hackathon del dev, organizada por el Rincón del Dev. En esta web hecha con la API de TheMealDB, encontrarás toda la informacion de más de 300 recetas de comida, pudiendo filtrar por categoría de comida (entrante, postre, vegano...), ingredientes (vacuno, salmón, berenejena...) o por zona de origen (España, Japón, Italia...). También puedes buscar tu plato favorito o intentar ampliar tus límites con un plato aleatorio recomendado. En la página de cada plato encontrarás toda la informacíon, los ingredientes necesarios y sus cantidades y una serie de pasos para su elaboración, así como la fuente de donde se saca la informacion y un vídeo explicativo de YouTube.",
      en: "This website was created to participate in the dev hackathon, organized by El Rincón del Dev. Using TheMealDB API, this site provides information on over 300 food recipes. You can filter by food category (starter, dessert, vegan, etc.), ingredients (beef, salmon, eggplant, etc.), or region of origin (Spain, Japan, Italy, etc.). You can also search for your favorite dish or try to broaden your horizons with a randomly recommended dish. On each dish's page, you'll find all the necessary information, ingredients and their quantities, and a series of steps for preparation, as well as the source of the information and a YouTube explanatory video."
    },
    url: "https://meal-wiki.netlify.app/",
    github: "https://github.com/irenealcaine/meal-wiki",
    color: "lime"
  },
  {
    id: 90,
    slug: "shopping-list",
    title: {
      es: "Lista de la compra",
      en: "Shopping List"
    },
    logo: list,
    screenshot: "https://picsum.photos/500/400",
    technologies: [react, sass, firebase],
    description: {
      es: "Aplicación de lista de la compra donde tienes una serie de productos y al marcarlos se añaden a tu lista de la compra, además pueedes marcarlos como comprados o eliminarlos. Es necesario registro para guardar tu lista en la nube y acceder a ella desde cualquier dispositivo.",
      en: "Shopping list application where you have a series of products and by marking them they are added to your shopping list, you can also mark them as purchased or delete them. Registration is required to save your list in the cloud and access it from any device."
    },
    url: "https://lista-compra-irene.netlify.app/",
    github: "https://github.com/irenealcaine/lista-de-la-compra",
    color: "green"
  },
  {
    id: 90,
    slug: "template",
    title: {
      es: "Plantilla",
      en: "Template"
    },
    logo: spiral,
    screenshot: "https://picsum.photos/500/400",
    technologies: [react],
    description: {
      es: "Plantilla lista para usar para tus proyectos de React con CSS puro. Tiene varias opciones para el header, footer y navbar, así como diversos componentes, todo ello con colores vivos, modo claro/oscuro y completamente responsivo, además de rutas ya preparadas. Solo tienes que clonar el repositorio y empezar a crear tu proyecto.",
      en: "Template ready to use for your React projects with pure CSS. It has several options for the header, footer and navbar, as well as various components, all with vibrant colors, light/dark mode and full responsive, as well as pre-prepared routes. You just have to clone the repository and start creating your project."
    },
    url: "https://template-irene.netlify.app/",
    github: "https://github.com/irenealcaine/template-navbar",
    color: "pink"
  }
];