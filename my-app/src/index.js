import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import App from "./App";
import Hobbies from "./components/Hobbies";
import Comp1 from "./components/comp1";
import Comp2 from "./components/comp2";
import Form from "./components/Form";
import Rev from "./components/Rev";
import reportWebVitals from "./reportWebVitals";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Comp1 />
    <Hobbies/>
    <Rev/>
    <Form/>
    <Comp2 />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
