import Footer from "@/components/footer/Footer";
import Footer2 from "@/components/footer/Footer2";
import Navbar from "@/components/nav/Navbar";
import Navbar2 from "@/components/nav/Navbar2";
import { Box } from "@chakra-ui/react";
import { Outlet, useLocation } from "react-router-dom";

const Layout = () => {
  const location = useLocation();

  const isWebApp = ["/home" , "/discover"].includes(location.pathname )  ;

  return (
    <Box bg={isWebApp ? "#F8F8F8" : "white" }>
      {!isWebApp ? <Navbar /> : <Navbar2 />}
      <Box minH={"100vh"}>
        <Outlet />
      </Box>
      {!isWebApp ? <Footer /> : <Footer2 />}
    </Box>
  );
};

export default Layout;
