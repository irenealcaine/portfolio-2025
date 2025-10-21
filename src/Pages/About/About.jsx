import ExperienceCard from '../../Components/ExperienceCard/ExperienceCard'
import Layout from '../../Components/Layout/Layout'
import { education } from '../../data/education'
import { experience } from '../../data/experience'
import { socialMedia } from '../../data/socialMedia'
import "./About.css"

const AboutPage = () => {
  return (
    <Layout>
      <h1>Sobre mí</h1>
      <p>¡Hola! Soy Irene Alcaine, graduada en Ingeniería. Sin embargo, tras obtener mi título, descubrí que mi verdadera pasión es el desarrollo web. Estoy ansiosa por tener la oportunidad de demostrar mis capacidades profesionalmente en el mundo de la programación, al que tanto cariño le tengo.</p>

      <div className='container'>
        <div className='contact'>
          <h2 className="about-title">Contacto</h2>
          <div className='social-media-container'>
            {socialMedia.map((social) => (
            <div key={social.name} className={`social-media ${social.color}`}>
              <a href={social.href} target="_blank" rel="noopener noreferrer">
                <span>{social.icon}</span>{social.text} 
              </a>
            </div>
          ))}
          </div>
          
        </div>

        <div className='experience'>
          <div className='work'>
            <h2 className="about-title">Experiencia</h2>
            <p>A pesar de que mi experiencia laboral no está directamente relacionada con la programación, he trabajado en varios sitios que han perfeccionado mis habilidades en atención al cliente, trabajo en equipo y bajo presión y organización del tiempo.</p>
            <ul className='timeline'>
              {experience.slice().reverse().map((job) => (
                <ExperienceCard
                  index={experience.indexOf(job)}
                  key={job.id}
                  id={job.id}
                  color={job.color}
                  title={job.es.title}
                  company={job.es.company}
                  ubication={job.es.ubication}
                  date={job.es.date}
                  description={job.es.description}
                />
              ))}
            </ul>
          </div>
          <div className='education'>
            <h2 className="about-title">Formación</h2>
            <p>Desde principios de 2022, he estado saciando mi curiosidad y aprendiendo por mi cuenta. Además, he realizado algunos cursos de frontend y publicación de páginas web.</p>
            <ul className='timeline'>
              {education.slice().reverse().map((edu) => (
                <ExperienceCard
                  index={education.indexOf(edu)}
                  key={edu.id}
                  id={edu.id}
                  color={edu.color}
                  title={edu.es.title}
                  company={edu.es.company}
                  ubication={edu.es.ubication}
                  date={edu.es.date}
                  description={edu.es.description}
                />
              ))}
            </ul>
          </div>

        </div>
      </div>

    </Layout>
  )
}

export default AboutPage
