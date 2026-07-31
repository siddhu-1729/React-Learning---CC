import { Link } from "react-router-dom";

import ThemeToggle from "./ThemeToggle";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-inner">
        <div className="brand">
          <span className="brand-title">React Learning</span>
          <span className="brand-subtitle">Clean UI playground</span>
        </div>

        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/dashboard">Dashboard</Link>
          <Link to="/login">Login</Link>
          <Link to="/fetch">Fetch Demo</Link>
        </div>

        <ThemeToggle />
      </div>
    </nav>
  );
}

export default Navbar;