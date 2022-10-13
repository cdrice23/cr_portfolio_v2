import React, { useEffect, useState } from "react";
import Link from "next/link";
// import { useRouter } from "next/router";
import { Button, Flex } from "@chakra-ui/react";

export default function NavBar(pageProps) {
  // const router = useRouter();
  // console.log(router.asPath);
  console.log(Flex.h);
  return (
    <>
      <Flex
        direction="row"
        justify="flex-end"
        p={1}
        h={12}
        w={"100vw"}
        bgColor="white"
        // position="absolute"
      >
        <Button variant="ghost">
          <Link href="/">
            <a>Home</a>
          </Link>
        </Button>
        <Button variant="ghost">
          <Link href="/projects">
            <a>Projects</a>
          </Link>
        </Button>
        <Button variant="ghost">
          <Link href="/contact">
            <a>Contact</a>
          </Link>
        </Button>
      </Flex>
    </>
  );
}
