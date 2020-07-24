import React, { Component } from "react";
import PercentCompare from "./PercentCompare";

export default class Report extends Component {
  render() {
    const { children } = this.props;
    return (
      <div className="container">
        <div className="row d-flex align-items-center">
          <div className="col-4 ">
            <div className="circle"></div>
          </div>
          <div className="col-8 text-left">
            <p className="text-secondary">Cash Deposits</p>
            <h2>{children}</h2>
            <PercentCompare>54.1% less earnings</PercentCompare>
          </div>
        </div>
      </div>
    );
  }
}
