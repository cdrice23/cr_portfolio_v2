import React from "react";
import ContainerBlock from "../components/ContainerBlock";
import Hero from "../components/Hero";

export default function Home(pageProps) {
  return (
    <>
      <ContainerBlock {...pageProps}>
        <Hero {...pageProps} />
      </ContainerBlock>
    </>
  );
}
