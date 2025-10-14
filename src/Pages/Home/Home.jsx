import NeonCard from "../../Components/NeonCard/NeonCard"
import "./Home.css"
import { socialMedia } from "../../data/socialMedia.jsx"
import { IoLanguage } from "react-icons/io5";
import { mainProjects } from "../../data/mainProjects.jsx";

const HomePage = () => {
  return (
    <main className="home">
      <NeonCard id="about" color="pink" to={"/about"}>
        <h1>Irene Alcaine</h1>
        <h2>Developer</h2>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem atque, blanditiis ad voluptatem eum voluptatum incidunt aperiam impedit. Id sit totam porro rerum minus omnis illum nemo quam, deserunt enim!
          Quod quibusdam ad tempora ducimus, velit nam repellendus unde saepe. Repudiandae vitae at a quia illo fuga reiciendis impedit cumque sed fugit vel ut eos quam, nam repellat velit molestias.</p>
      </NeonCard>

      <div id="language" ><IoLanguage size="1.5em" /></div>

      {socialMedia.map((media) => (
        <NeonCard key={media.id} id={media.id} color={media.color} href={media.href}>
          {media.icon}
        </NeonCard>
      ))}

      {/* <NeonCard id="project1" color="orange">
        <p>Project 1</p>
      </NeonCard>

      <NeonCard id="project2" color="light-blue">
        <p>Project 2</p>
      </NeonCard>

      <NeonCard id="project3" color="purple">
        <p>Project 3 </p>
      </NeonCard> */}

      {mainProjects.map((project) => (
        <NeonCard key={project.id} id={project.id} color={project.color} href={project.href}>
          <h2>{project.title}</h2>
          <p>{project.short_description}</p>
          <div className="techs">
            {project.tech.map((icon, index) => (
              <img className="tech" key={index} src={icon} alt={`Tech icon ${index}`} />
            ))}
          </div>
          <img className="icon" src={project.icon} alt={`${project.title} icon`} />
        </NeonCard>
      ))}

      <NeonCard id="projects" color="dark-blue" to={"/portfolio"}>
        <p>Projects</p>
      </NeonCard>

      <NeonCard id="blog" color="green">
        <p>Blog</p>
      </NeonCard>

    </main>
  )
}

export default HomePage
