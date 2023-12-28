import React from "react";
import { BsSearch } from "react-icons/bs";
import { AiOutlineUser, AiOutlineShoppingCart } from "react-icons/ai";
import CartCountBadge from "./CartCountBadge";

const Navber = () => {
  return (
    <>
      <div className="container hidden lg:block top-0 sticky z-50 bg-white pt-4">
        <div className="flex justify-between items-start">
          <div>
            <a href="#">
              <img
                className="w-[15%] rounded-full"
                src="images/Logo.png"
                alt=""
              />
            </a>
          </div>
          <div className=" relative w-full max-w-[500px]">
            <input
              className="bg-[#f2f3f5] border-none outline-none px-6 py-3 rounded-[30px] w-full"
              type="text"
              placeholder="Seacrch Product..."
            />
            <BsSearch
              size={20}
              className="absolute top-0 right-0 mt-4 mr-5 text-gray-500"
            />
          </div>
          <div className="flex gap-4">
            <div className="icon_wrapper cursor-pointer ">
              <AiOutlineUser />
            </div>
            <div className="icon_wrapper relative cursor-pointer ">
              <AiOutlineShoppingCart />
              <CartCountBadge size="w-[25px] h-[25px]" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navber;
