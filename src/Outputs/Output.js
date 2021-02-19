import React from "react";
import "./output.css";

const output = function (props) {
  return (
    <div className="output_component">
      <div className="output">
        <p className="user">{props.name}</p>
        <ion-icon onClick={props.delete} name="trash-outline"></ion-icon>
      </div>
      <p className="text">{props.text}</p>
    </div>
  );
};

export default output;
