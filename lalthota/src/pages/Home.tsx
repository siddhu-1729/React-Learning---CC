import StudentCard from "../components/StudentCard";
import Counter from "../components/Counter";
import UserList from "../components/UserList";

function Home() {
  return (
    <div className="page-shell">
      <section className="hero-card">
        <span className="page-kicker">React Learning Lab</span>

        <h1 className="page-title">Modern React UI with polished cards, soft glass, and layered spacing.</h1>

        <p className="page-copy">
          This home screen combines data cards, interactive counters, and a fresh visual language so the project feels more like a product demo than a tutorial dump.
        </p>

        <div className="hero-actions">
          <span className="badge">Responsive layout</span>
          <span className="badge">Dark mode ready</span>
          <span className="badge">Reusable cards</span>
        </div>
      </section>

      <section className="grid-2">
        <StudentCard
          name="John"
          branch="CSE"
          cgpa={9.2}
        />

        <Counter />
      </section>

      <section className="section-card">
        <div className="section-head">
          <div>
            <h2 className="section-title">Community list</h2>
            <p className="section-subtitle">Clean stacked rows with better spacing and contrast.</p>
          </div>
        </div>

        <UserList />
      </section>
    </div>
  );
}

export default Home;