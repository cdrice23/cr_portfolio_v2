import { ChakraProvider } from "@chakra-ui/react";
import { mainTheme } from "../styles/theme";
// import "@fontsource/cutive-mono";
import "@fontsource/source-code-pro";
import { useEffect } from "react";

function MyApp({ Component, pageProps }) {
  const isTouchDevice = () => {
    return "ontouchstart" in window;
  };
  return (
    <ChakraProvider resetCSS theme={mainTheme}>
      <Component {...pageProps} isTouchDevice={isTouchDevice} />
    </ChakraProvider>
  );
}

export default MyApp;
