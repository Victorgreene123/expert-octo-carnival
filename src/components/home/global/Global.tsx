import Container from "@/components/container/Container";
import { slideLeftVariant, slideRightVariant } from "@/utils/FramerVariants";
import { Box, Flex, SimpleGrid, Text } from "@chakra-ui/react";
import { motion } from "motion/react";

const MotionBox = motion.create(Box);

const Global = () => {
  return (
    <Box py={{ base: "70px", md: "100px" }}>
      <Container>
        <Flex
          direction={{ base: "column", lg: "row" }}
          justifyContent={"space-between"}
          gap={{ base: "50px", lg: 0 }}
        >
          <MotionBox
            width={{ lg: "48%" }}
            variants={slideRightVariant}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.3 }}
          >
            <Text
              className="small-text"
              p={"2px 10px"}
              bg={"primary"}
              width={"max-content"}
              color={"white"}
              borderRadius={"10px"}
            >
              Global Connection
            </Text>
            <Text as={"h1"} fontWeight={"bold"} mt={"10px"}>
              Your plug to{" "}
              <Text as={"span"} color={"primary"}>
                connect back home
              </Text>
            </Text>
            <Text
              className="medium-text secondary-font"
              mt={"10px"}
              fontWeight={300}
            >
              Whether you're in Toronto planning your Detty December trip or in
              London missing that Lagos energy - we're your gateway to authentic
              African experiences.
            </Text>
            <Flex mt={"30px"} direction={"column"} gap={"15px"}>
              <Flex gap={"10px"} align={"center"}>
                <Box
                  w={"13px"}
                  h={"13px"}
                  borderRadius={"50%"}
                  bg={"primary"}
                />
                <Text>Owambe dance classes before your trip</Text>
              </Flex>
              <Flex gap={"10px"} align={"center"}>
                <Box
                  w={"13px"}
                  h={"13px"}
                  borderRadius={"50%"}
                  bg={"secondary"}
                />
                <Text>Street food crawls with local guides</Text>
              </Flex>
              <Flex gap={"10px"} align={"center"}>
                <Box
                  w={"13px"}
                  h={"13px"}
                  borderRadius={"50%"}
                  bg={"primary"}
                />
                <Text>Exclusive Detty December experiences</Text>
              </Flex>
            </Flex>
            <Text
              p={"8px 40px"}
              bg={"black"}
              borderRadius={"10px"}
              color={"white"}
              width={"max-content"}
              className="medium-text"
              mt={"30px"}
            >
              Pull up. Book it. ✨
            </Text>
          </MotionBox>
          <MotionBox
            width={{ lg: "48%" }}
            display={"flex"}
            alignItems={"center"}
            variants={slideLeftVariant}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.3 }}
          >
            <Box
              w={"100%"}
              p={"25px 30px"}
              borderRadius={"10px"}
              position="relative"
              _before={{
                content: '""',
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                borderRadius: "md",
                padding: "4px",
                background:
                  "linear-gradient(45deg, {colors.primary}, {colors.primary}, {colors.secondary}, {colors.secondary})",
                WebkitMask:
                  "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                WebkitMaskComposite: "xor",
                maskComposite: "exclude",
                zIndex: -1,
              }}
            >
              <Text
                fontWeight={"bold"}
                className="large-text"
                textAlign={"center"}
              >
                Live the Vibe
              </Text>
              <SimpleGrid columns={{ base: 1, md: 2 }} gap={"15px"} mt={"20px"}>
                <Flex
                  bg={"rgb(252,152,7,0.1)"}
                  borderRadius={"10px"}
                  direction={"column"}
                  p={"10px"}
                  gap={"5px"}
                  alignItems={"center"}
                >
                  <Text color={"primary"} fontWeight={"medium"}>
                    1M+
                  </Text>
                  <Text>Diaspora travelers</Text>
                </Flex>
                <Flex
                  bg={"rgb(40,53,130,0.1)"}
                  borderRadius={"10px"}
                  direction={"column"}
                  p={"10px"}
                  gap={"5px"}
                  alignItems={"center"}
                >
                  <Text color={"primary"} fontWeight={"medium"}>
                    50+
                  </Text>
                  <Text>Cities connected</Text>
                </Flex>
                <Flex
                  bg={"rgb(252,152,7,0.1)"}
                  borderRadius={"10px"}
                  direction={"column"}
                  p={"10px"}
                  gap={"5px"}
                  alignItems={"center"}
                >
                  <Text color={"primary"} fontWeight={"medium"}>
                    500+
                  </Text>
                  <Text>Unique experiences</Text>
                </Flex>
                <Flex
                  bg={"rgb(40,53,130,0.1)"}
                  borderRadius={"10px"}
                  direction={"column"}
                  p={"10px"}
                  gap={"5px"}
                  alignItems={"center"}
                >
                  <Text color={"primary"} fontWeight={"medium"}>
                    24/7
                  </Text>
                  <Text>Cultural vibes</Text>
                </Flex>
              </SimpleGrid>
            </Box>
          </MotionBox>
        </Flex>
      </Container>
    </Box>
  );
};

export default Global;
