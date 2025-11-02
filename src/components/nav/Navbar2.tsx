import { Box, Flex, Image, Button, Text } from "@chakra-ui/react";
import Logo from "@/assets/cliqss-full-logo-real.webp";
import Container2 from "../container/Container2";
import { Link, useLocation } from "react-router-dom";
import {ArrowRightCircle} from "lucide-react"

const Navbar2 = () => {

      const location = useLocation();

  const navLinks = [
    { label: "Home", to: "/home" },
    { label: "Discover", to: "/discover" },
    { label: "Host With Us", to: "/host" },
  ];
  return (
    <Box
    //   as="nav"
    //   pos="absolute"
    //   top={0}
    //   left={0}
      w="100%"
      h={{ base: "80px", md: "60px", lg: "100px" }}
      bg="white"
      zIndex={1000}
    //   shadow="sm"
    >
      <Container2 h="100%">
        <Flex
          align="center"
          justify="space-between"
          h="100%"
          className="admin-font"
        >
          {/* Logo */}
          <Box
            w={{ base: "80px", md: "100px", lg: "130px" }}
          >
            <Image
              src={Logo}
              w="100%"
              h="100%"
              objectFit="contain"
              alt="Cliqss Logo"
            />
          </Box>

          {/* Right section */}
          <Flex gap={{ base: 4, md: 6 }} alignItems={"center"} fontWeight={"300"} fontSize={"18px"} smOnly={{display: "none"}} >
                    {
                        navLinks.map((item) => {
                            const isActive = location.pathname === item.to;
                            return (
                    <Link to={item.to}>
                        <Text
                          _hover={{color:  "#FC9807"   }}
                        color={isActive ? "#FC9807" : "#000000"}
                        fontWeight={isActive ? "600" : "300"}
                        >{item.label}</Text>
                    </Link>
                            )
                        })
                    }


                
            
          </Flex>

          <Button bg={"#FC9807"} py={"15px"} px={"30px"} rounded={"40px"}>
        
                <Text color={"#FFFFFF"}>Join The Experience</Text>

                <ArrowRightCircle />
          </Button>
        </Flex>
      </Container2>
    </Box>
  );
};

export default Navbar2;



