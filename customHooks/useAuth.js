import React from "react";

const AuthContext = React.createContext({ user: "" });

export const AuthProvider = ({ children }) => {
  return (
    <AuthContext.Provider value={{ user: "elliott" }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => {
  return React.useContext(AuthContext);
};

export default useAuth;
