import {
  useTheme,
} from "../context/ThemeContext";

function ThemeToggle() {
  const {
    dark,
    toggleTheme,
  } = useTheme();

  return (
    <div className="theme-toggle">
      <span className="badge">
        {dark ? "Dark Mode" : "Light Mode"}
      </span>

      <button
        className="theme-chip"
        onClick={toggleTheme}
      >
        {dark ? "Switch to Light" : "Switch to Dark"}
      </button>
    </div>
  );
}

export default ThemeToggle;