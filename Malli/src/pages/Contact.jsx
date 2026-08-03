import { useContext } from "react";
import { UserContext } from "../contex/UserContext";

function Contact() {
   const { oldStudent } = useContext(UserContext);

  return (
    <>
    

    <h1>{oldStudent.name}</h1>
    </>
  );
}

export default Contact;