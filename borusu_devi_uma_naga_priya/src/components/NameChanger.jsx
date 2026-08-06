import { useState } from "react";

function NameChanger() {
  const [name, setName] = useState("");

  return (
    <div>
      <h2>Name Changer</h2>

      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <h3>Welcome {name} 👋</h3>
    </div>
  );
}

export default NameChanger;