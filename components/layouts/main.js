import Head from "next/head";
import { Box, Container } from '@chakra-ui/react'
import Navbar from "../Navbar";

const Main = ({ children, router }) => {
        return (
            <Box as="main" pb={4}>
                <Head>
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    <title>Joseph Muffoletto</title>
                </Head>
                <Navbar/>
                <Container maxW="container.md">
                    {children}
                </Container>
            </Box>
        )
};

export default Main;
