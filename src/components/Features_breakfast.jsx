import React from "react";
import ProductCard from "./ProductCard";

const ramjan = [
  {
    id: 0,
    img: "images/product__5.webp",
    name: "Fresh Tomato",
    price: "$210",
  },
  {
    id: 1,
    img: "images/product__2.webp",
    name: "Crunchy Crisps",
    price: "$300",
  },
  {
    id: 2,
    img: "images/product__3.webp",
    name: "Jewel Cranberries",
    price: "$200",
  },
  {
    id: 3,
    img: "images/product__4.webp",
    name: "Almond organic",
    price: "$100",
  },
];

const Features_breakfast = () => {
  return (
    <div className="container pt-16">
      <div className="lg:flex justify-between items-center">
        <div>
          <h3 className="font-medium text-2xl">Breakfast & Dairy</h3>
          <p className="text-gray-600 mt-2">
            Buy best quality breakfast online from big-basket stop near you.
          </p>
        </div>
        <div className="space-x-4 mt-8 lg:mt-0">
          <button className="feature-btn">Eggs & Dairy</button>
          <button className="text-gray-600 hover:text-accents">Pizza</button>
          <button className="text-gray-600 hover:text-accents">Snacks </button>
        </div>
      </div>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 pt-8 gap-2">
        <div>
          <img
            className="w-full h-full object-cover"
            src="images/feature__2.webp"
            alt="banner"
          />
        </div>

        {ramjan.map((el) => (
          <ProductCard
            key={el.id}
            img={el.img}
            name={el.name}
            price={el.price}
          />
        ))}
      </div>
    </div>
  );
};

export default Features_breakfast;
