import React from "react";
import { useState } from "react";

function Mix() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("Nasr");
  const add = () => {
    setCount((c) => c + 1);
  };
  const minus = () => {
    setCount((c) => c - 1);
  };

  // Modified: Fixed the changeName assignment
  const changeName = () => {
    setName("Omar");
  };

  return (
    <div className="container">
      <button onClick={add}>+</button>
      <p>{count}</p>
      <button onClick={minus}>-</button>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={changeName}>Change Name</button>
    </div>
  );
}

export default Mix;
