import React, { useState } from "react";

function DateChanger() {
  const [date, setDate] = useState(new Date());

  const updateDate = () => {
    setDate(new Date());
  };

  return (
    <div>
      <p>Current Date: {date.toLocaleString()} </p>
      <button onClick={updateDate}>Update Date</button>
    </div>
  );
}

export default DateChanger;
