import React from "react";
import { Heading, Flex, Button, Link } from "@chakra-ui/react";
// import styles from '../styles/Home.module.css'

export default function ContactMe() {
  return (
    <>
      <Flex
        height="100vh"
        alignItems="center"
        justifyContent="center"
        w={"100%"}
      >
        <Flex direction="column" align="center">
          <Heading as="h1" size="2xl" p={6}>
            Hit me up!
          </Heading>
          <Flex>
            <Button variant="ghost" _hover={{ bg: "#238636" }} mx={4}>
              <Link href="https://github.com/ricechrisdtreat" target="_blank">
                <a>Github</a>
              </Link>
            </Button>
            <Button variant="ghost" _hover={{ bg: "#00A0DC" }} mx={4}>
              <Link
                href="https://www.linkedin.com/in/cdrice23/"
                target="_blank"
              >
                <a>LinkedIn</a>
              </Link>
            </Button>
            <Button variant="ghost" _hover={{ bg: "#DC143C" }} mx={4}>
              <Link href="mailto:cd.rice23@gmail.com" target="_blank">
                <a>Email</a>
              </Link>
            </Button>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
}
