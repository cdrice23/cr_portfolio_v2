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
      // bgImage={imgUrl}
      // bgPosition="center center"
      // bgRepeat="no-repeat"
      // bgSize="cover"
      h="250px"
      w="250px"
      // m={2}
      display="flex"
      alignItems="center"
      justifyContent="center"
      // textColor="transparent"
      transition="all 250ms ease-in-out"
      _hover={{
        textColor: "white",
        blur: "8px",
      }}
    >
      <Image
        src={imgUrl}
        h="250px"
        w="250px"
        align="center center"
        fit="contain"
      />
      <LinkOverlay href={link} target="_blank">
        <Box>
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
