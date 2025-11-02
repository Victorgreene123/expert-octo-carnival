import { Box, Text } from "@chakra-ui/react";
import JoinClique from "./JoinClique";
import Container from "@/components/container/Container";
import Images from "./Images";

const Hero = () => {
  return (
    <Box
      p={{ md: "30px 30px 0px 30px", lg: "30px 50px 0px 50px" }}
      color={"white"}
    >
      <Box
        bg={"tertiary"}
        pt={{ base: "80px", md: "90px", lg: "120px" }}
        borderRadius={{ md: "20px" }}
      >
        <Container>
          <Box
            mx={"auto"}
            p={"5px 20px"}
            bg={"#453011"}
            w={"max-content"}
            borderRadius={"10px"}
          >
            <Text className="small-text">
              The Place To Book Your African Vibes Anywhere
            </Text>
          </Box>
          <Text
            as={"h1"}
            fontWeight={"semibold"}
            textAlign={"center"}
            mt={{ base: "40px", md: "60px" }}
          >
            Explore, Connect, Experience!
          </Text>
          <Text
            className="large-text secondary-font"
            maxW={"1000px"}
            textAlign={"center"}
            mt={"15px"}
            mx={"auto"}
            textTransform={"capitalize"}
          >
            Immerse yourself in the richness of Africa! Experience the diverse
            cultures, vibrant traditions, and breathtaking landscapes that make
            this continent truly unique. Join fellow adventurers in celebrating
            Africa's beauty and spirit!
          </Text>
          <JoinClique />
        </Container>
        <Images />
      </Box>
    </Box>
  );
};

export default Hero;
