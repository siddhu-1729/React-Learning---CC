import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

function Footer() {
  const { theme } = useContext(ThemeContext);

  return (
    <div>
      <h2>Footer</h2>
      <p>Theme : {theme}</p>
    </div>
  );
}

export default Footer;
