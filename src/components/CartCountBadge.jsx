import React from "react";

const CartCountBadge = ({ size }) => {
  return (
    <div
      className={`absolute bg-red-600 text-white text-[14px] -top-1 -right-3 rounded-full grid place-content-center ${size}`}
    >
      3
    </div>
  );
};

export default CartCountBadge;
