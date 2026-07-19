// src/App.jsx

import { Route, Routes } from "react-router-dom";

import { PublicLayout, PrivateLayout } from "./core/layouts";

import LandingPage from "./pages/LandingPage";

import {publicRoutes} from "./pages/Routes/index"

function App() {
  return (
    <Routes>
      {/* Landing Page */}
      <Route element={<PublicLayout />}>
        {publicRoutes.map((route) => (
          <Route key={route.path} path={route.path} element={route.element} />
        ))}
      </Route>

      {/* <Route element={<PrivateLayout />}>
        {privateRoutes.map((route) => (
          <Route key={route.path} path={route.path} element={route.element} />
        ))}
      </Route> */}
    </Routes>
  );
}

export default App;
