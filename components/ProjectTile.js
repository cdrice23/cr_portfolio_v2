import React, { useEffect, useState } from "react";
import { Box, Link, Grid, GridItem, Image } from "@chakra-ui/react";

export default function ProjectTile() {
  return (
    <>
      <Grid templateColumns="repeat(250px, 1fr)" gap={6}>
        <GridItem w="250px" h="250px" bg="blue.500" />
      </Grid>
    </>
  );
}
