import React from "react";
import { Center, Image, useMediaQuery, Box } from "@chakra-ui/react";
import portfolioData from "../constants/data";

// GROUP CARD
const HeroGroup = ({ id, switchAnim, lines, heroduration, switchDelay }) => {
  return (
    <Center
      fontSize="md"
      visibility="hidden"
      position="absolute"
      display="flex"
      flexDirection="column"
      textColor="black"
      lines={lines}
      animation={`${portfolioData.keyframes[switchAnim]} ${heroduration} step-end ${switchDelay} infinite`}
      willChange="animation"
    >
      {portfolioData.herogroups
        .filter((g) => g.id === id)
        .map((g) => (
          <HeroLines lines={g.lines} key={g.id} hgroup={g.hgroup} />
        ))}
    </Center>
  );
};

// LINE CARD
const HeroLines = ({ lines }) => {
  return lines.map((e) => (
    <Box
      whiteSpace="nowrap"
      overflow="hidden"
      key={e.id}
      lineDuration={e.lineDuration}
      lineDelay={e.lineDelay}
      textChars={e.textChars}
      blinkAnim={e.blinkAnim}
      w={`${e.textChars}ch`}
      animation={`${portfolioData.keyframes.typing} ${e.lineDuration} steps(${
        e.textChars
      }) ${e.lineDelay}, ${
        e.blinkAnim === "duringblink"
          ? `${portfolioData.keyframes.duringblink} ${e.lineDuration} step-end ${e.lineDelay}`
          : e.blinkAnim === "endblink"
          ? `${portfolioData.keyframes.endblink} 0.5s step-end alternate infinite`
          : ""
      }${
        e.visibleAnim === "visible"
          ? `, ${portfolioData.keyframes.visible} ${e.visDuration} step-end ${e.lineDelay} infinite`
          : e.visibleAnim
      }`}
      opacity={e.visibleAnim === "visible" ? 0 : "inherit"}
    >
      {e.text}
    </Box>
  ));
};

export default function Hero(pageProps) {
  const [isLargerThan912] = useMediaQuery("(min-width: 912px)");
  const imageAlign = isLargerThan912 ? "50% 50%" : "25% 50%";
  const herolength = (id) => {
    return document.getElementById(id).innerText.length;
  };
  return (
    <>
      <Center h="100vh" w="100vw" display="grid" placeItems="center">
        <Image
          src="/headshot_portfolio.jpg"
          w="100vw"
          h="100vh"
          align={imageAlign}
          fit="cover"
          filter="grayscale(90%)"
        />
        <Center
          position="absolute"
          h={"50%"}
          w={"75%"}
          backgroundColor="rgba(255, 255, 255, .55)"
          filter="blur(16px)"
        />
        <Center
          position="absolute"
          h={"50%"}
          w={"75%"}
          display="grid"
          placeItems="center"
        >
          {/* INSERT CHILDREN HERE - USE MAP + FILTER */}
          {portfolioData.herogroups.map((group) => (
            <HeroGroup
              key={group.id}
              id={group.id}
              switchAnim={group.switchAnim}
              heroduration={portfolioData.heroDuration}
              switchDelay={group.switchDelay}
            />
          ))}
        </Center>
      </Center>
    </>
  );
}
