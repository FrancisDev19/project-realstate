import { Box, useColorModeValue } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box
      textAlign="center"
      p={5}
      color="gray.600"
      borderTop="1px"
      borderColor={useColorModeValue("gray.800", "gray.500")}
    >
      2021 &copy; Realtor, Inc.
    </Box>
  );
};

export default Footer;
