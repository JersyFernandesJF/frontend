import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
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
  {
    path: "/login",
    element: <LoginPage></LoginPage>,
  },
  {
    path: "/signup",
    element: <SignUpPage></SignUpPage>,
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
