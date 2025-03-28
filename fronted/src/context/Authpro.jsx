import React, { createContext, useContext, useState } from "react";

export const AuthContext = createContext();

export default function AuthProvider({ children }) {
  const initialAuthUser = localStorage.getItem("users");

  const [authUser, setAuthUser] = useState(() => {
    try {
      return initialAuthUser ? JSON.parse(initialAuthUser) : null;
    } catch (error) {
      console.error("Error parsing auth user:", error);
      return null;
    }
  });

  return (
    <AuthContext.Provider value={[authUser, setAuthUser]}>
      {children}
    </AuthContext.Provider>
  );
}

// Custom hook for easy access
export const useAuth = () => useContext(AuthContext);

