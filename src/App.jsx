import { useState } from "react";

import LandingPage from "./pages/LandingPage";
import ProductPage from "./pages/ProductPage";

import "./App.css";

function App() {
  const [showProductList, setShowProductList] = useState(false);

  return (
    <div className="app-container">
      {!showProductList ? (
        <LandingPage
          onGetStarted={() => setShowProductList(true)}
        />
      ) : (
        <ProductPage />
      )}
    </div>
  );
}

export default App;