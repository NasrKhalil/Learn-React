//Storing checkboxes:
import React, { useState } from "react";

function CheckBoxes() {
  const [selectedValues, setSelectedValues] = useState([]);

  const handleCheckboxChange = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      setSelectedValues((prevValues) => [...prevValues, value]);
    } else {
      setSelectedValues((prevValues) =>
        prevValues.filter((v) => v !== value)
      );
    }
  };

  return (
    <div>
      <input
        type="checkbox"
        value="Option 1"
        checked={selectedValues.includes("Option 1")}
        onChange={handleCheckboxChange}
      />
      <label htmlFor="Option 1">Option 1</label>


      <input
        type="checkbox"
        value="Option 2"
        checked={selectedValues.includes("Option 2")}
        onChange={handleCheckboxChange}
      />
      <label htmlFor="Option 2">Option 2</label>


      <input
        type="checkbox"
        value="Option 3"
        checked={selectedValues.includes("Option 3")}
        onChange={handleCheckboxChange}
      />
      <label htmlFor="Option 3">Option 3</label>
      <p>Selected Options: {selectedValues.join(", ")}</p>
    </div>
  );
}

export default CheckBoxes;
