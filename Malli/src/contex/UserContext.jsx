import { createContext, useState } from "react";

export const UserContext = createContext();

function UserProvider({ children }) {
  const [student, setStudent] = useState({
    name: "Malli",
    branch: "CSE",
    year: "3rd Year",
  });

  const [oldStudent] = useState({
    name: "Malli",
    branch: "CSE",
 year: "3rd Year",
   });

  return (
    <UserContext.Provider value={{ student,oldStudent,setStudent }}>
      {children}
    </UserContext.Provider>
  );
}

export default UserProvider;