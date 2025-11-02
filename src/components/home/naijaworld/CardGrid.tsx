import { naijaWorldData } from "@/utils/data";
import { cardVariant, smoothEase } from "@/utils/FramerVariants";
import { Box, SimpleGrid, Text } from "@chakra-ui/react";
import { motion } from "motion/react";

const MotionBox = motion.create(Box);

const CardGrid = ({ individual }: { individual?: boolean }) => {
  return (
    <SimpleGrid columns={{ base: 1, lg: 3 }} gap={"30px"} mt={"50px"}>
      {naijaWorldData.map((each) => (
        <MotionBox
          key={each.id}
          bg={"#101727"}
          p={"20px"}
          borderRadius={"20px"}
          whileHover={{
            scale: 1.04,
            borderWidth: "1px",
            borderColor: "#658cad",
            transition: { duration: 0.4, ease: smoothEase },
          }}
          variants={cardVariant}
          {...(individual && {
            initial: "initial",
            whileInView: "animate",
            viewport: { once: true, amount: 0.3 },
          })}
        >
          <Box
            border={`5px solid ${
              each.id % 2 === 0 ? "{colors.secondary}" : "{colors.primary}"
            }`}
            borderRadius={"5px"}
          />
          <Text className="medium-text" fontWeight={"bold"} mt={"15px"}>
            {each.head}
          </Text>
          <Text mt={"15px"}>{each.text}</Text>
        </MotionBox>
      ))}
    </SimpleGrid>
  );
};

export default CardGrid;
