import React, { Component } from "react";
import menu from "../../img/menu.png";
import add from "../../img/add.png";
import NavBar from "../../styles/nav/navBar";
import Icons from "../../styles/nav/icons";

class Nav extends Component {
  state = {};
  render() {
    return (
      <NavBar>
        <Icons src={menu} alt="Menu" />
        <h3>My notes</h3>
        <Icons src={add} alt="New Note" />
      </NavBar>
    );
  }
}

export default Nav;
