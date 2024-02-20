import React, { useState } from "react";

function UserEditor() {
  const [user, setUser] = useState({ name: "John", age: 25 });

  const editProperty = (property, newValue) => {
    setUser({ ...user, [property]: newValue });
  };

  return (
    <div>
      <p>User Name: {user.name}</p>
      <p>User Age: {user.age}</p>
      <button onClick={() => editProperty("name", "Jack")}>Edit Name</button>
      <button onClick={() => editProperty("age", 30)}>Edit Age</button>
    </div>
  );
}

export default UserEditor;
