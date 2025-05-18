// src/context/AuthContext.jsx
import React, { createContext, useContext, useState } from "react";
import PropTypes from "prop-types";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  const login = (username, password) => {
    if (username === "admin" && password === "admin123") {
      setUser({ name: "Admin", role: "admin" });
    } else if (username === "user" && password === "user123") {
      setUser({ name: "Usuario", role: "user" });
    } else {
      alert("Credenciales incorrectas");
    }
  };

  const logout = () => setUser(null);

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);