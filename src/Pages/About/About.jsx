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
          <h2>Contacto</h2>
          {socialMedia.map((social) => (
            <div key={social.name} className={`social-media ${social.color}`}>
              <a href={social.href} target="_blank" rel="noopener noreferrer">
                <span>{social.text}</span>
              </a>
            </div>
          ))}
        </div>

        <div className='experience'>
          <div className='work'>
            <h2>Experiencia</h2>
            <p>A pesar de que mi experiencia laboral no está directamente relacionada con la programación, he trabajado en varios sitios que han perfeccionado mis habilidades en atención al cliente, trabajo en equipo y bajo presión y organización del tiempo.</p>
            <ul>
              {experience.slice().reverse().map((job) => (
                <li key={job.id} className="job">
                  <h3>{job.es.title} - {job.es.company}</h3>
                  <span className="ubication-date">{job.es.ubication} | {job.es.date}</span>
                  <ul className="job-description">
                    {job.es.description.map((point, index) => (
                      <li key={index}>{point}</li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </div>
          <div className='education'>
            <h2>Formación</h2>
            <p>Desde principios de 2022, he estado saciando mi curiosidad y aprendiendo por mi cuenta. Además, he realizado algunos cursos de frontend y publicación de páginas web.</p>
            <ul>
              {education.slice().reverse().map((edu) => (
                <li key={edu.id} className="job">
                  <h3>{edu.es.title} - {edu.es.company}</h3>
                  <span className="ubication-date">{edu.es.ubication} | {edu.es.date}</span>
                  <ul className="job-description">
                    {edu.es.description.map((point, index) => (
                      <li key={index}>{point}</li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>

    </Layout>
  )
}

export default AboutPage
