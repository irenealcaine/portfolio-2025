import ExperienceCard from "../../Components/ExperienceCard/ExperienceCard";
import Layout from "../../Components/Layout/Layout";
import { education } from "../../data/education";
import { experience } from "../../data/experience";
import { socialMedia } from "../../data/socialMedia";
import "./About.css";
import { useTranslation } from "react-i18next";

const AboutPage = () => {
  const { t, i18n } = useTranslation();

  return (
    <Layout>
      <h1>{t("about.title")}</h1>
      <p> {t("about.description")} </p>

      <div className="container">
        <div className="contact">
          <h2 className="about-title">{t("about.contact-title")}</h2>
          <div className="social-media-container">
            {socialMedia.map((social) => (
              <div key={social.name} className={`social-media ${social.color}`}>
                <a href={social.href} target="_blank" rel="noopener noreferrer">
                  <span>{social.icon}</span>
                  {social.text}
                </a>
              </div>
            ))}
          </div>
        </div>

        <div className="experience">
          <div className="work">
            <h2 className="about-title">{t("about.experience-title")}</h2>
            <p>{t("about.experience-description")}</p>
            <ul className="timeline">
              {experience
                .slice()
                .reverse()
                .map((job) => (
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
          <div className="education">
            <h2 className="about-title">{t("about.education-title")}</h2>
            <p>{t("about.education-description")}</p>
            <ul className="timeline">
              {education
                .slice()
                .reverse()
                .map((edu) => (
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
  );
};

export default AboutPage;
