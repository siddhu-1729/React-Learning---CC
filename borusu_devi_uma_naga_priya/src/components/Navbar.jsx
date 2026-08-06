import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <NavLink to="/">Home</NavLink> |{" "}
      <NavLink to="/project-setup">Project Setup</NavLink> |{" "}
      <NavLink to="/components">Components</NavLink> |{" "}
      <NavLink to="/props">Props</NavLink> |{" "}
      <NavLink to="/state">State</NavLink> |{" "}
      <NavLink to="/hooks">Hooks</NavLink> 
      
    </nav>
  );
}

export default Navbar; 