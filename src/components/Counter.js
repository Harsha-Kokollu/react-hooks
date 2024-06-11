import React, { useContext, useState } from 'react';
import AuthContext from '../contextApi/AuthProvider';

// useState

/*
Explanation:
The useState hook allows you to add state to functional components. It returns an array with the current state value and a function to update it.

Usage Scenario:
Managing simple state in functional components, such as toggles, counters, and form inputs.

*/

const Counter = () => {
  const [count, setCount] = useState(110);
  const { user, logout } = useContext(AuthContext);

  return (
    <div>
      <p>You clicked {count} times</p>
      <p>Welcome, {user?.username}</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
};

export default Counter;
