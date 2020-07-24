import React, { Component } from "react";

export default class Accordion extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isCollapsed: true,
    };
  }


  render() {
      const {heading, children} = this.props
      const {isCollapsed} = this.state
    return <div>
        <h3 onClick={()=> this.setState({isCollapsed: !isCollapsed})}>{heading}</h3>
        {!isCollapsed && (<p>{children}</p>)}
    </div>;
  }
}
