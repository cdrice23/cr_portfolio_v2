import { extendTheme, theme as base } from "@chakra-ui/react";

export const mainTheme = extendTheme({
  colors: {
    primary: "#708090",
    secondary: "white",
    highlight: "#F1B04C",
  },
  fonts: {
    heading: `'Source Code Pro', ${base.fonts.heading}`,
    body: `Source Code Pro, ${base.fonts.body}`,
  },
  // components: {
  //     ButtonStyles
  // }
});
