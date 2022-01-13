import Image from "next/image";
import Link from "next/link";
import { Flex, Box, Text, Button, useColorModeValue } from "@chakra-ui/react";

const Banner = ({
  purpose,
  title1,
  title2,
  desc1,
  desc2,
  buttonText,
  linkName,
  imageUrl,
}) => {
  return (
    <Flex flexWrap="wrap" justifyContent="center" alignItems="center" m={10}>
      <Image src={imageUrl} width={500} height={300} alt="banner" />
      <Box p={5}>
        <Text
          color={useColorModeValue("gray.500", "gray.200")}
          fontSize="sm"
          fontWeight="medium"
        >
          {purpose}
        </Text>
        <Text fontSize="3xl" fontWeight="bold">
          {title1}
        </Text>
        <Text fontSize="3xl" fontWeight="bold">
          {title2}
        </Text>
        <Text
          color={useColorModeValue("gray.700", "gray.300")}
          fontSize="lg"
          py={3}
          fontWeight="medium"
        >
          {desc1} <br />
          {desc2}
        </Text>
        <Button
          size="xl"
          bg={useColorModeValue("blue.300", "blue.800")}
          color="white"
          p={2}
        >
          <Link href={linkName}>{buttonText}</Link>
        </Button>
      </Box>
    </Flex>
  );
};

export default Banner;
