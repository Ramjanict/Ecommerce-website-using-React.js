import React from "react";
import {
  LiaShippingFastSolid,
  LiaMoneyBillWaveSolid,
  LiaPhoneVolumeSolid,
  LiaGiftSolid,
} from "react-icons/lia";

const Delivery = () => {
  return (
    <div className="container mt-4">
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 py-10">
        <div className="flex items-center  gap-4">
          <div className=" bg-accents text-white text-[28px] w-[50px] h-[50px] rounded-full grid place-items-center cursor-pointer">
            <LiaShippingFastSolid />
          </div>
          <h2>Free Shipping</h2>
        </div>
        <div className="flex items-center  gap-4">
          <div className=" bg-accents text-white text-[28px] w-[50px] h-[50px] rounded-full grid place-items-center cursor-pointer">
            <LiaMoneyBillWaveSolid />
          </div>
          <h2>Best Price Guarantee</h2>
        </div>
        <div className="flex items-center  gap-4">
          <div className=" bg-accents text-white text-[28px] w-[50px] h-[50px] rounded-full grid place-items-center cursor-pointer">
            <LiaPhoneVolumeSolid />
          </div>
          <h2>Free Curbside Pickup</h2>
        </div>
        <div className="flex items-center  gap-4">
          <div className=" bg-accents text-white text-[28px] w-[50px] h-[50px] rounded-full grid place-items-center cursor-pointer">
            <LiaGiftSolid />
          </div>
          <h2>Support 24/7</h2>
        </div>
      </div>
    </div>
  );
};

export default Delivery;
