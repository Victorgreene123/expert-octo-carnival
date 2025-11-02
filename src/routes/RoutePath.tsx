import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../pages/Home";
import Layout from "../rootLyaout/Layout";
import HomeApp from "@/pages/webapp/Home";
import DiscoverPage from "@/pages/webapp/Discover";

const routes = [
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },

      
      {
        path: "/home",
        element: <HomeApp />,
      },
      {
        path: "/discover",
        element: <DiscoverPage />
      }
    ],
  },
];

const RoutePath = () => {
  const router = createBrowserRouter(routes);

  return <RouterProvider router={router} />;
};

export default RoutePath;
