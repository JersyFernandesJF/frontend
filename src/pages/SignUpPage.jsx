import React from "react";
import Footer from "../components/LandingPage/Footer";
import Navbar from "../components/Navbar";
import logo from "../assets/favicon.ico";
import { useForm } from "react-hook-form";
import { Link, Navigate } from "react-router-dom";

const SignUpPage = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  return (
    <>
      <Navbar></Navbar>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img className="mx-auto w-16" src={logo} alt="Your Company" />
          <h2 className="mt-2 text-center text-2xl leading-9 tracking-tighter font-bolder text-gray-900 uppercase font-Oswald">
            Become a nike member
          </h2>
          <p className="text-sm tracking-wider text-center opacity-75 leading-5 my-4">
            Create your Nike Member profile and get first access to the very
            best of Nike products, inspiration and community.
          </p>
        </div>
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" noValidate>
            <div>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  {...register("email", {
                    required: "Email required",
                    pattern: {
                      value: /\b[\w\.-]+@[\w\.-]+\.\w{2,4}\b/gi,
                      message: "Email is not valid",
                    },
                  })}
                  autoComplete="email"
                  placeholder="Email address"
                  required
                  className="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between"></div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  {...register("password", {
                    required: "Password required",
                    pattern: {
                      value:
                        /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm,
                      message: `- at least 8 characters
                      - must contain at least 1 uppercase letter, 1 lowercase letter, and 1 number
                      - Can contain special characters`,
                    },
                  })}
                  placeholder="Password"
                  autoComplete="current-password"
                  required
                  className="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between"></div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  {...register("confirmPassword", {
                    required: "Confirm password is required",
                    validate: (value, formsValues) =>
                      value === formsValues.password || "password not matching",
                  })}
                  autoComplete="current-password"
                  placeholder="Confirm Password"
                  required
                  className="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="mt-2">
              <input
                name="First name"
                type="text"
                autoComplete="email"
                {...register("firstName", {
                  required: "First name is required",
                })}
                placeholder="First Name"
                required
                className="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6"
              />
            </div>
            <div>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="text"
                  {...register("lastName", {
                    required: "Last name is required",
                  })}
                  autoComplete="email"
                  placeholder="Last Name"
                  required
                  className="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <div className="mt-2">
                <input
                  type="date"
                  autoComplete="email"
                  placeholder="Date Of Birth"
                  {...register("dateOfBirth", {
                    required: "Date of birth is required",
                  })}
                  required
                  className="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <p className="text-xs tracking-wider text-center opacity-75">
              By creating an account, you agree to Nike's{" "}
              <span className="underline">Privacy Policy</span> and
              <span className="underline">Terms of Use</span>.
            </p>
            <div>
              <button
                type="submit"
                className="flex uppercase font-Oswald tracking-tighter w-full justify-center rounded-sm bg-black px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Join us
              </button>
            </div>
          </form>
          <p className="mt-4 text-center text-sm text-gray-500">
            Already a member?
            <Link
              to="/login"
              href="#"
              className="font-semibold leading-6 text-blackunderline underline"
            >
              Login
            </Link>
          </p>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default SignUpPage;
