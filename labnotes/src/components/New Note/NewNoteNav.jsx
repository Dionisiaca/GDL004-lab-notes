import React, { Component } from "react";
import { Link } from "react-router-dom";
import menu from "../../img/menu.png";
import save from "../../img/save.png";
import NavBar from "../../styles/nav/navBar";
import Icons from "../../styles/nav/icons";

class NewNoteNav extends Component {
  state = {};
  render() {
    return (
      <NavBar>
        <Icons src={menu} alt="Menu" />
        <h3>My notes</h3>
        <Link to="/home">
          <Icons src={save} alt="New Note" />
        </Link>
      </NavBar>
    );
  }
}

export default NewNoteNav;
