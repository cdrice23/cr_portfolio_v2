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
import portfolioData from "../constants/data";

const ProjectCard = ({
  title,
  link,
  imgUrl,
  description,
  hoverStyle,
  cardOpacity,
}) => {
  return (
    <LinkBox
      display="flex"
      alignItems="center"
      justifyContent="center"
      role="group"
    >
      <Box overflow="hidden" borderRadius={"6px"}>
        <Image
          src={imgUrl}
          h="250px"
          w="250px"
          align="center center"
          fit="contain"
          _groupHover={hoverStyle.imageHoverStyle}
          transition="all 200ms ease-in-out"
          filter={hoverStyle.cardOpacity}
        />
      </Box>
      <LinkOverlay
        href={link}
        target="_blank"
        position="absolute"
        textColor={hoverStyle.staticTextStyle}
        _groupHover={hoverStyle.overlayHoverStyle}
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

export default function Projects(pageProps) {
  // Hover styles enable for non-touch devices
  let hoverStyle;
  console.log(pageProps.isTouchDevice());
  if (pageProps.isTouchDevice()) {
    hoverStyle = {
      imageHoverStyle: "none",
      overlayHoverStyle: "none",
      staticTextStyle: "white",
      cardOpacity: "brightness(35%)",
    };
  } else {
    hoverStyle = {
      imageHoverStyle: { filter: "blur(8px)", transform: "scale(1.03)" },
      overlayHoverStyle: { textColor: "white" },
      staticTextStyle: "transparent",
      cardOpacity: "brightness(100%)",
    };
  }
  return (
    <>
      <Flex direction="row">
        <Heading as="h1" size="2xl" w="100vw" p={6}>
          Project List
        </Heading>
      </Flex>
      <SimpleGrid
        templateColumns="repeat(auto-fit, 250px)"
        justifyContent="center"
        alignItems={"flex-start"}
        spacing={12}
        bg="primary"
      >
        {portfolioData.projects.map((project, i) => (
          <ProjectCard
            key={i}
            title={project.title}
            link={project.link}
            imgUrl={project.imgUrl}
            description={project.description}
            hoverStyle={hoverStyle}
          />
        ))}
      </SimpleGrid>
    </>
  );
}
