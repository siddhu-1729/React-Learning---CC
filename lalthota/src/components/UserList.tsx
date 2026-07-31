function UserList() {
  const users = [
    "Alice",
    "Bob",
    "Charlie",
    "David",
  ];

  return (
    <div className="card">
      <span className="badge">Community</span>

      <h2 style={{ marginTop: 10 }}>User List</h2>

      <div className="stack" style={{ marginTop: 12 }}>
        {users.map((user, index) => (
          <div
            key={index}
            className="section-card"
            style={{ padding: 14, borderRadius: 16 }}
          >
            {user}
          </div>
        ))}
      </div>
    </div>
  );
}

export default UserList;