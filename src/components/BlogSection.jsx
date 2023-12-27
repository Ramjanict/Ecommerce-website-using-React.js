import React from "react";
import Blog from "./Blog";
const blogpost = [
  {
    img: "images/post__1.webp",
    title: "Healthy Food Healthy Life",
    date: "Aug 27, 2023",
    comment: 8,
  },
  {
    img: "images/post__2.webp",
    title: "Healthy Food Healthy Life",
    date: "Aug 25, 2023",
    comment: 1,
  },
  {
    img: "images/post__3.webp",
    title: "Healthy Food Healthy Life",
    date: "Aug 30, 2023",
    comment: 6,
  },
];
const BlogSection = () => {
  return (
    <div className="container pt-16">
      <h2 className="font-bold text-2xl ">Latest News</h2>
      <p className="text-gray-500">
        Present posts in a best way to highlight interesting moments of your
        blog.
      </p>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 pt-8">
        {blogpost.map((el) => (
          <Blog
            img={el.img}
            title={el.title}
            date={el.date}
            comment={el.comment}
          />
        ))}
      </div>
    </div>
  );
};

export default BlogSection;
