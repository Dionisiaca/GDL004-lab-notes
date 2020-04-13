import React, { Component } from "react";
import Google from "../../img/google.png";
import Github from "../../img/github.png";
import DivSecondary from "../../styles/divSecondary";
import P from "../../styles/p";

class SocialMedia extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <P>or connect with</P>
        <DivSecondary>
          <img src={Google} alt="Google" />
          <img src={Github} alt="Github" />
        </DivSecondary>
      </React.Fragment>
    );
  }
}

export default SocialMedia;
