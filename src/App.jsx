import React from "react";
import Navber from "./components/Navber";
import Hero from "./components/Hero";
import Category from "./components/Category";
import Features from "./components/Features";
import Features_breakfast from "./components/Features_breakfast";
import BannerSection from "./components/BannerSection";
import BlogSection from "./components/BlogSection";
import NewsLatter from "./components/NewsLatter";
import Delivery from "./components/Delivery";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <Navber />
      <Hero />
      <Category />
      <Features />
      <Features_breakfast />
      <BannerSection />
      <BlogSection />
      <NewsLatter />
      <Delivery />
      <Footer />
    </div>
  );
};

export default App;
