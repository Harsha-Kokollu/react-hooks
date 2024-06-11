import React, { useContext } from 'react';
import AuthContext from './AuthProvider';

// useContext

/*
Explanation:
The useContext hook allows you to access the value of a context. It's useful for passing data through the component tree without having to pass props down manually at every level.

Usage Scenario:
Sharing global data like themes, authenticated user information, or application settings.
*/

const LoginButton = () => {
  const { login } = useContext(AuthContext);

  const handleLogin = () => {
    // Perform login action
    login({ username: 'exampleUser' });
  };

  return <button onClick={handleLogin}>Login</button>;
};

export default LoginButton;
