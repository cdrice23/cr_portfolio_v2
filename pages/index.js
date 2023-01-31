import React from "react";
import ContainerBlock from "../components/ContainerBlock";
import Hero from "../components/Hero";

// Get initial props -
export default function Home(pageProps) {
  return (
    <>
      <ContainerBlock {...pageProps}>
        <Hero {...pageProps} />
      </ContainerBlock>
    </>
  );
}
