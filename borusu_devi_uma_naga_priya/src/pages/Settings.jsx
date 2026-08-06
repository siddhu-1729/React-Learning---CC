import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

function Settings() {
  const { theme } = useContext(ThemeContext);

  return (
    <div>
      <h2>Settings</h2>
      <p>Theme : {theme}</p>
    </div>
  );
}

export default Settings;