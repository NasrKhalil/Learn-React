import React, { useState } from "react";

function ArrayPusher() {
  const [items, setItems] = useState([]);

  const pushItem = (item) => {
    setItems((prevItems) => [...prevItems, item]);
  };

  return (
    <div>
      <p>Array Items:</p>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <button onClick={() => pushItem("New Item")}>Push Item</button>
    </div>
  );
}

export default ArrayPusher;
