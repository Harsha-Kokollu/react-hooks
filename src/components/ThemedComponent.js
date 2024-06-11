import React from 'react';
import LoginButton from '../contextApi/LoginButton';
import UserInfo from '../contextApi/UserInfo';

// useContext

/*
Explanation:
The useContext hook allows you to access the value of a context. It's useful for passing data through the component tree without having to pass props down manually at every level.

Usage Scenario:
Sharing global data like themes, authenticated user information, or application settings.
*/

const ThemedComponent = () => {
  return (
    <div>
      <LoginButton />
      <UserInfo />
    </div>
  );
};

export default ThemedComponent;
