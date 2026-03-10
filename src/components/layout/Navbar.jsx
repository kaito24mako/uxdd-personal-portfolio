import ThemeToggle from "../features/theme/ThemeToggle";
import { playSwitchSound } from "../assets/audio/switch";

function Navbar({ handleThemeToggle, isDark }) {
  return (
    <header className="nav-container">
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
