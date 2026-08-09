import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <NavLink to="/">Home</NavLink> ||{"   "}
      <NavLink to="/project-setup">Project Setup</NavLink> ||{"   "}
      <NavLink to="/components">Components</NavLink> ||{"   "}
      <NavLink to="/props">Props</NavLink> ||{"   "}
      <NavLink to="/state">State</NavLink> ||{"   "}
      <NavLink to="/hooks">Hooks</NavLink>  ||{"   "}
      <NavLink to="/component-with-css">Component with CSS</NavLink>  ||{"   "}
      <NavLink to ="/TailwindPlugin">Tailwind Plugin</NavLink> || {"   "}
      <NavLink to="/SubmitForm">Submit Form</NavLink> || {"   "}
      <NavLink to="/AsyncAPI">Async API</NavLink> || {"   "}
      <NavLink to="/payloads">PayLoads</NavLink>

      
    </nav>
  );
}

export default Navbar; 