

// File: src/components/MyHobbies.js

import React from "react";

function Rev() {
const person = {
firstName: "John Doe",
age: 23
};

const interests = [
{ id: 1, name: "Reading" },
{ id: 2, name: "Hiking" },
{ id: 3, name: "Traveling" },
];

return (
<div>
<h1>
Hello, my name is {person.firstName} and I am {person.age} years old.
</h1>
<h2>My Interests:</h2>
<ul>
{interests.map((interest) => (
<li key={interest.id}>{interest.name}</li>
))}
</ul>
</div>
);
}

// Following convention, component names should start with an uppercase character.
export default Rev;

// Notice that the component name has been changed to "MyHobbies" and the data structure has been adjusted to include an ID property in the interests array.
