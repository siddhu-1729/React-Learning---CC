import { useState } from "react";

function RequestBody() {
  const [responseData, setResponseData] = useState(null);
  const [loading, setLoading] = useState(false);

  const createUser = async () => {
    const userData = {
      name: "Borusu Devi Uma Naga Priya",
      email: "priya@example.com",
      phone: "9876543210",
      course: "B.Tech Information Technology",
    };

    try {
      setLoading(true);

      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users",
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify(userData),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to create user");
      }

      const data = await response.json();

      setResponseData(data);
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
          Request Body
        </h1>

        <p className="mb-8 text-gray-600">
          Send user information to the API using a POST request.
        </p>

        {/* Data we are sending */}

        <div className="rounded-2xl bg-white p-6 shadow-md">

          <h2 className="mb-4 text-xl font-bold text-gray-800">
            User Information
          </h2>

          <div className="space-y-3">

            <p>
              <span className="font-semibold">Name:</span>{" "}
              Borusu Devi Uma Naga Priya
            </p>

            <p>
              <span className="font-semibold">Email:</span>{" "}
              priya@example.com
            </p>

            <p>
              <span className="font-semibold">Phone:</span>{" "}
              9876543210
            </p>

            <p>
              <span className="font-semibold">Course:</span>{" "}
              B.Tech Information Technology
            </p>

          </div>

          <button
            onClick={createUser}
            disabled={loading}
            className="mt-6 rounded-lg bg-green-600 px-6 py-3 font-semibold text-white hover:bg-green-700 disabled:opacity-50"
          >
            {loading ? "Sending..." : "Send Data"}
          </button>

        </div>

        {/* API Response */}

        {responseData && (
          <div className="mt-6 rounded-2xl bg-green-50 p-6 shadow-md">

            <h2 className="mb-4 text-xl font-bold text-green-700">
              API Response
            </h2>

            <p>
              <span className="font-semibold">ID:</span>{" "}
              {responseData.id}
            </p>

            <p className="mt-2">
              <span className="font-semibold">Name:</span>{" "}
              {responseData.name}
            </p>

            <p className="mt-2">
              <span className="font-semibold">Email:</span>{" "}
              {responseData.email}
            </p>

            <p className="mt-2">
              <span className="font-semibold">Phone:</span>{" "}
              {responseData.phone}
            </p>

          </div>
        )}

      </div>
    </div>
  );
}

export default RequestBody;