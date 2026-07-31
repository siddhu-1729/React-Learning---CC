import ClassComponent from "../components/ClassComponent";

function About() {
  return (
    <div className="page-shell">
      <section className="hero-card">
        <span className="page-kicker">About the Project</span>

        <h1 className="page-title">Built to explore React patterns, state, routing, and UI refinement.</h1>

        <p className="page-copy">
          The app is intentionally small, but the layout now feels more intentional with stronger typography, spacing, and component surfaces.
        </p>
      </section>

      <section className="section-card">
        <div className="section-head">
          <div>
            <h2 className="section-title">Class component showcase</h2>
            <p className="section-subtitle">A classic component framed in a modern card.</p>
          </div>
        </div>

        <ClassComponent />
      </section>
    </div>
  );
}

export default About;