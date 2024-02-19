import React from "react";

function Comp1() {
  const age = 23;
  const kkk = "nasr"; // Constants should begin with uppercase letters per convention.
  // Variable substitution in JSX should be done with curly braces only once, and the variable should NOT be surrounded by quotes.
  function greet(name, age) {
    if (age >= 18) {
      return `Hello, my name is ${name} and I am ${age} years old. Welcome to the adult world!`;
    } else {
      return `Hello, my name is ${name} and I am ${age} years old. Comeback when you turn 18!`;
    }
  }
  return (
    <>
    {/* fragment can hold many divs as you want */}
      <div>
        <h1>{greet("Omar", 12)}</h1>
        {/* call the function within the {curly braces} */}
      </div>
    </>
  );
}

// The component name should start with an uppercase character.
export default Comp1;

// The component now has a Fragment (empty tags '<>' and '</>'), which groups the <div> and the comment together. Comments in JSX should be placed within curly braces.

// There can be multiple Fragments in the return statement of a React component. They can be nested or mixed with other elements. But, keep in mind that too many nested levels of Fragments can lead to complicated code and possibly impact performance negatively. Therefore, it's generally a good idea to limit the number of nested Fragments and use them judiciously



// This is a React component written in JavaScript called Comp1. It defines a function greet that takes arguments, name and age and returns a greeting message based on the value of age`. If the person's age is 18 or above, the message welcomes them to the adult world. Otherwise, it tells them to come back when they turn18.

// The component also defines a constant age with a value of 23 and a constant kkk with a value of "nasr". However, the naming convention for constants in JavaScript recommends starting them with an uppercase letter, so kkk should be renamed to something like Kkk.

// The component returns a JSX expression that renders a <div> element containing an <h1> element. The <h1> element displays the result of calling the greet function with the arguments "Omar" and 12.

// The component also uses a React fragment, denoted by the empty tags <></>, to group the <div> element and the comment together. This is useful when a component needs to return multiple elements, but React requires a single parent element to wrap them.

// Finally, the component is exported as the default export of the module, allowing it to be imported and used in other parts of the application.

// Overall, this code demonstrates how to define a simple React component that renders a greeting message based on user input. It also follows some best practices for naming conventions and code organization.
