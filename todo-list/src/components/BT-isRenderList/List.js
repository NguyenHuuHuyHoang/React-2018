import React, { Component } from "react";
import ListItem from "./ListItem";

export default class List extends Component {
  isRender = true;

  render() {
    return (
      <div>
        <p>Use only HTML to set list type</p>
        <ol type="1">{this.isRender && <ListItem />}</ol>
        <ol type="A">{this.isRender && <ListItem />}</ol>
        <ol type="a">{this.isRender && <ListItem />}</ol>
        <ol type="I">{this.isRender && <ListItem />}</ol>
        <ol type="i">{this.isRender && <ListItem />}</ol>
        <ol start="24">{this.isRender && <ListItem />}</ol>
      </div>
    );
  }
}
