import { categoriesData } from "@/utils/data";
import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { AnimatePresence, motion } from "motion/react";
import { useCallback, useRef, useState } from "react";

const MotionBox = motion.create(Box);

type SmallScreenType = {
  isOpen: number;
  setIsOpen: React.Dispatch<React.SetStateAction<number>>;
};

const SmallScreen = ({ isOpen, setIsOpen }: SmallScreenType) => {
  const [active, setActive] = useState(1);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const handleScroll = useCallback(() => {
    if (!scrollContainerRef.current) return;

    const container = scrollContainerRef.current;
    const scrollLeft = container.scrollLeft;
    const itemWidth = container.clientWidth;
    console.log(scrollLeft, itemWidth);

    const currentIndex = Math.round(scrollLeft / itemWidth);
    const newActive = currentIndex + 1;

    if (
      newActive !== active &&
      newActive <= categoriesData.length &&
      newActive >= 1
    ) {
      setActive(newActive);
      setIsOpen(newActive);
    }
  }, [active, setIsOpen]);

  const handleDotClick = (id: number) => {
    if (!scrollContainerRef.current) return;

    const container = scrollContainerRef.current;
    const itemWidth = container.clientWidth;
    const scrollPosition = (id - 1) * itemWidth;

    container.scrollTo({
      left: scrollPosition,
      behavior: "smooth",
    });

    setActive(id);
    setIsOpen(id);
  };

  return (
    <>
      <Flex direction={"column"} align={"center"} gap={"10px"}>
        <Flex
          ref={scrollContainerRef}
          className="scrollbody snaps"
          w={"100%"}
          maxW={"600px"}
          h={"450px"}
          overflowX={"auto"}
          onScroll={handleScroll}
        >
          {categoriesData.map((each) => (
            <Box key={each.id} w={"100%"} h={"100%"} flexShrink={0}>
              <Image
                w={"100%"}
                h={"100%"}
                objectFit={"cover"}
                borderRadius={"20px"}
                src={each.image}
                alt={each.head}
              />
            </Box>
          ))}
        </Flex>
        <Flex justifyContent={"center"} gap={"10px"}>
          {categoriesData.map((each) => (
            <Box
              key={each.id}
              onClick={() => handleDotClick(each.id)}
              width={"15px"}
              h={"15px"}
              borderRadius={"50%"}
              bg={active === each.id ? "secondary" : "gray"}
              transition={"background 0.3s ease"}
              _hover={{
                bg: active === each.id ? "secondary" : "gray.300",
              }}
              cursor={"pointer"}
            />
          ))}
        </Flex>
      </Flex>
      <AnimatePresence>
        <MotionBox
          key={isOpen}
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 0.15, duration: 0.1, ease: "easeInOut" },
          }}
          exit={{
            opacity: 0,
            transition: { duration: 0.1, ease: "easeInOut" },
          }}
        >
          <Text
            textAlign={"center"}
            className="vlarge-text"
            fontWeight={"semibold"}
            color={"primary"}
          >
            {categoriesData[isOpen - 1].head}
          </Text>
          <Text textAlign={"center"} mt={"10px"} className="medium-text">
            {categoriesData[isOpen - 1].body}
          </Text>
        </MotionBox>
      </AnimatePresence>
    </>
  );
};

export default SmallScreen;
