import React from "react";
import ContactMe from "../components/ContactMe";
import ContainerBlock from "../components/ContainerBlock";

export default function ContactPage(pageProps) {
  return (
    <>
      <ContainerBlock
        title="Contact Me - Chris Rice"
        description="This is my contact info"
        icon="/contact-book.ico"
        {...pageProps}
      >
        <ContactMe {...pageProps} />
      </ContainerBlock>
    </>
  );
}
