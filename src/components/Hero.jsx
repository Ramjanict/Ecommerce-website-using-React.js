import React from "react";
import { BsArrowRight } from "react-icons/bs";

const Hero = () => {
  return (
    <div>
      <div className="container pt-8">
        <div className="grid xl:grid-cols-3 xl:grid-rows-2 gap-8">
          <div className="relative xl:col-span-2 xl:row-span-full">
            <img
              className="w-full h-full object-cover rounded-lg"
              src="./src/images/hero__1.webp"
              alt=""
            />
            <div className="absolute max-w-[470px] top-1/2 ml-8 sm:ml-16 -translate-y-[50%] sm:space-y-4">
              <p className="text-2xl hidden sm:block">
                100% Original Dry Fruits
              </p>
              <h2 className="text-2xl sm:text-4xl md:text-6xl font-bold">
                Dried Fruits Best Healthy
              </h2>
              <p className="text-gray-500 text-xl pt-4 sm:pt-8">Starting At</p>
              <div className="font-medium text-red-600 text-2xl sm:text-4xl pb-4 sm:pb-8">
                $50.50
              </div>
              <div className="bg-accentsDark hover:bg-accents px-4 sm:px-6 py-2 sm:py-3 rounded-full items-center flex cursor-pointer w-fit gap-4  text-white text-sm ">
                Shop Now <BsArrowRight />
              </div>
            </div>
          </div>
          <div className="relative">
            <img
              className="w-full h-full object-cover rounded-lg"
              src="./src/images/hero__2.webp"
              alt=""
            />
            <div className="absolute max-w-[470px] top-1/2 ml-8 sm:ml-16 -translate-y-[50%] sm:space-y-4">
              <h2 className="text-2xl sm:text-4xl font-bold">
                Best Yummy Pizza
              </h2>
              <p className="text-gray-500 text-xl pt-4 ">Starting At</p>
              <div className="font-medium text-red-600 text-2xl sm:text-4xl pb-2">
                $25
              </div>
              <div className="bg-accents hover:bg-accentsDark px-4 sm:px-6 py-2 sm:py-3 rounded-full items-center flex cursor-pointer w-fit gap-4  text-white text-sm ">
                Shop Now <BsArrowRight />
              </div>
            </div>
          </div>
          <div className="relative">
            <img
              className="w-full h-full object-cover rounded-lg"
              src="./src/images/hero__3.webp"
              alt=""
            />
            <div className="absolute max-w-[470px] top-1/2 ml-8 sm:ml-16 -translate-y-[50%] sm:space-y-4">
              <h2 className="text-2xl sm:text-4xl font-bold">
                Best Yummy Chips
              </h2>
              <p className="text-gray-500 text-xl pt-4 ">Starting At</p>
              <div className="font-medium text-red-600 text-2xl sm:text-4xl pb-2">
                $12
              </div>
              <div className="bg-accents hover:bg-accentsDark px-4 sm:px-6 py-2 sm:py-3 rounded-full items-center flex cursor-pointer w-fit gap-4  text-white text-sm ">
                Shop Now <BsArrowRight />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
