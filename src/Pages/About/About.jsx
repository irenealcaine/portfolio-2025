import Button from "../../Components/Button/Button";
import ExperienceCard from "../../Components/ExperienceCard/ExperienceCard";
import Layout from "../../Components/Layout/Layout";
import { education } from "../../data/education";
import { experience } from "../../data/experience";
import { socialMedia } from "../../data/socialMedia";
import "./About.css";
import { useTranslation } from "react-i18next";
import CV from "../../data/CV_Irene_Alcaine_Alvarez.pdf";

const AboutPage = () => {
  const { t, i18n } = useTranslation();

  return (
    <Layout>
      <h1 className="about-header">{t("about.title")}</h1>
      <p> {t("about.description")} </p>

      <div className="cv-button">
        <Button
          href={CV}
          download="CV_Irene_Alcaine_Alvarez.pdf"
          variant="primary"
        >
          {t("about.downloadCV")}
        </Button>
      </div>

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
                    title={i18n.language === "es" ? job.es.title : job.en.title}
                    company={
                      i18n.language === "es" ? job.es.company : job.en.company
                    }
                    ubication={
                      i18n.language === "es"
                        ? job.es.ubication
                        : job.en.ubication
                    }
                    date={i18n.language === "es" ? job.es.date : job.en.date}
                    description={
                      i18n.language === "es"
                        ? job.es.description
                        : job.en.description
                    }
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
                    title={i18n.language === "es" ? edu.es.title : edu.en.title}
                    company={
                      i18n.language === "es" ? edu.es.company : edu.en.company
                    }
                    ubication={
                      i18n.language === "es" ? edu.es.ubication : edu.en.company
                    }
                    date={i18n.language === "es" ? edu.es.date : edu.en.date}
                    description={
                      i18n.language === "es"
                        ? edu.es.description
                        : edu.en.description
                    }
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
