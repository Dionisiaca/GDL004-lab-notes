import React, { Component } from "react";
import firebaseConfig from "../../firebase";
import Nav from "./Nav";

class Home extends Component {
  state = {};
  render() {
    return (
      <>
        <Nav />
        <h1>HOME</h1>
        <p>Welcome, user</p>
        <button onClick={() => firebaseConfig.auth().signOut()}>
          Sign Out
        </button>
      </>
    );
  }
}

export default Home;
