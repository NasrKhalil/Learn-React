// Storing selected radio buttons:
import React, { useState } from "react";

function RadioButtons() {
  const [selectedOption, setSelectedOption] = useState("option1");

  const handleRadioChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div>
      <input
        type="radio"
        id="option1"
        name="options"
        value="option1"
        checked={selectedOption === "option1"}
        onChange={handleRadioChange}
      />
      <label htmlFor="option1">Option 1</label>


      <input
        type="radio"
        id="option2"
        name="options"
        value="option2"
        checked={selectedOption === "option2"}
        onChange={handleRadioChange}
      />
      <label htmlFor="option2">Option 2</label>


      <input
        type="radio"
        id="option3"
        name="options"
        value="option3"
        checked={selectedOption === "option3"}
        onChange={handleRadioChange}
      />
      <label htmlFor="option3">Option 3</label>
      <p>Selected Option: {selectedOption}</p>
    </div>
  );
}

export default RadioButtons;
