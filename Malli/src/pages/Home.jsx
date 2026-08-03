import Card from "../components/Card";
import { useContext } from "react";
import { UserContext } from "../contex/UserContext";
function Home() {
  const { student, setStudent } = useContext(UserContext);

  return (
    <>
      <h2>{student.name}</h2>
      <h2>{student.branch}</h2>
      <h2>{student.year}</h2>

      <button
        onClick={() =>
          setStudent({
            name: "Ravi",
            branch: "ECE",
            year: "2nd Year",
          })
        }
      >
        Change Student
      </button>
    </>
  );
}

export default Home;
