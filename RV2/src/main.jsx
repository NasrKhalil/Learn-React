import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import A1 from "./A1.jsx";
import A2 from "./A2.jsx";
import A3 from "./A3.jsx";
import A4 from "./A4.jsx";
import UState from "./uState.jsx";
import FlagToggler from "./FlagToggler.jsx";
import ArrayPusher from "./ArrayPusher.jsx";
import DateChanger from "./DateChanger.jsx";
import UserEditor from "./UserEditor.jsx";
import RadioButtons from "./RadioButtons.jsx";
import DropDownMenu from "./DropDownMenu.jsx";
import TextInput from "./TextInput.jsx";
import CheckBoxes from "./CheckBoxes.jsx";
import Slider from "./Slider.jsx";
// import A5 from './A5.jsx'

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
    <A1 />
    <A2 />
    <A3 />
    <A4 />
    <UState />
    <FlagToggler />
    <ArrayPusher />
    <DateChanger />
    <UserEditor />
    <RadioButtons />
    <DropDownMenu />
    <TextInput />
    <CheckBoxes />
    <Slider />

    {/* <A5/> */}
  </React.StrictMode>
);
