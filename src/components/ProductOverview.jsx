import React, { useEffect } from "react";
import { useState } from "react";
import { RadioGroup } from "@headlessui/react";
import shoe1 from "../assets/shoe1.jpg";
import shoe2 from "../assets/shoe2.jpg";
import shoe3 from "../assets/shoe3.jpg";
import shoe4 from "../assets/shoe4.jpg";
import shoe5 from "../assets/shoe5.jpg";
import upArrow from "../assets/up-arrow.png";
import downArrow from "../assets/down-arrow.png";
import outlineHeart from "../assets/outline-heart.png";
import filledHeart from "../assets/filled-heart.png";
import { StarIcon } from "@heroicons/react/20/solid";

const ProductOverview = () => {
  const [showDeliveryReturn, setShowDeliveryReturn] = useState(false);
  const [showReview, setShowReview] = useState(false);
  const [showProductInfo, setShowProductInfo] = useState(false);
  const shoeOptions = [
    { image: shoe5, name: "Air Max 270" },
    { image: shoe3, name: "Air Max 95" },
    { image: shoe1, name: "Air Max 97" },
    { image: shoe4, name: "Air Max Plus" },
    { image: shoe2, name: "Air Max 90" },
  ];

  return (
    <>
      <div className="px-5 md:px-12 w-full">
        <div className="wide md:flex md:px-4">
          <div className="viewImage md:flex md:w-4/6 hidden items-center justify-around h-fit">
            <div className="wide-first h-fit">
              {shoeOptions.map((image) => (
                <div className="border-2 hover:border-gray-400 my-2 transition-all duration-300 cursor-pointer rounded-lg p-3 md:w-fit">
                  <img src={image.image} className="w-[3vw]" />
                </div>
              ))}
            </div>
            <div className="wide-second h-fit">
              <div>
                <img src={shoe1} className="h-[80vh] w-[35vw]" alt="" />
              </div>
            </div>
          </div>
          <div className="wide-third md:overflow-y-auto md:w-2/6 md:px-4">
            <div className="first">
              <h1 className="text-lg font-Oswald">title</h1>
              <p>Gender:gender</p>
              <p>Kids:kids</p>
              <p className="mt-2 text-sm text-gray-700 font-semibold ">
                MRP : indiaCurrency product.discountPrice
              </p>
              <p className="cursor-pointer opacity-50">
                incl. of taxes <br /> (Also includes all applicable duties)
              </p>
              <div className="md:hidden scroll-container scroll-smooth flex flex-row overflow-x-auto">
                <div className="mx-2 text-left">
                  <img src={shoe1} className="max-w-[90vw]" />
                </div>
              </div>
              <div className="second-colors my-8">
                <h3 className="text-sm font-medium text-gray-900 my-4">
                  Color
                </h3>
                <div className="flex space-x-4">
                  <div className="w-5 h-5 rounded-full cursor-pointer border-2 border-yellow-500 p-1 bg-orange-400"></div>
                </div>
              </div>
              <div className="second mb-10">
                <div className="mt-10">
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm font-medium text-gray-900">Size</h3>
                    <p
                      href="#"
                      className="text-sm font-medium opacity-80 text-black hover:opacity-100 cursor-pointer"
                    >
                      Size guide
                    </p>
                  </div>
                  <RadioGroup className="mt-4">
                    <RadioGroup.Label className="sr-only">
                      Choose a sizer
                    </RadioGroup.Label>
                    <div className="grid grid-cols-4 sm:grid-cols-8 lg:grid-cols-4">
                      <RadioGroup.Option className="group relative flex items-center justify-center rounded-md border py-3 px-4 text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6 cursor-pointer bg-white text-gray-900 shadow-sm">
                        <>
                          <RadioGroup.Label as="span">13</RadioGroup.Label>
                          <span
                            aria-hidden="true"
                            className="pointer-events-none absolute -inset-px rounded-md border-2 border-gray-200"
                          >
                            <svg
                              className="absolute inset-0 h-full w-full stroke-2 text-gray-200"
                              viewBox="0 0 100 100"
                              preserveAspectRatio="none"
                              stroke="currentColor"
                            >
                              <line
                                x1={0}
                                y1={100}
                                x2={100}
                                y2={0}
                                vectorEffect="non-scaling-stroke"
                              />
                            </svg>
                          </span>
                        </>
                      </RadioGroup.Option>
                    </div>
                  </RadioGroup>
                </div>
              </div>
              <div className="third my-2 space-y-4">
                <button className="w-full bg-black text-white py-4 rounded-full hover:opacity-90">
                  Add to Bag
                </button>
                <button className="w-full flex items-center justify-center border-2 border-black border-opacity-30 hover:border-opacity-100 py-4 rounded-full">
                  <p className="mr-1">Favourite</p>
                  <img src={outlineHeart} className="w-4" alt="" />
                </button>
              </div>
              <div className="fourth my-3 mt-7">
                <p>product.detail</p>
                <div className="highlights space-y-2 my-4">
                  <h1 className="font-bold">Highlights</h1>
                  <li>product.highlights[0]</li>
                  <li>product.highlights[1]</li>
                  <li>product.highlights[2]</li>
                  <li>product.highlights[3]</li>
                </div>
                <div className="fourth-inside ">
                  <div className="deliveryReturn my-5">
                    <div className="flex justify-between items-center my-5">
                      <h2 className="font-Oswald text-xl">
                        Delivery & Returns
                      </h2>
                      <img
                        src={showDeliveryReturn ? upArrow : downArrow}
                        className="w-4 h-4"
                        alt=""
                      />
                    </div>
                    <div
                      className={`${
                        showDeliveryReturn ? "block" : "hidden"
                      } space-y-4 `}
                    >
                      <p>All purchases are subject to delivery fees.</p>
                      <li>Standard delivery 4–9 business days</li>
                      <p>
                        Orders are processed and delivered Monday–Friday
                        (excluding public holidays)
                      </p>
                      <p>Nike Members enjoy free returns.</p>
                    </div>
                  </div>
                  <div className="reviews my-5">
                    <div
                      className="flex justify-between items-center my-5 "
                      onClick={() => setShowReview((showReview) => !showReview)}
                    >
                      <h2 className="font-Oswald text-xl">Reviews(2)</h2>
                      <div className="">
                        <div className="">
                          <h3 className="sr-only">Reviews</h3>
                          <div className="flex items-center">
                            <div className="flex items-center">
                              {[0, 1, 2, 3, 4].map((rating) => (
                                <StarIcon
                                  key={rating}
                                  className="text-gray-900 h-5 w-5 flex-shrink-0"
                                  aria-hidden="true"
                                />
                              ))}
                            </div>
                            <p className="sr-only">
                              reviews.average out of 5 stars
                            </p>
                          </div>
                        </div>
                      </div>
                      <img
                        src={showReview ? upArrow : downArrow}
                        className="w-4 h-4"
                        alt=""
                      />
                    </div>
                    <div
                      className={`${
                        showReview ? "block" : "hidden"
                      } space-y-4 `}
                    >
                      <p className="underline cursor-pointer">Write a review</p>
                      <div className="review">
                        <div className="review-first">
                          <div className="mt-6">
                            <h3 className="sr-only">Reviews</h3>
                            <div className="flex items-center">
                              <div className="flex items-center">
                                {[0, 1, 2, 3, 4].map((rating) => (
                                  <StarIcon
                                    key={rating}
                                    className="text-gray-900 h-5 w-5 flex-shrink-0"
                                    aria-hidden="true"
                                  />
                                ))}
                              </div>
                              <p className="sr-only">
                                reviews.average out of 5 stars
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="review-second">
                          <p>
                            They’re really pretty!! The bottom is plastic, and
                            the color is way brighter then what is on the
                            picture almost like a neon orangy color. But I have
                            a some what wide so go a size up. (I’m 4’11 and I
                            got a size 5 and was a bit tight so I got a 5.5)
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="productInfo my-5">
                    <div className="flex justify-between items-center my-5">
                      <h2 className="font-Oswald text-xl">
                        Product Information
                      </h2>
                      <img
                        src={showProductInfo ? upArrow : downArrow}
                        className="w-4 h-4"
                        alt=""
                      />
                    </div>
                    <div
                      className={`${
                        showProductInfo ? "block" : "hidden"
                      } space-y-4`}
                    >
                      <p>Declaration of Importer: product.declaration</p>
                      <p>Marketed by: .marketedBy</p>
                      <p>Origin: product.origin</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default ProductOverview;
