import Login from "../components/Login";

function LoginPage() {
  return (
    <div className="page-shell">
      <section className="hero-card">
        <span className="page-kicker">Authentication</span>

        <h1 className="page-title">A cleaner sign-in experience with a focused layout.</h1>

        <p className="page-copy">
          The login form now reads like a proper product surface with labels, spacing, and a strong call to action.
        </p>
      </section>

      <Login />
    </div>
  );
}

export default LoginPage;