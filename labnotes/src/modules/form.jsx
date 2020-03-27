import React, { Component } from "react";

class Form extends Component {
  state = {};
  render() {
    return (
      <form>
        <input
          type="email"
          className="form-control"
          placeholder="email"
        ></input>
        <input
          type="password"
          className="form-control"
          placeholder="password"
        ></input>
        <button className="btn btn-primary m-2">Log In</button>
        <button className="btn btn-primary m-2">Register</button>
      </form>
    );
  }
}

export default Form;
