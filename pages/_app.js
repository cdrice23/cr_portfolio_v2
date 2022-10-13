import { ChakraProvider } from "@chakra-ui/react";

function MyApp({ Component, pageProps }) {
  const isTouchDevice = () => {
    return "ontouchstart" in window;
  };
  return (
    <ChakraProvider>
      <Component {...pageProps} isTouchDevice={isTouchDevice} />
    </ChakraProvider>
  );
}

export default MyApp;
