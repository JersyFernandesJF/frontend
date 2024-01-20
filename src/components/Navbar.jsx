import React from "react";
import NikeLogo from "../assets/favicon.ico";
import search from "../assets/search.png";
import Bag from "../assets/bag.png";

const Navbar = () => {
  return (
    <nav>
      <div className="px-5 md:px-12 flex justify-between items-center">
        <img src={NikeLogo} alt="" />
        <div className="hidden lg:flex space-x-8">
          <h3>New & Featured</h3>
          <h3>Men</h3>
          <h3>Women</h3>
          <h3>Kid</h3>
          <h3>Sale</h3>
          <h3>SKRS</h3>
        </div>
        <div className="icon flex my-3 justify-around gap-5">
          <img src={search} className="w-7 h-7" alt="" />
          <input
            type="text"
            className="hidden md:block border-2 px-4 py-1 rounded-lg"
          />
          <img src={Bag} className="w-7 h-7" alt="" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
