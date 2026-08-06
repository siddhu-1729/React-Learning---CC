import { Link } from "react-router-dom";

function StatePage() {
  return (
    <div>
      <h1>State Management</h1>

      <ul>
        <li>
          <Link to="/state/name-changer">
            Name Changer
          </Link>
        </li>

        <li>
          <Link to="/state/counter">
            Counter
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default StatePage;