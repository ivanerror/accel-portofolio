import React from "react";
import { IoIosArrowForward } from "react-icons/io";

const Footer = () => {
  return (
    <div>
      <hr className="h-6 br-footer my-10" />
      <div className="container mx-auto mb-6 px-20 md:px-44">
        <div className="grid md:grid-cols-3 gap-10">
          <div className="cols-start-1">
            <h4 className="font-Lustria text-xl">GET IN TOUCH</h4>
            <p className="font-Lustria text-xs">(by appointment only)</p>
            <p className="font-Lustria text-xs">ivangabriel68@gmail.com</p>
            <p className="font-Lustria text-xs">Phone / fax</p>
            <p className="font-Lustria text-xs">Ivan (+62) 82213471166</p>
          </div>
          <div className="hidden md:block"></div>
          <div className="cols-start-1 relative">
            <h4 className="font-Lustria text-xl">ABOUT</h4>
            <p className="font-Lustria text-xs">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet,
              inventore impedit! Molestias, ipsam fuga iusto id ea sequi
              mollitia quae natus dicta minima sit? Cumque vero perferendis
              tenetur voluptatum ratione.
            </p>
            <div className="flex group cursor-pointer">
              <h4 className="font-Lustria text-md">READ MORE</h4>
              <IoIosArrowForward className="mt-1 opacity-0 group-hover:opacity-100 group-hover:ml-4 transition-all  duration-500 ease-out" />
            </div>
          </div>
        </div>
        <p className="font-Lustria uppercase text-center text-xs mt-10 md:mt-32">
          © GABRIEL IVAN SETYAPUTRA
        </p>
      </div>
    </div>
  );
};

export default Footer;
