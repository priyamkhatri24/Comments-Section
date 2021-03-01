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
    const commentsArr = [...this.state.comments];
    commentsArr.push({
      username: this.state.username,
      userInput: this.state.userInput,
      id: this.state.userInput.slice(0, 3) + this.state.username.slice(0, 3),
    });

    this.setState({
      submit: true,
      username: "",
      userInput: "",
      comments: commentsArr,
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

  deleteCommentHandler = (id) => {
    const commentsArr = [...this.state.comments];
    const commentIndex = commentsArr.findIndex((ele) => ele.id === id);
    commentsArr.splice(commentIndex, 1);
    this.setState({ comments: commentsArr });
  };

  render() {
    console.log(this);
    let output = null;
    if (this.state.submit) {
      output = this.state.comments.map((ele) => {
        return (
          <Output
            name={ele.username}
            text={ele.userInput}
            key={ele.id}
            delete={this.deleteCommentHandler.bind(this, ele.id)}
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
          name={this.state.username}
          text={this.state.userInput}
        />
        {output}
      </div>
    );
  }
}

export default App;
