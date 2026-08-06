import { Link } from "react-router-dom";

function HooksPage() {
  return (
    <div>
      <h1>React Hooks</h1>

      <ul>
        <li>
          <Link to="/hooks/useState">useState</Link>
        </li>

        <li>
          <Link to="/hooks/useEffect">useEffect</Link>
        </li>

        <li>
          <Link to="/hooks/context-api">Context API</Link>
        </li>

        
      </ul>
    </div>
  );
}

export default HooksPage;