import React from "react";
import { Link } from "react-router-dom";
import shoe1 from "../assets/shoe1.jpg";
import shoe2 from "../assets/shoe2.jpg";
import shoe3 from "../assets/shoe3.jpg";
import shoe4 from "../assets/shoe4.jpg";
import shoe5 from "../assets/shoe5.jpg";

const ProductList = () => {
  const shoeOptions = [
    { image: shoe5, name: "Air Max 270" },
    { image: shoe3, name: "Air Max 95" },
    { image: shoe1, name: "Air Max 97" },
    { image: shoe4, name: "Air Max Plus" },
    { image: shoe2, name: "Air Max 90" },
  ];

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-1 sm:py-4 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">Products</h2>
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 xl:gap-x-8">
          {shoeOptions.map((product, index) => (
            <Link to="/productOverview">
              <div className="">
                <img src={product.image} alt="" />
              </div>
              <h3 className="mt-4 text-sm text-gray-700 font-semibold">
                {product.name}
              </h3>
              <h3 className="mt-2 text-sm text-gray-700">Product Detail</h3>
              <h3 className="mt-2 text-sm text-gray-700">Product Color</h3>
              <p className="mt-2 text-sm text-gray-700 font-semibold">Cust</p>
              <p className="mt-2 text-sm text-gray-700 line-through">
                Discount
              </p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductList;
