import React from "react";
import ContactMe from "../components/ContactMe";
import ContainerBlock from "../components/ContainerBlock";
// import styles from '../styles/Home.module.css'

export default function ContactPage() {
  return (
    <>
      <ContainerBlock
        title="Contact Me - Chris Rice"
        description="This is my contact info"
        icon="/contact-book.ico"
      >
        <ContactMe />
      </ContainerBlock>
    </>
  );
}
