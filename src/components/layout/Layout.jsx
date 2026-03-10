import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";

import leafOne from "../../assets/leaf-one.png";
import branch from "../../assets/branch.png";

import Navbar from "./Navbar";
import Footer from "./Footer";

function Layout() {
  const [isDark, setIsDark] = useState(false);

  // toggles the value of the current state
  function handleThemeToggle() {
    setIsDark((prev) => !prev);
  }

  useEffect(() => {
    const doc = document.documentElement;
    const pageHeight = doc.scrollHeight; // total page height in px
    doc.style.setProperty("--leaf-fall-distance", `${pageHeight}px`);
  }, []);

  return (
    <div className="app" data-theme={isDark ? "dark" : "light"}>
      {/* <Leaf /> */}
      <img src={leafOne} className="falling-leaf-left" />
      <img src={leafOne} className="falling-leaf-right" />
      <img src={branch} className="branch" />

      <Navbar handleThemeToggle={handleThemeToggle} isDark={isDark} />
      <div className="app-content">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default Layout;
