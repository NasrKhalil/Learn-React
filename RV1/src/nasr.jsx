import { useState } from "react";

function Nasr() {
  const [count, setCount] = useState(0);

  const add = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const remove = () => {
    setCount((prevCount) => prevCount - 1);
  };

  // Fix the returned JSX. Remove extra curly brackets, close the div tag, and add the missing keys
  return (
    <div className="Nasr">
      <h2>Nasr's Product</h2>
      <button onClick={add}>Add to Cart</button>
      <p key={"nasr-product-count"}>Count: {count}</p>
      <button onClick={remove}>Remove from Cart</button>

      {/* <button onClick={remove} disabled={count === 0}>Remove From Cart</button */}
    </div>
  );
}

export default Nasr;
// ```

// Changes made:

// 1. Corrected the component name to PascalCase ("Nasr").
// 2. Fixed the `add` and `remove` functions to correctly update the `count` state.
// 3. Wrapped the returned JSX in parentheses because the return statement contained a multi-line expression.
// 4. Closed the opened `div` tag.
// 5. Added a unique `key` prop to the `<p>` tag that displays the `count`.

// Now, the code snippet should work as expected. Good job! Just minor adjustments needed :)
