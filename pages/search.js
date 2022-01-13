import {
  Flex,
  Box,
  Text,
  Icon,
  useColorModeValue,
  Heading,
  SimpleGrid,
} from "@chakra-ui/react";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";
import { BsFilter } from "react-icons/bs";
import SearchFilters from "../components/SearchFilters";
import Property from "../components/Property";
import { baseUrl, fetchApi } from "../pages/api/fetchApi";

import noresults from "../assets/images/noresult.svg";

const Search = ({ properties }) => {
  const [searchFilters, setSearchFilters] = useState(false);
  const router = useRouter();

  return (
    <Box>
      <Flex
        cursor="pointer"
        bg={useColorModeValue("gray.100", "gray.900")}
        borderBottom="1px"
        borderColor="gray.200"
        fontWeight="black"
        fontSize="lg"
        justifyContent="center"
        alignItems="center"
        onClick={() => setSearchFilters((prevFilters) => !prevFilters)}
      >
        <Text> Search Property by filters </Text>
        <Icon pl={2} w={7} as={BsFilter}></Icon>
      </Flex>
      {searchFilters && <SearchFilters />}
      <Heading as="h2" size="2xl" p={4} mb={3} fontWeight="bold">
        Properties {router.query.purpose}
      </Heading>
      <SimpleGrid columns={[1, 2, 3]}>
        {properties.map((property) => (
          <Property property={property} key={property.id} />
        ))}
        {properties.length === 0 && (
          <Flex
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
            my={5}
            w="full"
          >
            <Image alt="no results" src={noresults} />
            <Text fontSize="2xl" mt={3}>
              No Result Found.
            </Text>
          </Flex>
        )}
      </SimpleGrid>
    </Box>
  );
};

export default Search;

export const getServerSideProps = async ({ query }) => {
  const purpose = query.purpose || "for-rent";
  const rentFrequency = query.rentFrequency || "yearly";
  const minPrice = query.minPrice || "0";
  const maxPrice = query.maxPrice || "1000000";
  const roomsMin = query.roomsMin || "0";
  const bathsMin = query.bathsMin || "0";
  const sort = query.sort || "price-desc";
  const areaMax = query.areaMax || "35000";
  const locationExternalIDs = query.locationExternalIDs || "5002";
  const categoryExternalID = query.categoryExternalID || "4";

  const data = await fetchApi(
    `${baseUrl}/properties/list?locationExternalIDs=${locationExternalIDs}&purpose=${purpose}&categoryExternalID=${categoryExternalID}&bathsMin=${bathsMin}&rentFrequency=${rentFrequency}&priceMin=${minPrice}&priceMax=${maxPrice}&roomsMin=${roomsMin}&sort=${sort}&areaMax=${areaMax}`
  );

  return {
    props: {
      properties: data?.hits,
    },
  };
};
