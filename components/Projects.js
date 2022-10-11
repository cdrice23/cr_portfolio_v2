import React from "react";
import { useRouter } from "next/router";
import { SimpleGrid, Heading, Box, GridItem, Flex } from "@chakra-ui/react";
// import styles from '../styles/Home.module.css'

export default function Projects() {
  const router = useRouter();
  console.log(router.asPath);
  return (
    <>
      <h1>Hello World Again???</h1>
      <Flex direction="row">
        <Heading as="h1" size="2xl" w="100vw" p={2}>
          Project List
        </Heading>
      </Flex>
      <SimpleGrid
        templateColumns="repeat(auto-fit, minmax(250px, 1fr))"
        spacing="1fr"
        justifyContent="center"
      >
        <Box bg="tomato" h="250px" w="250px"></Box>
        <Box bg="tomato" h="250px" w="250px"></Box>
        <Box bg="tomato" h="250px" w="250px"></Box>
        <Box bg="tomato" h="250px" w="250px"></Box>
      </SimpleGrid>
    </>
  );
}
