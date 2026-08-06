import { useLocation } from "react-router-dom";

function WelcomePage() {
  const location = useLocation();

  const name = location.state?.name || "Guest";

  return (
    <div>
      <h1>Welcome {name} 👋</h1>

      <p>
        This page received your name using React Router and useState.
      </p>
    </div>
  );
}

export default WelcomePage;