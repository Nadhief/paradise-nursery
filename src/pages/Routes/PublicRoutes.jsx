// src/pages/routes/PublicRoutes.jsx

import ProductPage from "../ProductPage/ProductList.jsx";
import CartPage from "../CartPage/CartItem.jsx";
import LandingPage from "../LandingPage";
import AboutUs from "../AboutUs/AboutUs.jsx";

const publicRoutes = [
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
