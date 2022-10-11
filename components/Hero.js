import React from "react";
import { Text, Heading, Flex } from "@chakra-ui/react";

export default function Hero() {
  return (
    <>
      <Flex height="100vh" alignItems="center" justifyContent="center">
        <Flex direction="column" p={12} align="center">
          <Heading as="h1" size="2xl" p={6}>
            Hi, I'm Chris
          </Heading>
          <Text align="center">
            <span>I’ve spent my entire career working in tech.</span> <br />
            <br />
            I’ve worked as a consultant and had various management roles within
            a large tech startup. Whenever I had the opportunity to build
            something technical from scratch (be it a simple Excel macro to more
            complicated Retool applications), it gave me a renewed sense of
            passion and excitement in my workday. <br />
            <br />8 years later, I decided to pivot careers and dive into the
            deep-end of programming. Take a look at some of my most recent
            projects, and don’t hesitate to reach out and connect!
          </Text>
        </Flex>
      </Flex>
    </>
  );

  // <main>
  //   <h1>Hi, I'm Chris.</h1>
  //   <p>

  //   </p>
  // </main>
}
