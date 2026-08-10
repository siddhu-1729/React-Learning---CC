import { useState } from "react";

function Params() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchUser = async (id) => {
    try {
      setLoading(true);

      const response = await fetch(
        `https://jsonplaceholder.typicode.com/users/${id}`
      );

      if (!response.ok) {
        throw new Error("Failed to fetch user");
      }

      const data = await response.json();

      setUser(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">

      <div className="mx-auto max-w-2xl">

        <h1 className="mb-2 text-3xl font-bold text-gray-800">
          URL Params
        </h1>

        <p className="mb-8 text-gray-600">
          Fetch a specific user using their ID.
        </p>

      
        <div className="mb-6 flex gap-3">

          <button
            onClick={() => fetchUser(1)}
            className="rounded-lg bg-blue-600 px-5 py-2 text-white hover:bg-blue-700"
          >
            User 1
          </button>

          <button
            onClick={() => fetchUser(2)}
            className="rounded-lg bg-blue-600 px-5 py-2 text-white hover:bg-blue-700"
          >
            User 2
          </button>

          <button
            onClick={() => fetchUser(3)}
            className="rounded-lg bg-blue-600 px-5 py-2 text-white hover:bg-blue-700"
          >
            User 3
          </button>

        </div>

   

        {loading && (
          <p className="text-blue-600">
            Loading...
          </p>
        )}


        {user && !loading && (
          <div className="rounded-2xl bg-white p-6 shadow-md">

            <p className="mb-3 text-sm font-semibold text-blue-600">
              User ID: {user.id}
            </p>

            <h2 className="text-2xl font-bold text-gray-800">
              {user.name}
            </h2>

            <div className="mt-4 space-y-3">

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
        )}

      </div>

    </div>
  );
}

export default Params;