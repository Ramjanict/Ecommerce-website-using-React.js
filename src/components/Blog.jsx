import React from "react";

const Blog = ({ img, title, date, comment }) => {
  return (
    <div className="space-y-4">
      <img
        className="rounded-lg hover:scale-105 transition-transform"
        src={img}
        alt={title}
      />
      <div className="text-accents font-medium">
        <span>{date}</span>
        <span>Comments{comment}</span>
      </div>
      <h3 className="text-xl font-bold">{title}</h3>
    </div>
  );
};

export default Blog;
