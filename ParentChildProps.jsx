

//Parent Component:


import React from 'react';
import ChildComponent from './ChildComponent';

const ParentComponent = () => {
  const name = 'Alice';
  return <ChildComponent name={name} />;
};

export default ParentComponent;


//Child Component:


import React from 'react';

const ChildComponent = (props) => {
  return <div>Hi, {props.name}!</div>;
};

export default ChildComponent;


//Example 2: Passing a number as a prop


//Parent Component:


import React from 'react';
import ChildComponent from './ChildComponent';

const ParentComponent = () => {
  const age = 25;
  return <ChildComponent age={age} />;
};

export default ParentComponent;


//Child Component:


import React from 'react';

const ChildComponent = (props) => {
  return <div>You are {props.age} years old.</div>;
};

export default ChildComponent;


//Example 3: Passing an array as a prop


//Parent Component:


import React from 'react';
import ChildComponent from './ChildComponent';

const ParentComponent = () => {
  const colors = ['red', 'green', 'blue'];
  return <ChildComponent colors={colors} />;
};

export default ParentComponent;


//Child Component:


import React from 'react';

const ChildComponent = (props) => {
  return (
    <ul>
      {props.colors.map((color) => (
        <li key={color}>{color}</li>
      ))}
    </ul>
  );
};

export default ChildComponent;


//Example 4: Passing an object as a prop


//Parent Component:


import React from 'react';
import ChildComponent from './ChildComponent';

const ParentComponent = () => {
  const person = { name: 'Bob', age: 30 };
  return <ChildComponent person={person} />;
};

export default ParentComponent;


//Child Component:


import React from 'react';

const ChildComponent = (props) => {
  return (
    <div>
      Hi, {props.person.name}! You are {props.person.age} years old.
    </div>
  );
};

export default ChildComponent;


//Example 5: Passing a function as a prop


//Parent Component:


import React from 'react';
import ChildComponent from './ChildComponent';

const ParentComponent = () => {
  const handleClick = () => {
    console.log('Button clicked!');
  };
  return <ChildComponent onClick={handleClick} />;
};

export default ParentComponent;


//Child Component:


import React from 'react';

const ChildComponent = (props) => {
  return <button onClick={props.onClick}>Click me!</button>;
};

export default ChildComponent;


//Example 6: Passing a boolean as a prop


//Parent Component:


import React from 'react';
import ChildComponent from './ChildComponent';

const ParentComponent = () => {
  const isLoggedIn = true;
  return <ChildComponent isLoggedIn={isLoggedIn} />;
};

export default ParentComponent;


//Child Component:


import React from 'react';

const ChildComponent = (props) => {
  return (
    <div>
      {props.isLoggedIn ? (
        <div>Welcome back, user!</div>
      ) : (
        <div>Please sign up.</div>
      )}
    </div>
  );
};

export default ChildComponent;


//Example 7: Passing a null value as a prop

//Parent Component:


import React from 'react';
import ChildComponent from './ChildComponent';

const ParentComponent = () => {
  const user = null;
  return <ChildComponent user={user} />;
};

export default ParentComponent;


//Child Component:


import React from 'react';

const ChildComponent = (props) => {
  return (
    <div>
      {props.user ? (
        <div>Hi, {props.user.name}!</div>
      ) : (
        <div>No user found.</div>
      )}
    </div>
  );
};

export default ChildComponent;


//Example 8: Passing a React element as a prop


//Parent Component:


import React from 'react';
import ChildComponent from './ChildComponent';

const ParentComponent = () => {
  const header = <h1>Hello, world!</h1>;
  return <ChildComponent header={header} />;
};

export default ParentComponent;


//Child Component:


import React from 'react';

const ChildComponent = (props) => {
  return <div>{props.header}</div>;
};

export default ChildComponent;


//Example 9: Passing a ref as a prop


//Parent Component:


import React, { useRef } from 'react';
import ChildComponent from './ChildComponent';

const ParentComponent = () => {
  const inputRef = useRef(null);
  return <ChildComponent inputRef={inputRef} />;
};

export default ParentComponent;


//Child Component:


import React from 'react';

const ChildComponent = (props) => {
  return <input type="text" ref={props.inputRef} />;
};

export default ChildComponent;


//Example 10: Passing default props


//Parent Component:


import React from 'react';
import ChildComponent from './ChildComponent';

const ParentComponent = () => {
  return <ChildComponent />;
};

export default ParentComponent;


//Child Component:


import React from 'react';

const ChildComponent = (props) => {
  const defaultName = 'Guest';
  const name = props.name || defaultName;
  return <div>Hello, {name}!</div>;
};

ChildComponent.defaultProps = {
  name: null,
};

export default ChildComponent;

