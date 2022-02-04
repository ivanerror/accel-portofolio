import React, { useState } from "react";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";

const HomeCarousell = () => {
  const [carouselIndex, setCarouselIndex] = useState(0);

  return (
    <div>
      <img
        className="w-full h-screen object-cover"
        src="/assets/img/apple.jpg"
        alt=""
      />
      <ol className="absolute bottom-10 flex left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <li className="w-8 m-1 cursor-pointer box-content border-2 border-white/100"></li>
        <li className="w-8 m-1 cursor-pointer box-content border-2 border-white/50 hover:border-white/75"></li>
        <li className="w-8 m-1 cursor-pointer box-content border-2 border-white/50 hover:border-white/75"></li>
        <li className="w-8 m-1 cursor-pointer box-content border-2 border-white/50 hover:border-white/75"></li>
      </ol>
      <div className="absolute text-white text-lg drop-shadow-md left-10 rounded-full transition-colors ease-in duration-700 bg-transparent hover:bg-black p-3 top-1/2 -translate-y-1/2 cursor-pointer hover">
        <FiChevronLeft />
      </div>
      <div className="absolute text-white text-lg drop-shadow-md right-10 rounded-full transition-colors ease-in duration-700 bg-transparent hover:bg-black p-3 top-1/2 -translate-y-1/2 cursor-pointer hover">
        <FiChevronRight />
      </div>
    </div>
  );
};

export default HomeCarousell;
