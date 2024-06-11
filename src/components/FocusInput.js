import React, { useRef } from 'react';

// useRef

/*

Explanation:
The useRef hook returns a mutable ref object whose .current property is initialized to the passed argument (initialValue). This object persists for the lifetime of the component.

*/

function FocusInput() {
  const inputRef = useRef(null);

  const focusInput = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <input ref={inputRef} type="text" />
      <button onClick={focusInput}>Focus Input</button>
    </div>
  );
}

export default FocusInput;
