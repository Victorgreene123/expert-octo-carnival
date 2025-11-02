import AfterHero from "@/components/home/afterHero/AfterHero";
import Categories from "@/components/home/categories/Categories";
import Experience from "@/components/home/experience/Experience";
import Global from "@/components/home/global/Global";
import Hero from "@/components/home/hero/Hero";
import Join from "@/components/home/join/Join";
import NaijaWorld from "@/components/home/naijaworld/NaijaWorld";
import { Box } from "@chakra-ui/react";

const Home = () => {
  return (
    <Box>
      <Hero />
      <AfterHero />
      <Categories />
      <NaijaWorld />
      <Global />
      <Experience />
      <Join />
    </Box>
  );
};

export default Home;
