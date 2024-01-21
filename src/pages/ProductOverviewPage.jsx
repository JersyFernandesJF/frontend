import React from "react";
import Navbar from "../components/Navbar";
import ProductOverview from "../components/ProductOverview";
import Footer from "../components/LandingPage/Footer";

const ProductOverviewPage = () => {
  return (
    <div>
      <Navbar></Navbar>
      <ProductOverview></ProductOverview>
      <Footer></Footer>
    </div>
  );
};

export default ProductOverviewPage;
