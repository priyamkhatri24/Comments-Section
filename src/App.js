import "./App.css";
import React, { Component } from "react";
import Input from "./Input/Input.js";
import Output from "./Outputs/Output";

class App extends Component {
  state = {
    username: "",
    userInput: "",
    comments: [],
    submit: false,
  };

  formSubmitHandler = (e) => {
    this.state.comments.push({
      username: this.state.username,
      userInput: this.state.userInput,
    });

    this.setState({
      submit: true,
      username: "",
      userInput: "",
    });
  };

  getUsernameHandler = (e) => {
    this.setState({
      username: e.target.value,
    });
  };

  getUserInputHandler = (e) => {
    this.setState({
      userInput: e.target.value,
    });
  };

  formClearHandler = (e) => {
    e.target.value = "";
  };

  render() {
    let output = null;
    if (this.state.submit) {
      output = this.state.comments.map((ele) => {
        return (
          <Output
            name={ele.username}
            text={ele.userInput}
            key={Math.ceil(Math.random() * 100000)}
          />
        );
      });
    }
    return (
      <div className="App">
        <h1 className="heading">Comments Section</h1>
        <Input
          userInput={this.getUserInputHandler}
          username={this.getUsernameHandler}
          clicked={this.formSubmitHandler}
          clear={this.formClearHandler}
          name={this.state.username}
          text={this.state.userInput}
        />
        {output}
      </div>
    );
  }
}

export default App;
