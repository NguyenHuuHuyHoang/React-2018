import React, { Component } from "react";

export default class FormInput extends Component {
  constructor() {
    super();

    this.state = {
      content: "",
    };
  }

  EventInputHandler = (event) => {
    this.setState({
      content: event.target.value,
    });
  };

  render() {
    return (
      <div>
        <h2>Binding value</h2>
        <p id="binding-block">Hello, {this.state.content}</p>
        <input
          id="typing-area"
          type="text"
          placeholder="Nhap ten cua ban"
          onChange={this.EventInputHandler}
        ></input>
      </div>
    );
  }
}
