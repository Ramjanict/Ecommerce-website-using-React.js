import React from "react";
import { AiFillStar, AiOutlineStar, AiOutlineShopping } from "react-icons/ai";

const ProductCard = ({ img, name, price }) => {
  return (
    <div className="border border-gray-200 hover:border-gray-300 hover:scale-105 transition-transform rounded-lg ">
      <img src={img} alt="{name}" />
      <div className="relative p-4 space-y-2">
        <div className="flex text-yellow-400 gap-[2px] text-[20px]">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiOutlineStar />
        </div>
        <h3 className="font-medium">{name}</h3>
        <h3 className="font-medium text-2xl text-red-600">{price}</h3>
        <div className="absolute -top-4 right-2 bg-accents text-white text-[28px] w-[50px] h-[50px] rounded-full grid place-items-center cursor-pointer">
          <AiOutlineShopping />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
