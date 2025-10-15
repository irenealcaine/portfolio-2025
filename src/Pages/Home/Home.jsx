import NeonCard from "../../Components/NeonCard/NeonCard"
import "./Home.css"
import { socialMedia } from "../../data/socialMedia.jsx"
import { mainProjects } from "../../data/mainProjects.jsx"
import { useTranslation } from "react-i18next"
import LanguageToggle from "../../Components/LanguageToggle/LanguageToggle.jsx"
import react from "../../assets/react.svg"
import firebase from "../../assets/firebase.svg"
import tailwind from "../../assets/tailwind.svg"

const HomePage = () => {
  const { t } = useTranslation();

  return (
    <main className="home">
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
              <img className="tech" key={index} src={icon} alt={`Tech icon ${index}`} />
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
        <p>{t('common.blog')}</p>
      </NeonCard>

    </main>
  )
}

export default HomePage
