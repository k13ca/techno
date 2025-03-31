import { createContext, useState } from "react";

const AuthContext = createContext();

const ADMIN = {
  username: "adminmode",
  password: "passtoadminpanel",
};

function AuthProvider({ children }) {
  const [isLogged, setIsLogged] = useState(false);

  function login(username, password) {
    if (username === ADMIN.username && password === ADMIN.password) {
      return setIsLogged(true);
    }
    return setIsLogged(false);
  }

  return (
    <AuthContext.Provider value={{ login, isLogged }}>
      {children}
    </AuthContext.Provider>
  );
}

export { AuthProvider, AuthContext };
