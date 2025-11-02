import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import Container from "../container/Container";
import Logo from "@/assets/cliqss-full-logo-real.webp";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <Box
      pos={"absolute"}
      top={0}
      left={0}
      w={"100%"}
      h={{ base: "80px", md: "120px", lg: "150px" }}
      zIndex={1000}
    >
      <Container
        h={"100%"}
        display={"flex"}
        alignItems={{ base: "center", md: "flex-end" }}
      >
        <Flex w={"100%"} justifyContent={"space-between"} alignItems={"center"}>
          <Box
            width={{ base: "70px", md: "100px", lg: "120px" }}
            h={{ base: "40px", md: "70px", lg: "100px" }}
          >
            <Image
              w={"100%"}
              h={"100%"}
              objectFit={"contain"}
              src={Logo}
              alt="cliqss-logo"
            />
          </Box>
          <Flex gap={{ base: "10px" }}>
            <Button
              bg={"primary"}
              size={"xs"}
              p={{ base: "15px", md: "20px 25px" }}
              borderRadius={"15px"}
            >
              <Text className="medium-text">Contact</Text>
            </Button>
            <Link to={"/home"} target="_blank" rel="noreferrer">
              <Button
                bg={"transparent"}
                border={"1px solid {colors.primary}"}
                size={"xs"}
                p={{ base: "15px", md: "20px 25px" }}
                borderRadius={"15px"}
              >
                <Text className="medium-text">Get Started</Text>
              </Button>
            </Link>
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
};

export default Navbar;
