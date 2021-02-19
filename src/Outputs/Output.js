import React from "react";
import "./output.css";

const output = function (props) {
  return (
    <div className="output_component">
      <p className="user">{props.name}</p>
      <p className="text">{props.text}</p>
    </div>
  );
};

export default output;
