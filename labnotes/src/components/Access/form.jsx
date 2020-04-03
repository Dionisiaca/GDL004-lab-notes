import React, { Component } from "react";

class Form extends Component {
  state = {};
  render() {
    return (
      <form>
        <input
          type="email"
          placeholder="email"
        ></input>
        <input
          type="password"
          placeholder="password"
        ></input>
        <button onSubmit={handleLogIn}>Log In</button>
        <button onSubmit={handleSignUp}>Register</button>
      </form>
    );
  }
}

export default  Form;
