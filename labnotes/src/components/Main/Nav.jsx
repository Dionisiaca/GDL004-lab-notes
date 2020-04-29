import React from "react";
import firebaseConfig from "../../firebase";
import { Link } from "react-router-dom";
import logout from "../../img/logout.png";
import add from "../../img/add.png";
import profile from "../../img/profile.png";
import { NavBar, Icons } from "../../styles/Nav";

const Nav = () => {
  return (
    <NavBar>
      <Icons
        src={logout}
        alt="Log out"
        onClick={() => firebaseConfig.auth().signOut()}
      />
      <Link to="/newnote">
        <Icons src={add} alt="New Note" />
      </Link>
      <Link to="/profile">
        <Icons src={profile} alt="Profile" />
      </Link>
    </NavBar>
  );
};

export default Nav;
