import { categoriesData } from "@/utils/data";
import {
  Box,
  CollapsibleContent,
  CollapsibleRoot,
  CollapsibleTrigger,
  Flex,
  Image,
  Text,
} from "@chakra-ui/react";
import { AnimatePresence, motion } from "motion/react";

const MotionImage = motion.create(Image);

type LargeScreenType = {
  isOpen: number;
  setIsOpen: React.Dispatch<React.SetStateAction<number>>;
};

const LargeScreen = ({ isOpen, setIsOpen }: LargeScreenType) => {
  const handleOpen = (id: number) => {
    if (id === isOpen) return;
    setIsOpen(id);
  };

  return (
    <>
      <Flex direction={"column"} w={"48%"}>
        {categoriesData.map((each) => (
          <CollapsibleRoot
            key={each.id}
            defaultOpen={each.id === isOpen ? true : false}
            open={each.id === isOpen ? true : false}
            onOpenChange={() => handleOpen(each.id)}
            py={"20px"}
            borderBottom={
              each.id !== categoriesData.length ? "1px solid gray" : ""
            }
          >
            <CollapsibleTrigger cursor={"pointer"}>
              <Flex gap={"10px"} align={"center"}>
                <Box
                  bg={isOpen === each.id ? "primary" : "gray"}
                  w={"10px"}
                  h={"10px"}
                  borderRadius={"50%"}
                />
                <Text
                  className="vlarge-text"
                  fontWeight={"semibold"}
                  color={isOpen === each.id ? "primary" : "gray"}
                >
                  {each.head}
                </Text>
              </Flex>
            </CollapsibleTrigger>
            <CollapsibleContent px={"20px"}>
              <Text mt={"10px"} className="medium-text">
                {each.body}
              </Text>
            </CollapsibleContent>
          </CollapsibleRoot>
        ))}
      </Flex>
      <Box width={"48%"} h={"450px"} overflow="hidden" position="relative">
        <AnimatePresence>
          <MotionImage
            key={isOpen}
            src={categoriesData[isOpen - 1].image}
            w={"100%"}
            h={"100%"}
            borderRadius={"20px"}
            position="absolute"
            initial={{ y: "100%" }}
            animate={{
              y: "0%",
              transition: { delay: 0.1, duration: 0.6, ease: "easeInOut" },
            }}
            exit={{
              y: "-100%",
              transition: { duration: 0.6, ease: "easeInOut" },
            }}
            loading="lazy"
            alt={categoriesData[isOpen - 1].head}
          />
        </AnimatePresence>
      </Box>
    </>
  );
};

export default LargeScreen;
