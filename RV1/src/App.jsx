import { useState } from "react";

function App() {
  // Correct the function name typo from "addOnr" to "addOne"
  const [count, setCount] = useState(0);
  const addOne = () => {
    // Remember to invoke setCount to update the state properly
    setCount((prevCount) => prevCount + 1);
  };
  const takeOne = () => {
    // Remember to invoke setCount to update the state properly
    setCount((prevCount) => prevCount - 1);
  };
  return (
    <div className="App">
      <h1>This is ftom app1</h1>
      <button onClick={addOne}>Increment</button>
      <button onClick={takeOne}>Increment</button>
      {/* Add missing angle bracket and remove extra curl bracket */}
      {/* Also, separate the word "Count" from the number "{count}" */}
      <p>Count: {count}</p>
    </div>
  );
}

export default App;
// Importing the necessary modules for our app.
// import { useState } from 'react'
// create the function named app(){} and declare a variable count using useState hook which returns an array with two values: count and setCount which is setter function- This hook allows us to create a state variable in our functional component.
//create a return that hold div, within div create a new a button that has a count.
//create onclick={} function to add one to the count everytime it is clicked.

//+--------------------------------------------------

// This is a simple React functional component that maintains a count state and provides a button to increment the count. Here's a breakdown of the code:

// Import the useState hook from the 'react' library.
// Define the App component, which is a functional component.
// Inside the App component, declare a state variable count with an initial value of 0 using the useState hook.
// Create a function addOne that increments the count state by 1 using the setCount function. Note that the setCount function takes a callback function that receives the previous count value and returns the new count value.
// Inside the return statement, render a button with an onClick event handler that calls the addOne function.
// Render a paragraph that displays the current count value using the count state variable.
// Export the App component as the default export so it can be used in other modules.
// There were a couple of issues in the original code:

// The function name typo: addOnr was corrected to addOne.
// The missing angle bracket and extra curly bracket in the paragraph element displaying the count were fixed.
// The word "Count" was separated from the number {count} to improve readability.
