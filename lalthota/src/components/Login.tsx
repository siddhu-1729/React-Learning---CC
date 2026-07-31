import { useState } from "react";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(
    e: React.FormEvent
  ) {
    e.preventDefault();

    alert(
      `Username : ${username}\nPassword : ${password}`
    );
  }

  return (
    <form className="card form-card" onSubmit={handleSubmit}>
      <span className="badge">Secure Sign In</span>

      <h2 style={{ marginTop: 10 }}>Login</h2>

      <div className="form-field">
        <label className="form-label" htmlFor="username">
          Username
        </label>

        <input
          id="username"
          className="form-input"
          type="text"
          placeholder="Enter your username"
          value={username}
          onChange={(e) =>
            setUsername(e.target.value)
          }
        />
      </div>

      <div className="form-field">
        <label className="form-label" htmlFor="password">
          Password
        </label>

        <input
          id="password"
          className="form-input"
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) =>
            setPassword(e.target.value)
          }
        />
      </div>

      <button className="form-button" type="submit">
        Login
      </button>
    </form>
  );
}

export default Login;