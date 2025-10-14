import NeonCard from "../../Components/NeonCard/NeonCard"
import "./Home.css"
import { socialMedia } from "../../data/socialMedia.jsx"
import { mainProjects } from "../../data/mainProjects.jsx"
import { useTranslation } from "react-i18next"
import LanguageToggle from "../../Components/LanguageToggle/LanguageToggle.jsx"

const HomePage = () => {
  const { t } = useTranslation();

  return (
    <main className="home">
      <NeonCard id="about" color="pink" to={"/about"}>
        <h1>{t('home.name')}</h1>
        <h2>{t('home.role')}</h2>
        <p>{t('home.description')}</p>
      </NeonCard>

      <NeonCard id="language" color="orange">
        <LanguageToggle className="neon-card-style" />
      </NeonCard>

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
        <p>{t('common.projects')}</p>
      </NeonCard>

      <NeonCard id="blog" color="green">
        <p>{t('common.blog')}</p>
      </NeonCard>

    </main>
  )
}

export default HomePage
