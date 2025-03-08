import { createContext, useState } from "react";

const AuthContext = createContext();

const ADMIN = {
  username: "adminmode",
  password: "passtoadminpanel",
};

function AuthProvider({ children }) {
  function login(username, password) {
    if (username === ADMIN.username && password === ADMIN.password) {
      return true;
    }
    return false;
  }

  return (
    <AuthContext.Provider value={{ login }}>{children}</AuthContext.Provider>
  );
}

export { AuthProvider, AuthContext };
