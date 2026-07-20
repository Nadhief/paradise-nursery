// src/App.jsx

import { Link, Route, Routes } from "react-router-dom";

import { PublicLayout } from "./core/layouts";
import { publicRoutes } from "./pages/Routes";

import "./pages/LandingPage/LandingPage.css";

function App() {
  const landingPage = (
    <section className="landing-page">
      <div className="container">
        <div className="landing-page__content">
          <h1 className="landing-page__title">Paradise Nursery</h1>

          <p className="landing-page__description">
            Bring nature closer to your everyday life with our carefully
            selected collection of beautiful, healthy houseplants. Whether
            you're a beginner or an experienced plant lover, Paradise Nursery
            has the perfect plants to brighten your home.
          </p>

          <Link to="/products" className="landing-page__button">
            Get Started
          </Link>
        </div>
      </div>
    </section>
  );

  return (
    <Routes>
      <Route path="/" element={landingPage} />

      <Route element={<PublicLayout />}>
        {publicRoutes.map((route) => (
          <Route key={route.path} path={route.path} element={route.element} />
        ))}
      </Route>
    </Routes>
  );
}

export default App;
