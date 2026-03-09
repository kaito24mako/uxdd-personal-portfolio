import ThemeToggle from "../features/theme/ThemeToggle";

function Navbar({ handleThemeToggle, isDark }) {
  return (
    <header className="nav-container">
      <a className="logo" href="#home">
        KaitoWatanabe
      </a>

      <div className="page-links">
        <a href="#home">Home</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </div>

      <ThemeToggle handleThemeToggle={handleThemeToggle} isDark={isDark} />
    </header>
  );
}

export default Navbar;
