import React from "react";
import Footer from "../components/LandingPage/Footer";
import Navbar from "../components/Navbar";
import logo from "../assets/favicon.ico";
import { Link, Navigate } from "react-router-dom";

const LoginPage = () => {
  return (
    <>
      <Navbar></Navbar>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img className="mx-auto w-16" src={logo} alt="Your Company" />
          <h2 className="mt-2 text-center text-xl leading-1 tracking-tighter font-bolder text-gray-900 uppercase font-Oswald">
            Your Account for <br /> everything nike
          </h2>
        </div>
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form></form>
          <p className="mt-4 text-center text-sm text-gray-500">
            Not a member?
            <Link
              to="/signup"
              className="font-semibold leading-6 text-blackunderline underline"
            >
              Join us
            </Link>
          </p>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default LoginPage;
