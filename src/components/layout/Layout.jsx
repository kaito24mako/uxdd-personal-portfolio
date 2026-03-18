import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";

import leaf from "../../assets/nature/leaf.png";
import branch from "../../assets/nature/branch.png";

import Navbar from "./Navbar";
import Footer from "./Footer";

function Layout() {
  const [isDark, setIsDark] = useState(false);

  function handleThemeToggle() {
    setIsDark((prev) => !prev);
  }

  // used AI!
  // to calculate the total height of the website and set it to the css declaration
  useEffect(() => {
    const doc = document.documentElement;
    const pageHeight = doc.scrollHeight; // total page height in px
    doc.style.setProperty("--leaf-fall-distance", `${pageHeight}px`);
  }, []);

  return (
    <div className="app" data-theme={isDark ? "dark" : "light"}>
      <img src={leaf} className="falling-leaf-left" alt="Falling leaf" />
      <img src={leaf} className="falling-leaf-right" alt="Falling leaf" />
      <img src={branch} className="branch" alt="Branch" />

      <Navbar handleThemeToggle={handleThemeToggle} isDark={isDark} />

      <div className="app-content">
        <Outlet />
      </div>

      <Footer />
    </div>
  );
}

export default Layout;
