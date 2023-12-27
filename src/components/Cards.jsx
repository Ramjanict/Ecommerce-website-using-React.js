import React from "react";

const Cards = ({ name, count, img }) => {
  return (
    <div className="border border-gray-200 hover:border-gray-300 hover:scale-105 transition-transform rounded-lg">
      <div className="flex p-6 justify-between items-center">
        <div>
          <h3 className="font-medium text-xl">{name}</h3>
          <p className="text-gray-500">{count}</p>
        </div>
        <img className="w-[100px]" src={img} alt="" />
      </div>
    </div>
  );
};

export default Cards;
