import { Box, Text, useBreakpointValue } from "@chakra-ui/react";
import Container from "../../container/Container";
import ThemedText from "../../ThemedText";
import { motion } from "motion/react";
import { containerVariant, textVariant } from "@/utils/FramerVariants";
import CardGrid from "./CardGrid";

const MotionText = motion.create(Text);
const MotionBox = motion.create(Box);

const NaijaWorld = () => {
  const isDesktop = useBreakpointValue({ base: false, lg: true });

  return (
    <Box bg={"black"} py={{ base: "70px", md: "100px" }}>
      <Container color={"white"}>
        <MotionText
          as={"h1"}
          fontWeight={"bold"}
          textAlign={"center"}
          bgGradient={"to-r"}
          gradientFrom={"primary"}
          gradientTo={"secondary"}
          bgClip={"text"}
          variants={textVariant}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.3 }}
        >
          Naija to the World
        </MotionText>
        <ThemedText>
          Where Lagos, London, and Los Angeles meet. Book the vibes that make
          Nigeria the cultural experience capital of Africa.
        </ThemedText>
        {isDesktop ? (
          <MotionBox
            variants={containerVariant}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.3 }}
          >
            <CardGrid />
          </MotionBox>
        ) : (
          <CardGrid individual />
        )}
      </Container>
    </Box>
  );
};

export default NaijaWorld;
