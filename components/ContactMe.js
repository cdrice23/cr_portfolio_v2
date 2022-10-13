import Head from "next/head";
import { Heading, Flex, Button, Link } from "@chakra-ui/react";
// import styles from '../styles/Home.module.css'

export default function ContactMe(pageProps) {
  return (
    <>
      <Flex height="100vh" alignItems="center" justifyContent="center">
        <Flex direction="column" p={12} align="center">
          <Heading as="h1" size="2xl" p={6}>
            Hit me up!
          </Heading>
          <Flex>
            <Button variant="ghost">
              <Link href="https://github.com/ricechrisdtreat" target="_blank">
                <a>Github</a>
              </Link>
            </Button>
            <Button variant="ghost">
              <Link
                href="https://www.linkedin.com/in/cdrice23/"
                target="_blank"
              >
                <a>LinkedIn</a>
              </Link>
            </Button>
            <Button variant="ghost">
              <Link href="mailto:cd.rice23@gmail.com" target="_blank">
                <a>Email</a>
              </Link>
            </Button>
          </Flex>
        </Flex>
      </Flex>
      <main>
        <h1>Hit me up!</h1>
      </main>
    </>
  );
}
