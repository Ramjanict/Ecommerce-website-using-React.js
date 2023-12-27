import { LuMailOpen } from "react-icons/lu";
const NewsLatter = () => {
  return (
    <div className="bg-accentsDark mt-16">
      <div className="container py-8 flex flex-col md:flex-row justify-between items-center gap-4 text-white">
        <div className="flex items-center gap-4 flex-shrink-0">
          <LuMailOpen className="text-[60px]" />
          <div>
            <h3 className="text-xl sm:2xl: font-semibold">
              Sign up To Our Newsletters
            </h3>
            <p>...and receive $20 coupon for first shopping</p>
          </div>
        </div>
        <div className=" w-full max-w-[500px] relative">
          <input
            className=" w-full py-4 px-6 rounded-full"
            type="text"
            placeholder="Enter your Email..."
          />
          <button className="absolute translate-y-[-50%] py-2 px-4 bg-accentsDark hover:bg-accents top-[50%] right-2 rounded-full">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewsLatter;
