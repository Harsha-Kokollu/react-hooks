import React, { useState, useEffect } from 'react';

// useEffect

/*

Explanation:
The useEffect hook allows you to perform side effects in functional components. It runs after the component renders. You can use it for data fetching, subscriptions, or manually changing the DOM.

Usage Scenario:
Fetching data from an API, setting up subscriptions, and manually changing the DOM.

*/

const DataFetcher = () => {
  const [data, setData] = useState(null); // component mount
  const [count, setCount] = useState(0); // component update
  const [time, setTime] = useState(new Date()); // component unmount
  const [showTimer, setShowTimer] = useState(true);
  const [loading, setLoading] = useState(true);

  // 1 Mounting

  /*
    Mounting Phase:
      This phase occurs when a component is first rendered and mounted to the DOM.
      The useEffect hook with an empty dependency array runs after the first render.
      It's commonly used for initial setup, fetching data, subscribing to events, etc.
  */

  const fetchData = () => {
    fetch('https://jsonplaceholder.typicode.com/posts/1')
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      });
  };

  useEffect(() => {
    console.log('Component mounted'); // Runs after first render

    fetchData();
  }, []); // Empty dependency array ensures it runs only once on mount

  // 2 updating

  /*
  Updating Phase:
  This phase occurs when the component re-renders due to state or prop changes.
  The useEffect hook with a dependency array runs after every render if any dependencies change.
  It's used for side effects dependent on state or prop changes.
  */

  useEffect(() => {
    console.log('Component updated'); // Runs after every render if 'count' changes
  }, [count]); // Dependency array ensures it runs when 'count' changes

  // 3 unmounting

  /*
  The Timer component subscribes to a timer when it mounts using setInterval.
  The timer updates the current time every second.
  The cleanup function returned from useEffect clears the timer when the Timer component unmounts.
  The App component renders the Timer component conditionally based on the state of showTimer.
  Clicking the "Hide Timer" button toggles the visibility of the Timer component.
  When the Timer component is hidden (unmounted), the timer is cleared, demonstrating the unmounting phase in real-time.
  You can run this code to see how the timer starts and stops updating when the Timer component is mounted and unmounted respectively. This real-time experience illustrates the unmounting phase in action.
  
  */

  const Timer = () => {
    useEffect(() => {
      const timerId = setInterval(() => {
        setTime(new Date()); // Update time every second
      }, 1000);

      return () => {
        clearInterval(timerId); // Cleanup: Clear the timer when component unmounts
        // console.log('Component unmounting', timerId);
      };
    }, []); // Runs only once on mount

    return <p>Current time: {time.toLocaleTimeString()}</p>;
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Data: mounting</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
      <h1>Data: updating</h1>
      <button onClick={() => setCount(count + 1)}>Click me</button>
      <h1>Data: unmount</h1>
      {showTimer && <Timer />} {/* Render Timer component conditionally */}
      <button onClick={() => setShowTimer(!showTimer)}>
        {showTimer ? 'Hide Timer' : 'Show Timer'}
      </button>
    </div>
  );
};

export default DataFetcher;
