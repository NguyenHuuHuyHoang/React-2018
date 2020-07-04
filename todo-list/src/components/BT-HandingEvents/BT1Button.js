import React, { Component } from "react";


export default class BT1Button extends Component {
  constructor() {
    super();
    this.state = {
      display: true,
    };
  }

  ClickMe = () => {
    this.setState({
      display: !this.state.display,
    });
  };
  render() {
    return (
      <div>
        <button className="btn btn-primary" onClick={this.ClickMe}>
          Click me
        </button>
        <p
          className={this.state.display ? "d-block" : "d-none"}
        >
          You are amazing :v
        </p>
      </div>
    );
  }
}
