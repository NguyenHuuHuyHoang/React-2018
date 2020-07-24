import React, { Component } from "react";

export default class PercentCompare extends Component {
  render() {
    const { children } = this.props;
    return (
      <div className="d-flex ">
        <i class="fa fa-angle-down" aria-hidden="true"></i>
        <span className="text-secondary ml-2">{children}</span>
      </div>
    );
  }
}
