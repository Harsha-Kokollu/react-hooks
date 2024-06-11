import React, { createContext, useState } from 'react';

const AuthContext = createContext();

// useContext

/*
Explanation:
The useContext hook allows you to access the value of a context. It's useful for passing data through the component tree without having to pass props down manually at every level.

Usage Scenario:
Sharing global data like themes, authenticated user information, or application settings.
*/

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({ username: 'Harsha' });

  const login = (userData) => {
    setUser(userData);
    console.log(userData);
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
