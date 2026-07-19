// src/pages/routes/PublicRoutes.jsx

import ProductPage from '../ProductPage'
import CartPage from '../CartPage'
import LandingPage from '../LandingPage'

const publicRoutes = [
  {path: '/',
    element: <LandingPage />
  },
  {
    path: '/products',
    element: <ProductPage />,
  },
  {
    path: '/cart',
    element: <CartPage />,
  },
]

export default publicRoutes