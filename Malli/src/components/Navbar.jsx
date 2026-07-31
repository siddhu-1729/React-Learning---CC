import { Link } from "react-router-dom";
function Navbar() {
  return (
    <>
      <style>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        nav {
          background: #1e293b;
          padding: 15px 40px;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .logo {
          color: white;
          font-size: 24px;
          font-weight: bold;
        }

        .nav-links {
          list-style: none;
          display: flex;
          gap: 25px;
        }

        .nav-links a {
          color: white;
          text-decoration: none;
          font-size: 18px;
          transition: color 0.3s;
        }

        .nav-links a:hover {
          color: #38bdf8;
        }
      `}</style>

      <nav>
        <div className="logo">MyWebsite</div>

        <ul className="nav-links">
          <li><Link to ="/">Home</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/register">Register</Link></li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;