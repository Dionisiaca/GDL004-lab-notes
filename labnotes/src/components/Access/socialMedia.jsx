import React, { Component } from "react";
import Google from "../../img/google.png";
import Github from "../../img/github.png";

class SocialMedia extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <p>or connect with</p>
        <img src={Google} alt="Google" />;
        <img src={Github} alt="Github" />;
      </React.Fragment>
    );
  }
}

export default SocialMedia;
