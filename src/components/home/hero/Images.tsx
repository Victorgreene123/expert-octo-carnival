import { Box, Flex, Image } from "@chakra-ui/react";
import FloatingCard from "./FloatingCard";
import Image1 from "@/assets/cliqss-web-home-hero-1.webp";
import Image2 from "@/assets/cliqss-web-home-hero-2.webp";
import Image3 from "@/assets/cliqss-web-home-hero-3.webp";
import Image4 from "@/assets/cliqss-web-home-hero-4.webp";
import Image5 from "@/assets/cliqss-web-home-hero-5.webp";
import Image6 from "@/assets/cliqss-web-home-hero-6.webp";
import ImageCenter from "@/assets/cliqss-web-home-hero-center-2.webp";

const Images = () => {
  return (
    <Flex mt={"50px"} justifyContent={"center"} align={"center"}>
      <Flex
        hideBelow={"md"}
        width={"calc((100% - 375px)/2)"}
        h={"200px"}
        justifyContent={"space-between"}
      >
        <Box width={{ md: "100%", lg: "45%", xl: "30%" }} h={"100%"}>
          <FloatingCard yValues={[-30, -20]}>
            <Image
              borderRadius={"15px"}
              w={"100%"}
              h={"100%"}
              objectFit={"cover"}
              src={Image1}
              alt="hero-image-1"
            />
          </FloatingCard>
        </Box>
        <Box hideBelow={"lg"} w={{ lg: "45%", xl: "30%" }} h={"100%"}>
          <FloatingCard yValues={[10, 20]}>
            <Image
              borderRadius={"15px"}
              w={"100%"}
              h={"100%"}
              objectFit={"cover"}
              src={Image2}
              alt="hero-image-2"
            />
          </FloatingCard>
        </Box>
        <Box hideBelow={"xl"} w={{ xl: "30%" }} h={"100%"}>
          <FloatingCard yValues={[-30, -40]}>
            <Image
              borderRadius={"15px"}
              w={"100%"}
              h={"100%"}
              objectFit={"cover"}
              src={Image3}
              alt="hero-image-3"
            />
          </FloatingCard>
        </Box>
      </Flex>
      <Box w={"100%"} maxW={"375px"} h={"400px"}>
        <Image
          w={"100%"}
          h={"100%"}
          objectFit={""}
          src={ImageCenter}
          alt="hero-image-center"
        />
      </Box>
      <Flex
        hideBelow={"md"}
        width={"calc((100% - 375px)/2)"}
        h={"200px"}
        justifyContent={"space-between"}
      >
        <Box width={{ md: "100%", lg: "45%", xl: "30%" }} h={"100%"}>
          <FloatingCard yValues={[20, 30]}>
            <Image
              borderRadius={"15px"}
              w={"100%"}
              h={"100%"}
              objectFit={"cover"}
              src={Image4}
              alt="hero-image-4"
            />
          </FloatingCard>
        </Box>
        <Box hideBelow={"lg"} w={{ lg: "45%", xl: "30%" }} h={"100%"}>
          <FloatingCard yValues={[-20, -30]}>
            <Image
              borderRadius={"15px"}
              w={"100%"}
              h={"100%"}
              objectFit={"cover"}
              src={Image5}
              alt="hero-image-5"
            />
          </FloatingCard>
        </Box>
        <Box hideBelow={"xl"} w={{ xl: "30%" }} h={"100%"}>
          <FloatingCard yValues={[10, 20]}>
            <Image
              borderRadius={"15px"}
              w={"100%"}
              h={"100%"}
              objectFit={"cover"}
              src={Image6}
              alt="hero-image-6"
            />
          </FloatingCard>
        </Box>
      </Flex>
    </Flex>
  );
};

export default Images;
