import React from "react";
import "./Button.css";

function Button({ handleClick, title }) {
  return <button onClick={handleClick}>{title}</button>;
}

export default Button;
