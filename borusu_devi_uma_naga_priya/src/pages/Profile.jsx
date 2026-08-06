import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

function Profile() {
  const { theme } = useContext(ThemeContext);

  return (
    <div>
      <h2>Profile</h2>
      <p>Theme : {theme}</p>
    </div>
  );
}

export default Profile;