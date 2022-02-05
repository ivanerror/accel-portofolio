import React, { useDebugValue } from "react";

const PolaroidPhoto = () => {
  return (
    <div className="container md:mt-10 lg:w-2/3 mx-auto relative">
      <div className="md:rounded-2xl md:px-10 md:py-16 md:hover:shadow-xl  transition-shadow duration-500 ease-in">
        <img
          src="/assets/img/ice.jpg"
          alt=""
          className="object-cover md:rounded-2xl w-full h-polaroid"
        />
        <div className="flex flex-col items-center mt-4 md:mt-8 px-4">
          <h5 className="font-Lustria cursor-pointer uppercase text-sm font-bold mb-4 font-extrabold">
            <span className="hover:border-black hover:border-b transition-all duration-500 ease-in ">
              PHOTOGRAPHY :
            </span>
            <span className="hover:border-black hover:border-b transition-all duration-500 ease-in ml-1">
              LANDSCAPE
            </span>
          </h5>
          <h4 className="font-Lustria text-2xl leading-none font-extrabold uppercase">
            Winter Alfheim
          </h4>
          <p className="text-gray-500 font-Raleway uppercase text-xs font-light text-center mb-4">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          </p>
          <p className="hidden md:block text-gray-800 font-Raleway uppercase text-xs font-bold text-center w-2/3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit natus
            totam quod omnis est molestiae quidem incidunt suscipit deserunt
            quasi odio, non assumenda vero necessitatibus blanditiis asperiores
            eius, quisquam pariatur!
          </p>
          <div className="hidden md:block relative w-100 whitespace-nowrap group mt-4">
            <div className="w-10 h-1 mt-3 absolute left-0 -translate-x-1/2 -translate-y-1/2 bg-clip-padding cursor-pointer box-content border-y-8 border-transparent rounded-lg bg-slate-300 transition transform group-hover:rotate-180 group-hover:opacity-0 group-hover:-translate-x-32 motion-reduce:transition-none motion-reduce:transform-none duration-1000 ease-out"></div>
            <h4 className="cursor-pointer opacity-0 group-hover:opacity-100 font-Lustria absolute left-20 group-hover:left-0 -translate-x-1/2  text-gray-600 text-xl leading-none font-bold uppercase transition-all duration-500 ease-out">
              Read Story
            </h4>
          </div>
        </div>
      </div>
      <div className="absolute right-20 bottom-32 text-center hidden lg:block">
        <h4 className="font-Lustria text-3xl leading-none font-extrabold uppercase">
          17
        </h4>
        <p className="text-gray-500 font-Raleway uppercase text-xs font-light text-center">
          Aug <span className="font-Lustria">'45</span>
        </p>
      </div>
    </div>
  );
};

export default PolaroidPhoto;
