import { Box, Flex, Text } from "@chakra-ui/react";
import Container from "../container/Container";

const Footer = () => {
  return (
    <Box bg={"black"} py={"60px"}>
      <Container color={"white"}>
        <Flex
          direction={{ base: "column", lg: "row" }}
          justifyContent={"space-between"}
          gap={{ base: "30px", lg: 0 }}
        >
          <Box width={{ lg: "50%" }} >
            <Text
              className="large-text"
              fontWeight={"medium"}
              color={"primary"}
            >
              Cliqss
            </Text>
            <Text mt={"10px"} maxW={{lg:"500px"}}>
              The place to book your African vibes anywhere. Where Lagos,
              London, and Los Angeles meet.
            </Text>
            <Flex mt={"15px"} gap={"15px"}>
              <Box
                className="small-text"
                px={"10px"}
                bg={"primary"}
                borderRadius={"8px"}
              >
                Naija to the World
              </Box>
              <Box
                className="small-text"
                px={"10px"}
                bg={"secondary"}
                borderRadius={"8px"}
              >
                Live the Vibe
              </Box>
            </Flex>
          </Box>
          <Flex
            width={{ lg: "45%" }}
            direction={{ base: "column", lg: "row" }}
            gap={{ base: "30px", lg: "100px", xl:"130px" }}
          >
            <Box>
              <Text
                className="medium-text"
                fontWeight={"medium"}
                color={"primary"}
              >
                Experience
              </Text>
              <Flex flexDir={"column"} mt={"10px"} gap={"5px"}>
                <Text>Afrobeats & Music</Text>
                <Text>Street Food & Flavours</Text>
                <Text>Fashion & Culture</Text>
                <Text>Sports & Adventure</Text>
              </Flex>
            </Box>
            <Box>
              <Text
                className="medium-text"
                fontWeight={"medium"}
                color={"primary"}
              >
                Global Hubs
              </Text>
              <Flex flexDir={"column"} mt={"10px"} gap={"5px"}>
                <Text>Lagos</Text>
                <Text>London</Text>
                <Text>Toronto</Text>
                <Text>New York</Text>
              </Flex>
            </Box>
          </Flex>
        </Flex>
        <Box as={"hr"} mt={"50px"} />
        <Flex
          direction={{ base: "column", md: "row" }}
          justifyContent={"space-between"}
          alignItems={"center"}
          gap={"5px"}
          mt={"25px"}
        >
          <Text>© 2025 Cliqss. Africa's experience playground.</Text>
          <Flex gap={"25px"}>
            <Text>Privacy</Text>
            <Text>Terms</Text>
            <Text>Contact</Text>
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
};

export default Footer;
