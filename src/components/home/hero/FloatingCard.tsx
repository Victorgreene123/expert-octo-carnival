import { Box, type BoxProps } from "@chakra-ui/react";
import { motion } from "motion/react";

const MotionBox = motion.create(Box);

type FloatingVariantProps = {
  yValues: [number, number];
} & BoxProps;

const FloatingCard = ({ yValues, children }: FloatingVariantProps) => {
  return (
    <MotionBox
      h={"100%"}
      w={"100%"}
      animate={{ y: yValues }}
      transition={{
        duration: 2,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut",
      }}
    >
      {children}
    </MotionBox>
  );
};

export default FloatingCard;
