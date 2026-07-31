import useFetch from "../hooks/useFetch";

interface User {
  id: number;
  name: string;
  email: string;
}

function FetchDemo() {
  const {
    data,
    loading,
    error,
  } = useFetch<User[]>(
    "https://jsonplaceholder.typicode.com/users"
  );

  if (loading) {
    return (
      <div className="hero-card">
        <span className="badge">Fetching data</span>
        <h2 style={{ marginTop: 12 }}>Loading users...</h2>
        <p className="muted">Please wait while the demo fetches the remote list.</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="hero-card">
        <span className="badge">Error</span>
        <h2 style={{ marginTop: 12 }}>{error}</h2>
      </div>
    );
  }

  return (
    <div className="page-shell">
      <section className="hero-card">
        <span className="page-kicker">Fetch Demo</span>
        <h1 className="page-title">Remote data rendered as clean cards.</h1>
        <p className="page-copy">
          Each fetched user is displayed with clearer spacing and a more premium visual rhythm.
        </p>
      </section>

      <section className="grid-2">
        {data?.map((user) => (
          <article key={user.id} className="card">
            <span className="badge">User #{user.id}</span>
            <h3 style={{ marginTop: 10 }}>{user.name}</h3>
            <p className="muted">{user.email}</p>
          </article>
        ))}
      </section>
    </div>
  );
}

export default FetchDemo;