import React from "react";

function Comp1() {
  const age = 23;
  const kkk = "nasr"; // Constants should begin with uppercase letters per convention.
  // Variable substitution in JSX should be done with curly braces only once, and the variable should NOT be surrounded by quotes.
  function greet(name,age){
    return  `Hello, my name is ${name} and I am ${age} years old.`;
  }
  return (
    <div>
      <h1>
        {greet("Omar",12)}
        {/* call the function within the {curly braces} */}
      </h1>
    </div>
  );
}

// The component name should start with an uppercase character.
export default Comp1;

