import Container from "@/components/container/Container";
import { cardVariant } from "@/utils/FramerVariants";
import { Box, Flex, Text } from "@chakra-ui/react";
import { motion } from "motion/react";
import Avatars from "./Avatars";

const MotionBox = motion.create(Box);

const AfterHero = () => {
  return (
    <MotionBox
      py={"100px"}
      variants={cardVariant}
      initial={"initial"}
      whileInView={"animate"}
      viewport={{ once: true, amount: 0.3 }}
    >
      <Container>
        <Text
          className="very-big-text secondary-font"
          textTransform={"uppercase"}
          fontWeight={"semibold"}
        >
          Your friendly gateway to reconnect with African roots.
        </Text>
        <Flex
          gap={{ base: "30px", md: 0 }}
          mt={"40px"}
          direction={{ base: "column", md: "row" }}
          justify={"space-between"}
        >
          <Box width={{ md: "48%" }} alignSelf={{ md: "flex-end" }}>
            <Avatars />
            <Box
              width={"100%"}
              mt={"20px"}
              px={"18px"}
              py={"18px"}
              bg={"secondary"}
              borderRadius={"40px"}
            >
              <Text
                textAlign={"center"}
                color={"white"}
                className="medium-text"
              >
                Over 1M+ Diaspora Travelers Come To Africa Annually{" "}
              </Text>
            </Box>
          </Box>
          <Box width={{ md: "48%" }}>
            <Text
              className="large-text secondary-font"
              textTransform={"capitalize"}
              color={"gray"}
              lineHeight={"170%"}
            >
              Explore the vibrant world of fashion, indulge in delicious
              cuisines, dance to the latest beats, and immerse yourself in
              lively festivals! Whether you're a local or a visitor, there's
              something for everyone. Gather your friends and prepare for an
              unforgettable journey filled with culture and excitement!
            </Text>
          </Box>
        </Flex>
      </Container>
    </MotionBox>
  );
};

export default AfterHero;
