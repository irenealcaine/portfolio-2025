import { useEffect, useState } from "react"
import NeonCard from "../../Components/NeonCard/NeonCard"
import SEOHead from "../../Components/SEOHead/SEOHead"
import "./Home.css"
import { socialMedia } from "../../data/socialMedia.jsx"
import { mainProjects } from "../../data/mainProjects.jsx"
import { useTranslation } from "react-i18next"
import LanguageToggle from "../../Components/LanguageToggle/LanguageToggle.jsx"
import react from "../../assets/react.svg"
import firebase from "../../assets/firebase.svg"
import tailwind from "../../assets/tailwind.svg"
import blog from "../../assets/blog.svg"
import { getLastThreePostsSlugs } from "../../services/blogService.js"

const HomePage = () => {
  const { t, i18n } = useTranslation()
  const [posts, setPosts] = useState([])
  const [loadingPosts, setLoadingPosts] = useState(true)

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const slugs = await getLastThreePostsSlugs()
        setPosts(slugs)
      } catch (error) {
        console.error("Error al cargar los posts:", error)
        setPosts([])
      } finally {
        setLoadingPosts(false)
      }
    }
    fetchPosts()
  }, [])

  const seo = {
    es: {
      title: "Irene Alcaine | Desarrolladora Full-Stack",
      description: "Portfolio de Irene Alcaine, desarrolladora full-stack. Proyectos web con React, Firebase, Tailwind y más. Soluciones innovadoras y aprendizaje continuo.",
    },
    en: {
      title: "Irene Alcaine | Full-Stack Developer",
      description: "Irene Alcaine's portfolio, full-stack developer. Web projects with React, Firebase, Tailwind and more. Innovative solutions and continuous learning.",
    },
  }

  const currentSeo = i18n.language === "es" ? seo.es : seo.en

  return (
    <main className="home">
      <SEOHead
        title={currentSeo.title}
        description={currentSeo.description}
        path="/"
      />
      <NeonCard id="about" color="pink" to={"/about"}>
        <h1>{t('home.name')}</h1>
        <h2>{t('home.role')}</h2>
        <p>{t('home.description')}</p>
      </NeonCard>

      <div id="language">
        <LanguageToggle />
      </div>

      {socialMedia.map((media) => (
        <NeonCard key={media.id} id={media.id} color={media.color} href={media.href}>
          {media.icon}
        </NeonCard>
      ))}

      {mainProjects.map((project) => (
        <NeonCard key={project.id} id={project.id} color={project.color} href={project.href}>
          <h2>{t(`projects.${project.id}.title`)}</h2>
          <p>{t(`projects.${project.id}.description`)}</p>
          <div className="techs">
            {project.tech && project.tech.map((icon, index) => (
              <img className="tech" key={index} src={icon} alt={`Technology ${index + 1}`} />
            ))}
          </div>
          <img className="icon" src={project.icon} alt={`${project.title} icon`} />
        </NeonCard>
      ))}

      <NeonCard id="projects" color="dark-blue" to={"/portfolio"}>
        <h2>{t('portfolio.home')}</h2>
        <p>{t('portfolio.description')}</p>
        <img className="projects-icon icon1" src={react} alt="React icon" />
        <img className="projects-icon icon2" src={firebase} alt="Firebase icon" />
        <img className="projects-icon icon3" src={tailwind} alt="Tailwind icon" />
      </NeonCard>

      <NeonCard id="blog" color="green">
        <h2>{t('common.blog')}</h2>
        <p>{t('common.blogDescription')}</p>
        {loadingPosts ? (
          <p style={{ fontSize: '0.9em', opacity: 0.7 }}>Cargando posts...</p>
        ) : posts.length > 0 ? (
          <>
            {posts.map((post) => (
              <a href={`https://blogdeirene.netlify.app/${post.slug}`} target="_blank" rel="noopener noreferrer" key={post.slug}>/{post.slug}</a>
            ))}
            <a href={`https://blogdeirene.netlify.app`} target="_blank" rel="noopener noreferrer">/..</a>
          </>
        ) : (
          <p style={{ fontSize: '0.9em', opacity: 0.7 }}>No hay posts disponibles</p>
        )}
        <img className="blog-icon icon" src={blog} alt="Blog icon" />
      </NeonCard>

    </main>
  )
}

export default HomePage
