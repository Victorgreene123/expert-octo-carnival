import Toast from "@/components/toast/Toast";
import useNewsLetter from "@/hooks/useNewsLetter";
import { Box, Button, Flex, Input, Text } from "@chakra-ui/react";
import { useState } from "react";

const JoinClique = () => {
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
      <Box w={"100%"} maxW={"1000px"} mx={"auto"} mt={"50px"}>
        <form onSubmit={onSubmit}>
          <Flex direction={{ base: "column", md: "row" }} gap={"20px"}>
            <Box flex={1}>
              <Input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                w={"100%"}
                h={{ base: "50px", md: "75px" }}
                borderLeftRadius={"50px"}
                borderRightRadius={{ base: "50px", md: "0" }}
                borderColor={"primary"}
                _focus={{
                  borderColor: "primary",
                  outline: "none",
                }}
                placeholder="Enter Email Address"
                className="medium-text"
                pl={"20px"}
                required={true}
                type="email"
              />
            </Box>
            <Button
              type="submit"
              h={{ base: "50px", md: "75px" }}
              px={"40px"}
              border={"1px solid red"}
              bg={"primary"}
              borderRightRadius={"50px"}
              borderLeftRadius={{ base: "50px", md: "0" }}
              loading={isLoading}
            >
              <Text className="medium-text">Be An Original Clique</Text>
            </Button>
          </Flex>
        </form>
      </Box>
    </>
  );
};

export default JoinClique;
