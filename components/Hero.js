import React from "react";
import { Center, Image, useMediaQuery, Box } from "@chakra-ui/react";
import portfolioData from "../constants/data";

// GROUP CARD
const HeroGroup = ({ id, switchAnim, lines, heroduration, switchDelay }) => {
  const [isLargerThan912] = useMediaQuery("(min-width: 912px)");
  const heroDisplay = isLargerThan912 ? "wideDisplay" : "narrowDisplay";
  return (
    <Center
      fontSize="md"
      visibility="hidden"
      position="absolute"
      display="flex"
      flexDirection="column"
      textColor="black"
      lines={lines}
      animation={`${portfolioData.keyframes[heroDisplay][switchAnim]} ${heroduration} step-end ${switchDelay} infinite`}
      willChange="animation"
    >
      {portfolioData.herogroups[heroDisplay]
        .filter((g) => g.id === id)
        .map((g) => (
          <HeroLines lines={g.lines} key={g.id} hgroup={g.hgroup} />
        ))}
    </Center>
  );
};

// LINE CARD
const HeroLines = ({ lines }) => {
  const [isLargerThan912] = useMediaQuery("(min-width: 912px)");
  const heroDisplay = isLargerThan912 ? "wideDisplay" : "narrowDisplay";
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
      animation={`${portfolioData.keyframes[heroDisplay].typing} ${
        e.lineDuration
      } steps(${e.textChars}) ${e.lineDelay}, ${
        e.blinkAnim === "duringblink"
          ? `${portfolioData.keyframes[heroDisplay].duringblink} ${e.lineDuration} step-end ${e.lineDelay}`
          : e.blinkAnim === "endblink"
          ? `${portfolioData.keyframes[heroDisplay].endblink} 0.5s step-end alternate infinite`
          : ""
      }${
        e.visibleAnim === "visible"
          ? `, ${portfolioData.keyframes[heroDisplay].visible} ${e.visDuration} step-end ${e.lineDelay} infinite`
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
  const heroTextHeight = isLargerThan912 ? "20%" : "60%";
  const heroTextWidth = isLargerThan912 ? "80%" : "80%";
  const heroDisplay = isLargerThan912 ? "wideDisplay" : "narrowDisplay";
  // const herolength = (id) => {
  //   return document.getElementById(id).innerText.length;
  // };
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
          h={heroTextHeight}
          w={heroTextWidth}
          backgroundColor="rgba(255, 255, 255, .55)"
          filter="blur(16px)"
        />
        <Center
          position="absolute"
          h={heroTextHeight}
          w={heroTextWidth}
          display="grid"
          placeItems="center"
        >
          {/* INSERT CHILDREN HERE - USE MAP + FILTER */}
          {portfolioData.herogroups[heroDisplay].map((group) => (
            <HeroGroup
              key={group.id}
              id={group.id}
              switchAnim={group.switchAnim}
              heroduration={portfolioData.heroDuration[heroDisplay]}
              switchDelay={group.switchDelay}
            />
          ))}
        </Center>
      </Center>
    </>
  );
}
