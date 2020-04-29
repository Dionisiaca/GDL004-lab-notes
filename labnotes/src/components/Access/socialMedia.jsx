import React, { Component } from "react";
import Google from "../../img/google.png";
import Github from "../../img/github.png";
import Facebook from "../../img/facebook.png";
import { Div, P, ButtonsDiv } from "../../styles/socialMedia";

class SocialMedia extends Component {
  state = {};
  render() {
    return (
      <Div>
        <P>or connect with</P>
        <ButtonsDiv>
          <img src={Google} alt="Google" />
          <img src={Facebook} alt="Facebook" />
          <img src={Github} alt="Github" />
        </ButtonsDiv>
      </Div>
    );
  }
}

export default SocialMedia;
