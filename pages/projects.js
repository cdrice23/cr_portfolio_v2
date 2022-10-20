import React from "react";
import ContainerBlock from "../components/ContainerBlock";
import Projects from "../components/Projects";

export default function ProjectsPage(pageProps) {
  return (
    <>
      <ContainerBlock
        title="Projects - Chris Rice"
        description="A list of projects I've worked on"
        icon="/github.ico"
      >
        <Projects {...pageProps} />
      </ContainerBlock>
    </>
  );
}
