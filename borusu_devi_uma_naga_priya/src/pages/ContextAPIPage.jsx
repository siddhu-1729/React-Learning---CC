import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

import Header from "./Header";
import Profile from "./Profile";
import Settings from "./Settings";
import Footer from "./Footer";

function ContextAPIPage() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Theme Switcher</h1>

      <h3>Current Theme</h3>

      <h2>{theme}</h2>

      <button onClick={toggleTheme}>
        Switch Theme
      </button>

      <hr />

      <Header />

      <hr />

      <Profile />

      <hr />

      <Settings />

      <hr />

      <Footer />
    </div>
  );
}

export default ContextAPIPage;