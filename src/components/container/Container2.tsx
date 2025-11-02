import { Box, type BoxProps } from "@chakra-ui/react";

const Container2 = ({ children, ...rest }: BoxProps) => {
  return (
    <Box width={"100%"} maxW={"1440px"} mx={"auto"} px={"20px"}  {...rest}>
      {children}
    </Box>
  );
};

export default Container2;
