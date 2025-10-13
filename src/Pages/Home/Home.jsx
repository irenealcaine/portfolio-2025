import NeonCard from "../../Components/NeonCard/NeonCard"
import "./Home.css"

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
        <p>Github</p>
      </NeonCard>

      <NeonCard id="mail" color="red">
        <p>Mail</p>
      </NeonCard>

      <NeonCard id="phone" color="lime">
        <p>Phone</p>
      </NeonCard>

      <NeonCard id="linkedin" color="light-blue">
        <p>LinkedIn</p>
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
