import { textVariant } from "@/utils/FramerVariants";
import { Text, type TextProps } from "@chakra-ui/react";
import { motion } from "motion/react";

const MotionText = motion.create(Text);

const ThemedText = ({ children }: TextProps) => {
  return (
    <MotionText
      mt={"10px"}
      className="medium-text"
      textAlign={"center"}
      maxW={"720px"}
      mx={"auto"}
      variants={textVariant}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, amount: 0.3 }}
    >
      {children}
    </MotionText>
  );
};

export default ThemedText;
