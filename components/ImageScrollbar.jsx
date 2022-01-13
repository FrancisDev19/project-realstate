import { Box, Icon, Flex } from "@chakra-ui/react";
import Image from "next/image";
import { useContext } from "react";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import { IoArrowForwardSharp, IoArrowBackSharp } from "react-icons/io5";

const LeftArrow = () => {
  const { scrollPrev, isFirstItemVisible } = useContext(VisibilityContext);

  return (
    <Flex
      _disabled={isFirstItemVisible}
      justifyContent="center"
      alignItems="center"
      mr={1}
    >
      <Icon
        as={IoArrowBackSharp}
        onClick={() => scrollPrev()}
        fontSize="2xl"
        cursor="pointer"
      />
    </Flex>
  );
};

const RightArrow = () => {
  const { scrollNext, isLastItemVisible } = useContext(VisibilityContext);

  return (
    <Flex
      _disabled={isLastItemVisible}
      justifyContent="center"
      alignItems="center"
      ml={1}
    >
      <Icon
        as={IoArrowForwardSharp}
        onClick={() => scrollNext()}
        fontSize="2xl"
        cursor="pointer"
      />
    </Flex>
  );
};

const ImageScrollbar = ({ data }) => (
  <ScrollMenu
    LeftArrow={LeftArrow}
    RightArrow={RightArrow}
    style={{ overflow: "hidden" }}
  >
    {data.map((image) => (
      <Box key={image.id} w={910} itemID={image.id} overflow="hidden" p={1}>
        <Image
          alt="property"
          placeholder="blur"
          blurDataURL={image.url}
          src={image.url}
          width={1000}
          height={500}
          sizes="(max-width: 500px) 100px, (max-width: 1023px) 400px, 1000px"
        />
      </Box>
    ))}
  </ScrollMenu>
);

export default ImageScrollbar;
