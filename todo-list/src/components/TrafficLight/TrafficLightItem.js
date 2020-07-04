import React, { Component } from "react";
import classNames from "classnames";

export default class TrafficLightItem extends Component {
  render() {
    return (
      <div>
        <div>
          <div
            className={classNames("bulb", "red", {
              active: this.props.currentColor === 0,
            })}
          ></div>
          <div
            className={classNames("bulb", "orange", {
              active: this.props.currentColor === 1,
            })}
          ></div>
          <div
            className={classNames("bulb", "green", {
              active: this.props.currentColor === 2,
            })}
          ></div>
        </div>
      </div>
    );
  }
}
