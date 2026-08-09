import { Link } from "react-router-dom";

function PayLoadsPage() {
  return (
    <div>
      <h1>Pay Loads</h1>

      <ul>
        <li>
          <Link to="/payloads/params">params</Link>
        </li>

        <li>
          <Link to="/payloads/requestbody">Request Body</Link>
        </li>
        
      </ul>
    </div>
  );
}

export default PayLoadsPage;