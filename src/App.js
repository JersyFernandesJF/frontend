import React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Home from "./pages/Home";
import ProductOverviewPage from "./pages/ProductOverviewPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage></LandingPage>,
  },
  {
    path: "home",
    element: <Home></Home>,
  },
  {
    path: "/productOverview",
    element: <ProductOverviewPage></ProductOverviewPage>,
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
