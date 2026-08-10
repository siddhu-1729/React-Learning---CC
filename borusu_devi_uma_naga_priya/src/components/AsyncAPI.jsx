import { useEffect, useState } from "react";

function AsyncAPI() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchUsers = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );

      if (!response.ok) {
        throw new Error("Failed to fetch users");
      }

      const data = await response.json();

      setUsers(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  if (loading) {
    return (
      <p className="p-8 text-center text-lg">
        Loading...
      </p>
    );
  }

  if (error) {
    return (
      <p className="p-8 text-center text-red-500">
        {error}
      </p>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 p-8">

      <h1 className="mb-8 text-3xl font-bold text-gray-800">
        Users
      </h1>

      <div className="space-y-6">

        {users.map((user) => (
          <div
            key={user.id}
            className="rounded-xl bg-white p-6 shadow-md"
          >

            <p className="mb-3 text-sm font-semibold text-blue-600">
              User {user.id}
            </p>

            <div className="space-y-2">

              <p>
                <span className="font-semibold">
                  Name:
                </span>{" "}
                {user.name}
              </p>

              <p>
                <span className="font-semibold">
                  Email:
                </span>{" "}
                {user.email}
              </p>

              <p>
                <span className="font-semibold">
                  Phone:
                </span>{" "}
                {user.phone}
              </p>

              <p>
                <span className="font-semibold">
                  Website:
                </span>{" "}
                {user.website}
              </p>

            </div>

          </div>
        ))}

      </div>

    </div>
  );
}

export default AsyncAPI;