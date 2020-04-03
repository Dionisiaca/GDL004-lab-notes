import React, { Component } from "react";
import logo from "../../img/fullLogo.png";

class FullLogo extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <img src={logo} alt="Logo" />;
      </React.Fragment>
    );
  }
}

export default FullLogo;
