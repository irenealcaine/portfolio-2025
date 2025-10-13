import NeonCard from "../../Components/NeonCard/NeonCard"
import "./Home.css"
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { IoLogoWhatsapp } from "react-icons/io5";

const HomePage = () => {
  return (
    <main className="home">
      <NeonCard id="about" color="pink">
        <h1>Irene Alcaine</h1>
        <h2>Developer</h2>
      </NeonCard>

      <NeonCard id="language" color="orange">
        <p>EN/ES</p>
      </NeonCard>

      <NeonCard id="github" color="yellow">
        <FiGithub />
      </NeonCard>

      <NeonCard id="mail" color="red">
        <FiMail />
      </NeonCard>

      <NeonCard id="phone" color="lime">
        <IoLogoWhatsapp />
      </NeonCard>

      <NeonCard id="linkedin" color="light-blue">
        <FiLinkedin />
      </NeonCard>

      <NeonCard id="project1" color="orange">
        <p>Project 1</p>
      </NeonCard>

      <NeonCard id="project2" color="light-blue">
        <p>Project 2</p>
      </NeonCard>

      <NeonCard id="project3" color="purple">
        <p>Project 3 </p>
      </NeonCard>

      <NeonCard id="projects" color="dark-blue">
        <p>Projects</p>
      </NeonCard>

      <NeonCard id="blog" color="green">
        <p>Blog</p>
      </NeonCard>

    </main>
  )
}

export default HomePage
