import NeonCard from "../../Components/NeonCard/NeonCard"
import "./Home.css"
import { socialMedia } from "../../data/socialMedia.jsx"

const HomePage = () => {
  return (
    <main className="home">
      <NeonCard id="about" color="pink" to={"/about"}>
        <h1>Irene Alcaine</h1>
        <h2>Developer</h2>
      </NeonCard>

      <NeonCard id="language" color="orange">
        <p>EN/ES</p>
      </NeonCard>

      {socialMedia.map((media) => (
        <NeonCard key={media.id} id={media.id} color={media.color} href={media.href}>
          {media.icon}
        </NeonCard>
      ))}

      <NeonCard id="project1" color="orange">
        <p>Project 1</p>
      </NeonCard>

      <NeonCard id="project2" color="light-blue">
        <p>Project 2</p>
      </NeonCard>

      <NeonCard id="project3" color="purple">
        <p>Project 3 </p>
      </NeonCard>

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
