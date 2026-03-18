import ThemeToggle from "../features/theme/ThemeToggle";
import { playClickSound } from "../assets/audio/click";
import { useEffect, useState } from "react";

function Navbar({ handleThemeToggle, isDark }) {
  const [scrolled, setScrolled] = useState(false);

  // used AI!
  // useEffect because scroll changes do not activate re-renders in React components
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
      <a className="logo" href="#home" onClick={playClickSound}>
        KaitoWatanabe
      </a>

      <div className="page-links">
        <a href="#home" onClick={playClickSound}>
          Home
        </a>
        <a href="#projects" onClick={playClickSound}>
          Projects
        </a>
        <a href="#contact" onClick={playClickSound}>
          Contact
        </a>
      </div>

      <ThemeToggle handleThemeToggle={handleThemeToggle} isDark={isDark} />
    </header>
  );
}

export default Navbar;
