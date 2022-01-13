import { Box, Flex, SimpleGrid } from "@chakra-ui/react";
import Banner from "../components/Banner";
import Property from "../components/Property";
import { baseUrl, fetchApi } from "./api/fetchApi";

export default function Home({ propertyForSale, propertyForRent }) {
  return (
    <Box>
      <Banner
        purpose="RENT A HOME"
        title1="Rental Homes for"
        title2="Everyone"
        desc1="Explore Apartments, Villas, Homes"
        desc2="and more"
        buttonText="Explore Renting"
        linkName="/search?purpose=for-rent"
        imageUrl="https://bayut-production.s3.eu-central-1.amazonaws.com/image/145426814/33973352624c48628e41f2ec460faba4"
      />
      <SimpleGrid columns={[1, 2, null, 3]}>
        {propertyForRent.map((property) => (
          <Property property={property} key={property.id} />
        ))}
      </SimpleGrid>
      <Banner
        purpose="BUY A HOME"
        title1="Find, Buy & own your"
        title2="Dream Home"
        desc1="Explore Apartments, Villas, Homes"
        desc2="and more"
        buttonText="Explore Buying"
        linkName="/search?purpose=for-sale"
        imageUrl="https://bayut-production.s3.eu-central-1.amazonaws.com/image/110993385/6a070e8e1bae4f7d8c1429bc303d2008"
      />
      <SimpleGrid columns={[1, 2, null, 3]}>
        {propertyForSale.map((property) => (
          <Property property={property} key={property.id} />
        ))}
      </SimpleGrid>
    </Box>
  );
}

export async function getStaticProps() {
  const propertyForSale = await fetchApi(
    `${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-sale&hitsPerPage=6`
  );
  const propertyForRent = await fetchApi(
    `${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-rent&hitsPerPage=6`
  );

  return {
    props: {
      propertyForSale: propertyForSale?.hits,
      propertyForRent: propertyForRent?.hits,
    },
  };
}
