import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

function Header() {
  const { theme } = useContext(ThemeContext);

  return (
    <div>
      <h2>Header</h2>
      <p>Theme : {theme}</p>
    </div>
  );
}

export default Header;