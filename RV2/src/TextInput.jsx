//Storing a text input value:
import React, { useState } from "react";

function TextInput() {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
      ></input>
      <p>Input Value: {inputValue}</p>
    </div>
  );
}

export default TextInput;
