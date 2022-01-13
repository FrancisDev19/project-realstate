import { Box, Container, useColorModeValue } from "@chakra-ui/react";
import Head from "next/head";
import Footer from "./Footer";

import Navbar from "./Navbar";

const Layout = ({ children }) => {
  const bg = useColorModeValue("White", "gray.800");

  return (
    <>
      <Head>
        <title>Real Estate</title>
      </Head>
      <Box as="main" bg={bg}>
        <Container maxW="container.xl" m="auto">
          <header>
            <Navbar />
          </header>
          {children}
          <footer>
            <Footer />
          </footer>
        </Container>
      </Box>
    </>
  );
};

export default Layout;
