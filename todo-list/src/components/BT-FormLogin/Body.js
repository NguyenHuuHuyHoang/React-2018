import React, { Component } from "react";

export default class Body extends Component {
  render() {
    return (
      <div>
        <h1 className="display-2">
          <strong>Sign in</strong>
        </h1>
        <div className="container mt-5">
          <div className="row">
            <div className="col-5 m-auto">
              <div className="form-group text-left border rounded">
                <label className="pl-3" htmlFor="userName">
                  Username
                </label>
                <input
                  type="text"
                  className="form-control border-0"
                  id="userName"
                />
              </div>
              <div className="form-group text-left border rounded">
                <label className="pl-3" htmlFor="userName">
                 Password
                </label>
                <input
                  type="password"
                  className="form-control border-0"
                  id="userName"
                />
              </div>
              <button className="btn btn-success w-100 p-3 mb-4">Sign in to Coderx</button>
              <div className="form-check mb-4">
                  <input type="checkbox" className="form-check-input" id="keepSignedIn"/>
                  <label htmlFor="keepSignedIn" className="form-check-label text-secondary">Keep me signed in</label>
            </div>
            <div className="d-flex justify-content-around">
                <a href="" className="text-decoration-none text-dark"><u><strong>Forgot Username</strong></u></a>
                <a href="" className="text-decoration-none text-dark"><u><strong>Forgot password ?</strong></u></a></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
