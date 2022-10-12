import React from "react";
// import { useRouter } from "next/router";
import {
  SimpleGrid,
  Heading,
  Box,
  Flex,
  Text,
  LinkBox,
  LinkOverlay,
  Image,
} from "@chakra-ui/react";
import Link from "next/link";
import userData from "../constants/data";
// import styles from '../styles/Home.module.css'

const ProjectCard = ({ title, link, imgUrl, description }) => {
  return (
    <LinkBox
      display="flex"
      alignItems="center"
      justifyContent="center"
      role="group"
    >
      <Box overflow="hidden">
        <Image
          src={imgUrl}
          h="250px"
          w="250px"
          align="center center"
          fit="contain"
          _groupHover={{ filter: "blur(8px)", transform: "scale(1.03)" }}
          transition="all 200ms ease-in-out"
        />
      </Box>
      <LinkOverlay
        href={link}
        target="_blank"
        position="absolute"
        textColor="transparent"
        _groupHover={{ textColor: "white" }}
        transition="all 200ms ease-in-out"
      >
        <Box p={6}>
          <Heading size="md" textAlign="center">
            {title}
          </Heading>
          <Text size="sm" textAlign="center">
            {description}
          </Text>
        </Box>
      </LinkOverlay>
    </LinkBox>
  );
};

export default function Projects() {
  // const router = useRouter();
  // console.log(router.asPath);
  return (
    <>
      <Flex direction="row" m={6}>
        <Heading as="h1" size="2xl" w="100vw">
          Project List
        </Heading>
      </Flex>
      <SimpleGrid
        templateColumns="repeat(auto-fit, 250px)"
        justifyContent="center"
        spacing={12}
      >
        {userData.projects.map((project, i) => (
          <ProjectCard
            title={project.title}
            link={project.link}
            imgUrl={project.imgUrl}
            description={project.description}
          />
        ))}
      </SimpleGrid>
    </>
  );
}
