import { Box, Image, Text, Flex } from "@chakra-ui/react";
import {  MapPin } from "lucide-react";

interface EventCardProps {
  image: string;
  title: string;
  price: string;
  location: string;
  date: string;
}

const EventCard = ({ image, title, price, location, date }: EventCardProps) => {
  return (
    <Box
      className="admin-font"
         w="100%"
      maxW="300px"
      cursor="pointer"
      overflow="hidden"
    //   bg="white"
    //   boxShadow="lg"
      transition="0.25s"
      _hover={{ transform: "translateY(-6px)" }}
      borderRadius="12px"

    >
    <Box

      
    >
      <Image src={image} alt={title} h={"auto"} w="100%" objectFit="cover"
      borderRadius="12px"
      />
      
    </Box>
    <Box py="10px" px="6px">
                <Flex justify="space-between" mt="4px">
        <Text fontWeight="600" fontSize="14px">{title}</Text>
          <Text fontSize="12px">{price}</Text>

        </Flex>
        <Flex justify="space-between" mt="4px">
        <Text fontSize="11px" color="#7a7a7a" mt="2px" display={"flex"} flexDirection={"row"}>
            <MapPin size={14}/>
            {location}
            </Text>
          <Text fontSize="12px">{date}</Text>


        </Flex>

      </Box>
    </Box>
  );
};

export default EventCard;
