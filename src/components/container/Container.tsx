import { Box, type BoxProps } from "@chakra-ui/react";

const Container = ({ children, ...rest }: BoxProps) => {
  return (
    <Box
      width={"100%"}
      maxW={"1440px"}
      mx={"auto"}
      px={{
        base: "20px",
        sm: "35px",
        md: "50px",
        lg: "75px",
        xl: "100px",
      }}
      {...rest}
    >
      {children}
    </Box>
  );
};

export default Container;
