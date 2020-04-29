import React, { Component } from "react";
import { Link } from "react-router-dom";
import save from "../../img/save.png";
import { NavBar, Icons } from "../../styles/Nav";

class NewNoteNav extends Component {
  state = {};
  render() {
    return (
      <NavBar>
        <Link to="/home">
          <Icons src={save} alt="New Note" />
        </Link>
      </NavBar>
    );
  }
}

export default NewNoteNav;
