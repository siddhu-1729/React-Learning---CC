import {
  useUser,
} from "../context/UserContext";

function UserProfile() {
  const {
    user,
    setUser,
  } = useUser();

  return (
    <div>
      <h2>User Profile</h2>

      <h3>{user.name}</h3>

      <button
        onClick={() =>
          setUser({
            name: "Satya Sai",
          })
        }
      >
        Change User
      </button>
    </div>
  );
}

export default UserProfile;