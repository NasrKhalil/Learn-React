// File: src/components/UserInfoForm.js

import React, { useState } from "react";

function UserInfoForm() {
  const [userInfo, setUserInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  const [statusMsg, setStatusMsg] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", userInfo);
    // Perform form processing here
    setUserInfo({ firstName: "", lastName: "", email: "" });
    setStatusMsg("Thanks for submitting the form.");
  };

  const handleChange = (e) => {
    setUserInfo({
      ...userInfo,
      [e.target.name]: e.target.value,
    });
    setStatusMsg("");
  };

  return (
    <div>
      <h2>User Information Form</h2>
      {statusMsg && <p>{statusMsg}</p>}
      <form onSubmit={handleSubmit}>
        <label>First Name:</label>
        <input
          type="text"
          name="firstName"
          value={userInfo.firstName}
          onChange={handleChange}
          required
        />
        <br />
        <label>Last Name:</label>
        <input
          type="text"
          name="lastName"
          value={userInfo.lastName}
          onChange={handleChange}
          required
        />
        <br />
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={userInfo.email}
          onChange={handleChange}
          required
        />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

// Following convention, component names should start with an uppercase character.
export default UserInfoForm;

// Don't forget to import and use this component in your App component or wherever you want to include the form.
