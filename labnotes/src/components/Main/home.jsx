import React, { Component } from "react";
import firebaseConfig from "../../firebase";

class Home extends Component {
    state = {};
    render() {
      return (
        <>
          <h1>HOME</h1>
          <p>Welcome, user</p>
          <button onClick={() => firebaseConfig.auth().signOut()}>Sign Out</button>
        </>
      )
    }
  }
  
  export default Home;