import ReduxCounter from "../components/ReduxCounter";

import ReduxUser from "../components/ReduxUser";

function Dashboard() {
  return (
    <div className="page-shell">
      <section className="hero-card">
        <span className="page-kicker">Dashboard</span>

        <h1 className="page-title">Stateful dashboard with elevated metric cards.</h1>

        <p className="page-copy">
          Redux controls and user state now sit inside a layout that feels closer to a real admin surface.
        </p>
      </section>

      <section className="grid-2">
        <ReduxCounter />

        <ReduxUser />
      </section>
    </div>
  );
}

export default Dashboard;