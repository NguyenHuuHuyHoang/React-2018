import React, { Component } from "react";
import Icon from "./Icon";

export default class ListIcon extends Component {
  render() {
    return (
      <div>
        <div className="container ">
          <div className="row">
            <div className="col-4 d-flex m-auto">
              <Icon objData={{icon: "fa fa-home", text: "Home"}}/>
              <Icon objData={{icon: "fa fa-gift", text: "Deals"}}/>
              <Icon objData={{icon: "fa fa-cloud-upload", text: "Upload"}}/>
              <Icon objData={{icon: "fa fa-coffee", text: "Work"}}/>
              <Icon objData={{icon: "fa fa-cog", text: "Setting"}}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
