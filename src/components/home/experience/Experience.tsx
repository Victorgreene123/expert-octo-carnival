import Container from "@/components/container/Container";
import ThemedText from "@/components/ThemedText";
import {
  cardVariant,
  experienceCardVariant,
  smoothEase,
  textVariant,
} from "@/utils/FramerVariants";
import { Box, SimpleGrid, Text } from "@chakra-ui/react";
import { motion } from "motion/react";
import { experienceData } from "@/utils/data";

const MotionText = motion.create(Text);
const MotionBox = motion.create(Box);

const Experience = () => {
  return (
    <Box bg={"black"} py={{ base: "70px", md: "100px" }}>
      <Container color={"white"}>
        <MotionText
          as={"h1"}
          fontWeight={"bold"}
          textAlign={"center"}
          variants={textVariant}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.3 }}
        >
          Africa's Experience{" "}
          <Text
            as={"span"}
            bgGradient={"to-r"}
            gradientFrom={"primary"}
            gradientTo={"secondary"}
            bgClip={"text"}
          >
            Playground
          </Text>
        </MotionText>
        <ThemedText mt={"10px"}>
          Chop vibes. Make memories. From cultural immersion to Instagrammable
          adventures.
        </ThemedText>
        <SimpleGrid
          columns={{ base: 1, md: 2, lg: 3 }}
          gap={"30px"}
          mt={"50px"}
        >
          {experienceData.map((each) => (
            <MotionBox
              key={each.id}
              bg={"#101727"}
              p={"20px"}
              borderRadius={"20px"}
              whileHover={{
                scale: 1.04,
                rotate: "2deg",
                border: "1px solid orange",
                transition: { duration: 0.4, ease: smoothEase },
              }}
              variants={experienceCardVariant}
              initial={"initial"}
              whileInView={"animate"}
              viewport={{ once: true, amount: 0.3 }}
            >
              <Box
                w={"35px"}
                h={"35px"}
                borderRadius={"50%"}
                bgGradient={"to-r"}
                gradientFrom={"primary"}
                gradientTo={"secondary"}
              />
              <Text mt={"15px"} fontWeight={"semibold"}>
                {each.text}
              </Text>
            </MotionBox>
          ))}
        </SimpleGrid>
        <MotionBox
          w={"max-content"}
          mx={"auto"}
          mt={"60px"}
          borderRadius={"25px"}
          bgGradient={"to-r"}
          gradientFrom={"primary"}
          gradientTo={"secondary"}
          p={{ base: "5px 15px", sm: "5px 50px" }}
          variants={cardVariant}
          initial={"initial"}
          whileInView={"animate"}
          viewport={{ once: true, amount: 0.3 }}
        >
          <Text className="medium-text" fontWeight={"semibold"}>
            Book the Vibes Before They're Gone 🔥
          </Text>
        </MotionBox>
      </Container>
    </Box>
  );
};

export default Experience;
