import React from "react";

const NavigationBar = () => {
  return (
    <nav className="bg-gradient-to-b from-white/70 to-transparent fixed left-0 right-0 top-0 z-10">
      <div className="flex flex-wrap justify-between items-center mx-auto py-4 px-4">
        <a href="" className="flex">
          <img className="h-10" src={"/assets/logo/accel-black.png"} alt="" />
        </a>

        <div className="hidden w-full md:block md:w-auto ">
          <ul class="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
            <li>
              <a href="" className="nav-link">
                PHOTOGRAPHY
              </a>
            </li>
            <li>
              <a href="" className="nav-link">
                VIDEOGRAPHY
              </a>
            </li>
            <li>
              <a href="" className="nav-link">
                GALLERY
              </a>
            </li>
            <li>
              <a href="" className="nav-link">
                ABOUT
              </a>
            </li>
            <li>
              <a href="" className="nav-link">
                GET IN TOUCH
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;
