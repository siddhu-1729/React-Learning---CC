import {
  createContext,
  useContext,
  useState,
} from "react";
import type { ReactNode } from "react";

interface User {
  name: string;
}

interface UserContextType {
  user: User;
  setUser: React.Dispatch<
    React.SetStateAction<User>
  >;
}

const UserContext =
  createContext<
    UserContextType | undefined
  >(undefined);

interface UserProviderProps {
  children: ReactNode;
}

export function UserProvider({
  children,
}: UserProviderProps) {
  const [user, setUser] =
    useState<User>({
      name: "Lal",
    });

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  const context =
    useContext(UserContext);

  if (!context) {
    throw new Error(
      "useUser must be inside UserProvider"
    );
  }

  return context;
}