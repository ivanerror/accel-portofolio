import React, { useEffect } from "react";
import { FiArrowRight } from "react-icons/fi";
import { HiBackspace } from "react-icons/hi";
import { Link } from "react-router-dom";
import { useSwipeable } from "react-swipeable";
import NavigationLink from "./NavigationLink";
import { useLocation } from "react-router-dom";

const SideBar = ({ isOpen, setIsOpen }) => {
  const location = useLocation();
  // use swipeable setIsOpen False
  const swipeable = useSwipeable({
    onSwipedRight: () => handleSwipeClose(),
  });

  useEffect(() => {
    handleSwipeClose();
  }, [location]);

  const handleSwipeClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      <div
        {...swipeable}
        onClick={() => setIsOpen(false)}
        className={`w-screen h-screen transition duration-200  ${
          isOpen
            ? "bg-black/50 backdrop-blur-sm visible"
            : "bg-black/0 backdrop-blur-none invisible"
        } fixed z-20 md:hidden mb-10 `}
      />
      <div
        {...swipeable}
        className={`bg-white/100 fixed overflow-y-auto w-2/3 h-screen z-30 transition-all duration-500 ease-out ${
          isOpen ? `right-0` : `-right-2/3`
        }  flex-col flex text-right px-4 shadow-xl backdrop-blur-lg py-4 md:-right-2/3 overscroll-y-contain`}
      >
        <div class="grid grid-cols-1 divide-y-2">
          <div>
            <button
              className="inline-flex px-4 py-4 items-center mx-auto "
              onClick={handleSwipeClose}
            >
              <FiArrowRight className="mx-2" />
              BACK
            </button>
          </div>

          <div>
            <Link to={NavigationLink.PHOTOGRAPHY} className="nav-link-m">
              PHOTOGRAPHY
            </Link>
          </div>
          <div>
            <Link to={NavigationLink.VIDEOGRAPHY} className="nav-link-m">
              VIDEOGRAPHY
            </Link>
          </div>
          <div>
            <Link to={NavigationLink.GALLERY} className="nav-link-m">
              GALLERY
            </Link>
          </div>
          <div>
            <Link to={NavigationLink.ABOUT} className="nav-link-m">
              ABOUT
            </Link>
          </div>
          <div>
            <Link to={NavigationLink.CONTACT} className="nav-link-m">
              GET IN TOUCH
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default SideBar;
