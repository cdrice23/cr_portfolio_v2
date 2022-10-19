import React from "react";
import {
  Center,
  Text,
  Heading,
  Flex,
  Image,
  useMediaQuery,
} from "@chakra-ui/react";

// GROUP CARD

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
        </Center>
      </Center>
    </>
  );

  // <main>
  //   <h1>Hi, I'm Chris.</h1>
  //   <p>

  //   </p>
  // </main>
}
