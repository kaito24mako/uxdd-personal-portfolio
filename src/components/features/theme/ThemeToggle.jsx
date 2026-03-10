import { MdDarkMode, MdLightMode } from "react-icons/md";
import { playClickSound } from "../../assets/audio/click";

function ThemeToggle({ handleThemeToggle, isDark }) {
  return (
    <button
      className={`theme-buttons ${isDark ? "rotate-dark" : "rotate-light"}`}
      onClick={() => {
        handleThemeToggle();
        playClickSound();
      }}
    >
      {isDark ? <MdDarkMode /> : <MdLightMode />}
    </button>
  );
}

export default ThemeToggle;
