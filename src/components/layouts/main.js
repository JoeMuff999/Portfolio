import Head from "next/head";
import { Box, Container, keyframes } from "@chakra-ui/react";
import Navbar from "../Navbar";

const fade = keyframes`
    from {opacity: 0;}
    to {opacity: 1}
`

const fadeAnimation = `${fade} 1s`

const Main = ({ children, router }) => {
  return (
    <Box as="main" pb={4}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Joseph Muffoletto</title>
      </Head>
      <Navbar />
        <Container maxW="container.md" animation={fadeAnimation}>{children}</Container>

    </Box>
  );
};

export default Main;
