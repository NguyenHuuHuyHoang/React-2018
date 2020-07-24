import React, { Component } from "react";
import Report from "./Report";

export default class CompletedReport extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <div className="d-flex justify-content-between align-items-center mt-2">
            <span className="text-secondary">Portfolio Performance</span>
            <button className="btn btn-default viewAll">View all</button>
          </div>
          <div className="row border-top border-bottom pt-2 pb-2 mt-3">
            <div className="col-4">
              <Report>1.7M</Report>
            </div>
            <div className="col-4">
              <Report>1.7M</Report>
            </div>
            <div className="col-4">
              <Report>1.7M</Report>
            </div>
          </div>
          <button className="btn btn-primary mt-3 viewReport">
            View complete report
          </button>
        </div>
      </div>
    );
  }
}
