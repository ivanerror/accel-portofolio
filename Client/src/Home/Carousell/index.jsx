import React, { useState, useEffect } from "react";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { useSwipeable } from "react-swipeable";
import useInterval from "use-interval";

const HomeCarousell = ({ data }) => {
  const [carouselIndex, setCarouselIndex] = useState(0);
  const swipeable = useSwipeable({
    trackMouse: true,
    onSwipedRight: () => handlePrevButton(),
    onSwipedLeft: () => handleNextButton(),
  });

  useInterval(() => handleNextButton(), 5000);
  //   if carouselIndex is in last index, set it to 0
  const handleNextButton = () => {
    if (carouselIndex === data.length - 1) {
      setCarouselIndex(0);
    } else {
      setCarouselIndex(carouselIndex + 1);
    }
  };

  //   if carouselIndex is in first index, set it to last index
  const handlePrevButton = () => {
    if (carouselIndex === 0) {
      setCarouselIndex(data.length - 1);
    } else {
      setCarouselIndex(carouselIndex - 1);
    }
  };

  // setInterval(handleNextButton, 5000);

  return (
    <div {...swipeable}>
      <div className="w-full h-screen relative">
        {data.map((item, index) => (
          <div
            key={index}
            className={
              index === carouselIndex
                ? "opacity-100 transition-opacity duration-1000"
                : "opacity-0 transition-opacity duration-1000 ease-in"
            }
          >
            {/* {index === carouselIndex && ( */}
            <img
              className="w-full h-screen object-cover absolute top-0"
              src={`/assets/img/${item}`}
              alt=""
            />
            {/* )} */}
          </div>
        ))}

        <button
          onClick={handlePrevButton}
          className="absolute text-white text-lg drop-shadow-md left-10 rounded-full transition-colors ease-in duration-700 bg-transparent hover:bg-black p-3 top-1/2 -translate-y-1/2 cursor-pointer outline-none"
        >
          <FiChevronLeft />
        </button>
        <button
          onClick={handleNextButton}
          className="absolute text-white text-lg drop-shadow-md right-10 rounded-full transition-colors ease-in duration-700 bg-transparent hover:bg-black p-3 top-1/2 -translate-y-1/2 cursor-pointer outline-none"
        >
          <FiChevronRight />
        </button>
        <div className="bg-gradient-to-t from-black/80 to-black/0  absolute bottom-0 text-white w-full flex flex-col items-center pb-10 pt-20 px-4 mx-auto">
          <h4 className="text-xl font-bold text-center font-Lustria">
            This is Title
          </h4>
          <p className="text-center font-Raleway">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique,
            iste!
          </p>
        </div>
        <ol className="absolute bottom-0 flex left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          {data.map((item, index) => (
            <li
              key={index}
              className={`md:w-8 w-3 h-1 bg-clip-padding cursor-pointer box-content border-8 border-transparent rounded-lg transition-colors duration-300  ${
                carouselIndex === index
                  ? `bg-white/100`
                  : `hover:bg-white/75 bg-white/50`
              }`}
              onClick={() => setCarouselIndex(index)}
            ></li>
          ))}
        </ol>
      </div>
    </div>
  );
};
// defaultProps Home Carousel
HomeCarousell.defaultProps = {
  data: ["apple.jpg", "sunset.jpg", "mount.jpg", "mount2.jpg"],
};

export default HomeCarousell;
