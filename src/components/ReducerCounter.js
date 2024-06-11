import React, { useReducer } from 'react';

// useReducer

/*

Explanation:
The useReducer hook is used for managing complex state logic. It's an alternative to useState and is more suitable for state that involves multiple sub-values or when the next state depends on the previous state.

Usage Scenario:
Managing state in complex components with multiple state transitions, such as forms or complex user interactions.

*/

const initialState = { count: 2 };

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
}

function ReducerCounter() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: 'increment' })}>+</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
    </div>
  );
}

export default ReducerCounter;
