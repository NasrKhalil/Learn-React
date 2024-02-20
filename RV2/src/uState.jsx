import React, { useState } from "react";
// deaclre state
// decalre functions
// create buttons to increment and decrement
function UseState() {
  // Initialize state using the useState hook:
  const [count, setCount] = useState(0);
/*useState initializes the state with a value of 0 and returns an array with two elements:
count: the current state value.
setCount: a function to update the state*/
  const add = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const subtract = () => {
    setCount((prevCount) => prevCount - 1);
  };

  return (
    <div>
      <button onClick={add}>+</button>
      <span>{count}</span>
      <button onClick={subtract}>-</button>
    </div>
  );
}

export default UseState;
