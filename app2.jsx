import { useState } from "react";

// Capitalize the component name
function App2() {
  const [count, setCount] = useState(0);
  const add = () => {
    setCount((preCount) => preCount + 1);
  };
  const min = () => {
    setCount((preCount) => preCount - 1);
  };
  return (

    <div className="App">
        <h1>This is ftom app2</h1>
      <button onClick={add}>Increment</button>
      <button onClick={min}>Decrement</button>
      <p>Count: {count}</p>
    </div>
  );
}

// Don't forget to capitalize the exported component
export default App2;
