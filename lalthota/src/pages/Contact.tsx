function Contact() {
  return (
    <div className="page-shell">
      <section className="hero-card">
        <span className="page-kicker">Contact</span>

        <h1 className="page-title">A cleaner contact surface with card-like details.</h1>

        <p className="page-copy">
          Information is now grouped into digestible rows with better hierarchy and breathing room.
        </p>
      </section>

      <section className="grid-2">
        <div className="card">
          <span className="badge">Identity</span>
          <h2 style={{ marginTop: 10 }}>John</h2>
          <p className="muted">Primary contact person</p>
        </div>

        <div className="card stack">
          <div>
            <h3>Email</h3>
            <p className="muted">john@gmail.com</p>
          </div>
          <div>
            <h3>Phone</h3>
            <p className="muted">9876543210</p>
          </div>
          <div>
            <h3>Address</h3>
            <p className="muted">Hyderabad</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;