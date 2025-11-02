import CategoryTabs from "@/components/discover/categoriesTab";
import EventGrid from "@/components/discover/EventGrid";
import Pagination from "@/components/discover/Pagination";
import { Box, Text } from "@chakra-ui/react";
import { useState } from "react";
import event from '../../assets/event2.jpg'
import event2 from '../../assets/event3.jpg'
import Container2 from "@/components/container/Container2";

const mockEvents = Array.from({ length: 12 }).map(() => ({
  image: Math.random() > 0.5 ? event : event2,
  title: "Dinner Hangout",
  price: "NGN 10,000",
  location: "Hilton Restaurant, Lagos",
  date: "Aug 18, 2025",
}));

const DiscoverPage = () => {
  const [selected, setSelected] = useState("All");
  const [page, setPage] = useState(1);

  return (
    <Box py="6px" px="20px" maxW="1200px" mx="auto"
    className="admin-font"
    // bg={""}
    >
       <Container2> 
<Text
  textAlign="center"
  fontWeight="400"
  fontSize="32px"
  mb="20px"
  color="#000000"
>
  Discover The{" "}
  <Text as="span" color="#FC9807">
    Vibes
  </Text>{" "}
  Just For You
</Text>


      <CategoryTabs selected={selected} onSelect={setSelected} />
      <EventGrid events={mockEvents} />
      <Pagination page={page} totalPages={3} onChange={setPage} />
      </Container2>
    </Box>
  );
};

export default DiscoverPage;
