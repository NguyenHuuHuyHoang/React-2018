import React, { Component } from "react";

export default class Form extends Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef()
    this.formReset = React.createRef()
  }

  componentDidMount() {
      this.inputRef.current.focus()
  }

  render() {
    return (
      <div>
          <form action="" ref={this.formReset}>
          <div className="form-group">
          <label htmlFor />
          <input
            type="email"
            className="form-control"
            name
            id
            aria-describedby="emailHelpId"
            placeholder
            ref={this.inputRef}
          />
          <small id="emailHelpId" className="form-text text-muted">
            Help text
          </small>
        </div>
        <div className="form-check form-check-inline">
          <label className="form-check-label">
            <input
              className="form-check-input"
              type="checkbox"
              name
              id
              defaultValue="checkedValue"
            />{" "}
            Display value
          </label>
        </div>
          </form>
        
        <button type="reset" class="btn btn-primary" onClick={()=>this.formReset.current.reset()}>
          Reset
        </button>
      </div>
    );
  }
}
