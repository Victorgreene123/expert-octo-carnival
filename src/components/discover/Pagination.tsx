import { Flex, Text } from "@chakra-ui/react";

const Pagination = ({
  page,
  totalPages,
  onChange,
}: {
  page: number;
  totalPages: number;
  onChange: (page: number) => void;
}) => (
  <Flex justify="center" gap="12px" mt="40px">
    {Array.from({ length: totalPages }, (_, i) => (
      <Text
        key={i}
        onClick={() => onChange(i + 1)}
        cursor="pointer"
        fontWeight={page === i + 1 ? "700" : "400"}
        color={page === i + 1 ? "#FC9807" : "#a5a5a5"}
        transition="0.2s"
        _hover={{ color: "#FC9807" }}
      >
        {i + 1}
      </Text>
    ))}
  </Flex>
);

export default Pagination;
