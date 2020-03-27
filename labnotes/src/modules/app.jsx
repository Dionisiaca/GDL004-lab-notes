import React, { Component } from "react";
import FullLogo from "./fullLogo";
import Form from "./form";
import SocialMedia from "./socialMedia";

class App extends Component {
  state = {};
  render() {
    return (
      <div>
        <FullLogo />
        <Form />
        <SocialMedia />
      </div>
    );
  }
}

export default App;
