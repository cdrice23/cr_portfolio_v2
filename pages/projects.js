import ContainerBlock from "../components/ContainerBlock";
import Projects from "../components/Projects";
// import styles from '../styles/Home.module.css'

export default function ProjectsPage() {
  return (
    <>
      <ContainerBlock
        title="Projects - Chris Rice"
        description="A list of projects I've worked on"
        icon="/github.ico"
      >
        <Projects />
      </ContainerBlock>
    </>
  );
}
