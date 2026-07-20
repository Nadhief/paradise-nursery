// src/pages/routes/PublicRoutes.jsx

import ProductPage from "../ProductPage";
import CartPage from "../CartPage";
import LandingPage from "../LandingPage";
import AboutUs from "../AboutUs/AboutUs.jsx";

const publicRoutes = [
  { path: "/", element: <LandingPage /> },
  {
    path: "/products",
    element: <ProductPage />,
  },
  {
    path: "/cart",
    element: <CartPage />,
  },
  {
    path: "/aboutus",
    element: <AboutUs />,
  },
];

export default publicRoutes;
