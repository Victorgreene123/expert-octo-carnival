import { toastVariant } from "@/utils/FramerVariants";
import { Box, Text } from "@chakra-ui/react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";

const MotionBox = motion.create(Box);

type ToastProps = {
  message: string | null;
};

const Toast = ({ message }: ToastProps) => {
  const [displayMessage, setDisplayMessage] = useState(message);

  const clearMessage = () => {
    setDisplayMessage(null);
  };

  useEffect(() => {
    if (displayMessage) {
      const timer = setTimeout(clearMessage, 3000);
      return () => clearTimeout(timer);
    }
  }, [displayMessage]);

  return (
    <AnimatePresence>
      {displayMessage && (
        <MotionBox
          pos="fixed"
          zIndex={10000000000}
          top="20px"
          left="0"
          right="0"
          display="flex"
          justifyContent="center"
          variants={toastVariant}
          initial="initial"
          animate="animate"
          exit="exit"
        >
          <Box
            maxW="300px"
            bg="primary"
            color="white"
            p="10px 30px"
            borderRadius="15px"
          >
            <Text textAlign={"center"}>{displayMessage}</Text>
          </Box>
        </MotionBox>
      )}
    </AnimatePresence>
  );
};

export default Toast;
