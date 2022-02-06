import "./App.css";
import { Routes, Route, Link } from "react-router-dom";

// Import Page Components
import Videography from "./Videography";
import Photography from "./Photography";
import Home from "./Home";

import NavigationBar from "./NavigationBar/NavigationBar";
import SideBar from "./NavigationBar/SideBar";
import Footer from "./Footer/Footer";
import { useEffect, useState } from "react";
import NavigationLink from "./NavigationBar/NavigationLink";

function App() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const [screenSize, getDimension] = useState({
    dynamicWidth: window.innerWidth,
    dynamicHeight: window.innerHeight,
  });
  const setDimension = () => {
    getDimension({
      dynamicWidth: window.innerWidth,
      dynamicHeight: window.innerHeight,
    });
  };

  useEffect(() => {
    window.addEventListener("resize", setDimension);

    return () => {
      window.removeEventListener("resize", setDimension);
    };
  }, [screenSize]);

  return (
    <>
      <NavigationBar
        scrollPosition={scrollPosition}
        height={screenSize.dynamicHeight}
      />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path={NavigationLink.PHOTOGRAPHY} element={<Photography />} />
        <Route path={NavigationLink.VIDEOGRAPHY} element={<Videography />} />
        <Route path={NavigationLink.GALLERY} element={<Home />} />
        <Route path={NavigationLink.ABOUT} element={<Home />} />
        <Route path={NavigationLink.CONTACT} element={<Home />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
