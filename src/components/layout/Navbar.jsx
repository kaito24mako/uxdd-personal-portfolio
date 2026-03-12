import ThemeToggle from "../features/theme/ThemeToggle";
import { playSwitchSound } from "../assets/audio/switch";
import { useEffect, useState } from "react";

function Navbar({ handleThemeToggle, isDark }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 40);
    }
    onScroll();

    // run onScroll as the window is being scrolled
    // passive:true stops preventDefault() to make scrolling smoother
    window.addEventListener("scroll", onScroll, { passive: true });
  }, []);

  return (
    <header className={`nav-container ${scrolled ? "nav-scrolled" : ""}`}>
      <a className="logo" href="#home" onClick={playSwitchSound}>
        KaitoWatanabe
      </a>

      <div className="page-links">
        <a href="#home" onClick={playSwitchSound}>
          Home
        </a>
        <a href="#projects" onClick={playSwitchSound}>
          Projects
        </a>
        <a href="#contact" onClick={playSwitchSound}>
          Contact
        </a>
      </div>

      <ThemeToggle handleThemeToggle={handleThemeToggle} isDark={isDark} />
    </header>
  );
}

export default Navbar;
