import { Box, Flex, useBreakpointValue } from "@chakra-ui/react";
import Container from "@/components/container/Container";
import SmallScreen from "./SmallScreen";
import LargeScreen from "./LargeScreen";
import { useState } from "react";

const Categories = () => {
  const smallScreen = useBreakpointValue({ base: true, lg: false });
  const [isOpen, setIsOpen] = useState(1);

  return (
    <Box pb={"100px"}>
      <Container>
        <Flex
          direction={{ base: "column", lg: "row" }}
          justifyContent={"space-between"}
          alignItems={{ lg: "center" }}
          gap={{ base: "30px", lg: 0 }}
        >
          {smallScreen ? (
            <SmallScreen isOpen={isOpen} setIsOpen={setIsOpen} />
          ) : (
            <LargeScreen isOpen={isOpen} setIsOpen={setIsOpen} />
          )}
        </Flex>
      </Container>
    </Box>
  );
};

export default Categories;
