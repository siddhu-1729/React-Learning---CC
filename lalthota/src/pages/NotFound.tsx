function NotFound() {
  return (
    <div className="not-found">
      <div className="card not-found-card">
        <span className="badge">404</span>

        <h1 style={{ marginTop: 12 }}>Page Not Found</h1>

        <p className="muted">
          The page you’re looking for doesn’t exist or has moved.
        </p>
      </div>
    </div>
  );
}

export default NotFound;