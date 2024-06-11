import React, { useState, useMemo } from 'react';

// Define the function outside
const computeFactorial = (n) => {
  console.log('Computing factorial...');
  return n <= 1 ? 1 : n * computeFactorial(n - 1);
};

const ExpensiveCalculationComponent = ({ num }) => {
  const factorial = useMemo(() => computeFactorial(num), [num]);

  return (
    <div>
      <p>
        Factorial of {num}: {factorial}
      </p>
    </div>
  );
};

const MemoValue = () => {
  const [number, setNumber] = useState(5);

  return (
    <div>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value))}
      />
      <ExpensiveCalculationComponent num={number} />
    </div>
  );
};

export default MemoValue;
