import { useContext } from "react";
import { UserContext } from "../contex/UserContext";
function Register() {
  const { student } = useContext(UserContext);
  return (
    <>
      <h1>Register Page</h1>
      <h2>{student.name}</h2>
      <h2>{student.age}</h2>
    </>
  
  );
}

export default Register;