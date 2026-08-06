import { useState } from "react";
import { useNavigate } from "react-router-dom";

function UseStatePage() {
  const [name, setName] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    navigate("/hooks/welcome", {
      state: {
        name: name,
      },
    });
  };

  return (
    <div>
      <h1>useState Example</h1>

      <p>Enter your full name</p>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter your full name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <br />
        <br />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default UseStatePage;