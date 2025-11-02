import { Flex, Text } from "@chakra-ui/react";

const categories = [
  "All", "Arts & Culture", "Nightlife", "Food & Chill", "Gaming",
  "Music", "Cinema", "Tech Conference", "Beach"
];

const CategoryTabs = ({
  selected,
  onSelect,
}: {
  selected: string;
  onSelect: (cat: string) => void;
}) => {
  return (
    
    <Flex gap="40px" flexWrap="wrap" justify="center" mt="20px">
      {categories.map((cat) => (
        <Text
          key={cat}
          cursor="pointer"
          fontSize="13px"
          fontWeight={cat === selected ? "600" : "300"}
          color={cat === selected ? "#FC9807" : "#A3A3A3"}
          transition="0.2s"
          _hover={{ color: "#FC9807" }}
          onClick={() => onSelect(cat)}
        >
          {cat}
        </Text>
      ))}
    </Flex>
  );
};

export default CategoryTabs;
