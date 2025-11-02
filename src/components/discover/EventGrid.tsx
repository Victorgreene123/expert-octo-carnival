import { Box } from "@chakra-ui/react";
import EventCard from "./card";
import Container2 from "../container/Container2";

const EventGrid = ({ events }: any) => {
  return (
    <Container2>
      <Box
        columnCount={{ base: 1, sm: 2, md: 3 }}
        columnGap="20px"
        px="20px"
        mt="50px"
      >
        {events.map((ev: any, index: number) => (
          <Box key={index} mb="20px"  breakInside="avoid">
            <EventCard {...ev} />
          </Box>
        ))}
      </Box>
    </Container2>
  );
};

export default EventGrid;
