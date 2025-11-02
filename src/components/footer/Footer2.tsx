import { Box, Flex, Text, Image, Link as ChakraLink } from "@chakra-ui/react";
import Container2 from "../container/Container2";
import Logo from "@/assets/cliqss-full-logo-real.webp";
import { Link, useLocation } from "react-router-dom";
import { FaInstagram, FaLinkedinIn, FaTiktok, FaXTwitter } from "react-icons/fa6"
import { MdMail } from "react-icons/md"
const Footer2 = () => {
  const { pathname } = useLocation();

  const linkStyle = (path: string) => ({
    as: Link,
    to: path,
    cursor: "pointer",
    fontSize: "14px",
    color: pathname === path ? "#FC9807" : "#C9C9C9",
    fontWeight: pathname === path ? "600" : "400",
    transition: "0.2s",
    _hover: { color: "#FC9807" },
  });
  const socials = [
    { icon: <FaXTwitter />, href: "https://x.com" },
    { icon: <FaLinkedinIn />, href: "https://linkedin.com" },
    { icon: <FaInstagram />, href: "https://instagram.com" },
    { icon: <FaTiktok />, href: "https://tiktok.com" },
    { icon: <MdMail />, href: "mailto:example@gmail.com" }
  ]

  return (
    <Box 
    h={"65vh"}
    maxH={"65vh"}
    w={"100%"}
    className="admin-font"
    >
        <Container2>
    <Box bg="black" py={{ base: "60px", md: "80px" }} borderRadius="20px" mt="40px">
      <Container2>
        {/* Headline */}
        <Box mb="50px">
          <Text
            fontSize={{ base: "22px", md: "32px" }}
            fontWeight="700"
        className="gradient-text"
            // color={"white"}
            lineHeight="1.3"
          >
            Offline Is Where The Story Begins.
            <br />
            CLIQSS Makes Sure It Never Ends.
          </Text>
        </Box>

        {/* Footer Content */}
        <Flex
        //   justify="space-around"
          flexWrap="wrap"
          gap={{ base: "90px" }}
          color="white"
        >
          {/* Product */}
          <Box>
            <Text fontWeight="400" fontSize="15px" mb="12px">
              Product
            </Text>
            <ChakraLink {...linkStyle("/about")} className="secondary-font">About Cliqss</ChakraLink>
            <br />
            <ChakraLink {...linkStyle("/discover")} className="secondary-font">Discover</ChakraLink>
            <br />
            <ChakraLink {...linkStyle("/host")} className="secondary-font">Host With Us</ChakraLink>
          </Box>

          {/* Resources */}
          <Box>
            <Text fontWeight="400" fontSize="15px" mb="12px">
              Resources
            </Text>
            <ChakraLink {...linkStyle("/tos")} className="secondary-font">Terms Of Service</ChakraLink>
            <br />
            <ChakraLink {...linkStyle("/privacy")} className="secondary-font">Privacy Policy</ChakraLink>
            <br />
            <ChakraLink {...linkStyle("/contact")} className="secondary-font">Contact</ChakraLink>
          </Box>

          {/* Company */}
          <Box>
            <Text fontWeight="400" fontSize="15px" mb="12px">
              Company
            </Text>
            <ChakraLink {...linkStyle("/how-it-works")} className="secondary-font">How It Works</ChakraLink>
            <br />
            <ChakraLink {...linkStyle("/story")} className="secondary-font">Be Part Of The Story</ChakraLink>
          </Box>
        </Flex>

        {/* Bottom Row */}
        
        {/* Copyright */}
        <Text fontSize="12px" color="#6a6a6a" textAlign="center" mt="30px"className="admin-font-italic" >
          2025 All rights reserved
        </Text>
      </Container2>
    </Box>
</Container2>
        <Container2>
        <Flex
          justify="space-between"
          align="center"
          flexWrap="wrap"
          color="#C9C9C9"
          mt="10px"
        >
          <Box w={{ base: "100px", md: "130px" }}>
            <Image src={Logo} alt="Cliqss Logo" w="100%" objectFit="contain" />
          </Box>


                      <Flex gap="18px">
 {socials.map((social, idx) => (
    <ChakraLink
      key={idx}
      href={social.href}
      target="_blank"
      rel="noopener noreferrer"
      bg="black"
      rounded="md"
      w="40px"
      h="40px"
      display="flex"
      alignItems="center"
      justifyContent="center"
      transition="all 0.3s ease"
      cursor="pointer"
      color={"white"}
    //   _hover={{ bg: "#FC9807", color: "white" }}
    >
      {social.icon}
    </ChakraLink>
  ))}
</Flex>

        </Flex>
        </Container2>

          {/* Social Icons */}


    </Box>
  );
};

export default Footer2;
