import React from "react";
import "./input.css";

const input = function (props) {
  return (
    <div className="input_component">
      <input
        value={props.name}
        onChange={props.username}
        type="text"
        className="username"
        placeholder="Enter Username"
      />
      <textarea
        onChange={props.userInput}
        type="text"
        className="para_input"
        placeholder="Whats in your mind..."
        value={props.text}
      />
      <button onClick={props.clicked} className="submit">
        Submit
      </button>
    </div>
  );
};

export default input;
