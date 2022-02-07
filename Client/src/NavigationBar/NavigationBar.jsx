import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HiMenuAlt3 } from "react-icons/hi";
import SideBar from "./SideBar";
import NavigationLink from "./NavigationLink";
import { useLocation } from "react-router-dom";

const NavigationBar = ({ scrollPosition, height }) => {
  const location = useLocation();
  const isHome = location.pathname === "/";

  const [isOpen, setIsOpen] = useState(false);

  const HomeClass = isHome
    ? `${scrollPosition > height / 2 ? "-top-20" : "top-0"}
  ${
    scrollPosition > height &&
    "top-0 bg-white/30 md:bg-white/30 backdrop-blur-md shadow-xl"
  }`
    : "top-0 bg-white/30 md:bg-white/30 backdrop-blur-md shadow-xl";

  return (
    <>
      <SideBar isOpen={isOpen} setIsOpen={setIsOpen} />
      <div className={`${isHome && "hidden"} pt-20`}></div>

      <nav
        className={`fixed left-0 right-0 z-20 transition-all duration-500 ease-out
    bg-gradient-to-b from-white to-transparent ${HomeClass} ${
          isOpen && "-top-24 md:top-0"
        }
    `}
      >
        <div className="flex flex-wrap justify-between items-center mx-auto py-3 md:py-5 md:px-4">
          <Link to="/" className="flex">
            <img className="h-10" src={"/assets/logo/accel-black.png"} alt="" />
          </Link>

          <div className="hidden w-full md:block md:w-auto ">
            <ul class="flex flex-col mt-4 md:flex-row lg:space-x-8 md:mt-0 md:text-sm md:font-medium">
              <li>
                <Link to={NavigationLink.PHOTOGRAPHY} className="nav-link">
                  PHOTOGRAPHY
                </Link>
              </li>
              <li>
                <Link to={NavigationLink.VIDEOGRAPHY} className="nav-link">
                  VIDEOGRAPHY
                </Link>
              </li>
              <li>
                <Link to={NavigationLink.GALLERY} className="nav-link">
                  GALLERY
                </Link>
              </li>
              <li>
                <Link to={NavigationLink.ABOUT} className="nav-link">
                  ABOUT
                </Link>
              </li>
              <li>
                <Link to={NavigationLink.CONTACT} className="nav-link">
                  GET IN TOUCH
                </Link>
              </li>
            </ul>
          </div>
          <div
            onClick={() => setIsOpen(!isOpen)}
            role="button"
            className="md:hidden px-4 py-4 text-xl "
          >
            <HiMenuAlt3 />
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavigationBar;
