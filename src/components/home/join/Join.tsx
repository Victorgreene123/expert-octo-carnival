import Container from "@/components/container/Container";
import ThemedText from "@/components/ThemedText";
import Toast from "@/components/toast/Toast";
import useNewsLetter from "@/hooks/useNewsLetter";
import { cardVariant, textVariant } from "@/utils/FramerVariants";
import { Box, Button, Input, Text } from "@chakra-ui/react";
import { motion } from "motion/react";
import { useState } from "react";

const MotionText = motion.create(Text);
const MotionBox = motion.create(Box);

const Join = () => {
  const { beOriginal, isLoading, error, success } = useNewsLetter();
  const [email, setEmail] = useState("");

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    beOriginal(email);
  };

  return (
    <>
      {error && <Toast message={error} />}
      {success && <Toast message={success} />}
      <Box
        bgGradient={"to-r"}
        gradientFrom={"primary"}
        gradientTo={"secondary"}
        py={{ base: "70px", md: "100px" }}
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
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
            Ready to be an Original Clique?
          </MotionText>
          <ThemedText mt={"10px"}>
            Join the movement. Connect with your roots. Experience Africa like
            never before.
          </ThemedText>
          <form onSubmit={onSubmit}>
            <MotionBox
              mt={"30px"}
              w="100%"
              maxW="400px"
              mx={"auto"}
              p={"30px"}
              borderRadius={"20px"}
              boxShadow="lg"
              bg="rgba(255, 255, 255, 0.3)"
              backdropFilter="blur(12px)"
              variants={cardVariant}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, amount: 0.3 }}
            >
              <Input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                bg={"white"}
                h={"50px"}
                borderRadius={"20px"}
                placeholder="Enter Email Address"
                textAlign={"center"}
                color={"black"}
                required={true}
                type="email"
              />
              <Button
                type="submit"
                mt={"20px"}
                w={"100%"}
                h={"50px"}
                borderRadius={"20px"}
                loading={isLoading}
              >
                Be an Original Clique ✨
              </Button>
            </MotionBox>
          </form>
        </Container>
      </Box>
    </>
  );
};

export default Join;
