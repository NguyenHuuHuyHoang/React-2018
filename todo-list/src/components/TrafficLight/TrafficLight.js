import React, { Component } from "react";
import TrafficLightItem from "./TrafficLightItem";

const RED = 0;
const ORANGE = 1;
const GREEN = 2;

export default class TrafficLight extends Component {
  constructor() {
    super();
    this.state = {
      currentColor: RED,
      isStop: false,
    };

    setInterval(() => {
      if (!this.state.isStop) {
        this.setState({
          currentColor: this.TheNextColor(this.state.currentColor),
        });
      }
    }, 1000);
  }

  TheNextColor = (color) => {
    switch (color) {
      case RED:
        return ORANGE;
      case ORANGE:
        return GREEN;
      default:
        return RED;
    }
  };

  handleInputChange = (event) => {
    this.setState({
      isStop: !this.state.isStop,
    });
  };

  render() {
    return (
      <div className="text-left">
        <input
          name="isStop"
          type="checkbox"
          className="switch"
          onChange={this.handleInputChange}
        />
        <TrafficLightItem currentColor={this.state.currentColor} />
      </div>
    );
  }
}
