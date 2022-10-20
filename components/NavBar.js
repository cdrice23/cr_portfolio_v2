import React from "react";
import Link from "next/link";
import { Button, Flex } from "@chakra-ui/react";
import { useMediaQuery } from "@chakra-ui/react";

export default function NavBar() {
  const [isLargerThan912] = useMediaQuery("(min-width: 912px)");
  const navJustify = isLargerThan912 ? "flex-end" : "center";
  return (
    <>
      <Flex
        direction="row"
        justify={navJustify}
        p={1}
        h={12}
        w={"100vw"}
        bgColor="secondary"
        // position="absolute"
      >
        <Button variant="ghost" mx={2}>
          <Link href="/">
            <a>Home</a>
          </Link>
        </Button>
        <Button variant="ghost" mx={2}>
          <Link href="/projects">
            <a>Projects</a>
          </Link>
        </Button>
        <Button variant="ghost" mx={2}>
          <Link href="/contact">
            <a>Contact</a>
          </Link>
        </Button>
      </Flex>
    </>
  );
}
