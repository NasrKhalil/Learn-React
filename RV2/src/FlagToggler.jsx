import React, { useState } from "react";

function FlagToggler() {
  const [flag, setFlag] = useState(true);

  return (
    <div>
      <p>Flag Value: {flag ? "Enabled" : "Disabled"} </p>
      <button onClick={() => setFlag(!flag)}>Toggle Flag</button>
    </div>
  );
}

export default FlagToggler;
