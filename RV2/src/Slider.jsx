import React, { useState } from "react";

function Slider() {
  const [sliderValue, setSliderValue] = useState(0);

  const handleSliderChange = (event) => {
    setSliderValue(parseInt(event.target.value));
  };

  return (
    <div>
      <input
        type="range"
        min="0"
        max="100"
        value={sliderValue}
        onChange={handleSliderChange}
      ></input>
      <p>Slider Value: {sliderValue}</p>
    </div>
  );
}

export default Slider;
