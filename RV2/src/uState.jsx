import React, { useState } from "react";
// deaclre state
// decalre functions
// create buttons to increment and decrement
function UseState() {
  const [count, setCount] = useState(0);

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
