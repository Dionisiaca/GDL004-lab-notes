import FullLogo from "./fullLogo";
import SocialMedia from "./socialMedia";
import React, { useCallback, useContext } from "react";
import { withRouter, Redirect } from "react-router";
import firebaseConfig from "firebase";
import { AuthContext } from "../../auth";
import "../../myStyles.css";
import background from "../../img/background.png";

const Access = ({ history }) => {
  const handleAccess = useCallback(
    async (event) => {
      event.preventDefault();
      const { email, password } = event.target.elements;
      const submitType = document
        .getElementById("accessForm")
        .getAttribute("value");
      console.log(submitType);
      if (submitType == "logInBtn") {
        try {
          await firebaseConfig
            .auth()
            .signInWithEmailAndPassword(email.value, password.value);
          console.log("you logged in!");
          history.push("/home");
        } catch (error) {
          alert(error);
        }
      } else if (submitType == "SignUpBtn") {
        try {
          await firebaseConfig
            .auth()
            .createUserWithEmailAndPassword(email.value, password.value);
          console.log("you signed up!");
          history.push("/home");
        } catch (error) {
          alert(error);
        }
      }
    },
    [history]
  );
  /*const handleSignUp = useCallback(
    async (event) => {
      event.preventDefault();
      const { email, password } = event.target.elements;
      try {
        await firebaseConfig
          .auth()
          .createUserWithEmailAndPassword(email.value, password.value);
        //console.log("you signed up!");
        history.push("/home");
      } catch (error) {
        alert(error);
      }
    },
    [history]
  );

  const handleLogIn = useCallback(
    async (event) => {
      event.preventDefault();
      const { email, password } = event.target.elements;
      try {
        await firebaseConfig
          .auth()
          .signInWithEmailAndPassword(email.value, password.value);
        history.push("/home");
      } catch (error) {
        alert(error);
      }
    },
    [history]
  );*/

  const { currentUser } = useContext(AuthContext); //using auth context

  if (currentUser) {
    return <Redirect to="/home" />;
  }

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexFlow: "column",
      }}
    >
      <FullLogo />
      <form id="accessForm" onSubmit={handleAccess}>
        <input
          name="email"
          type="email"
          placeholder="email"
          className="input"
        ></input>
        <input
          name="password"
          type="password"
          placeholder="password"
          className="input"
        ></input>
        <button
          type="submit"
          name="accessBtn"
          value="logInBtn"
          className="button"
          style={{ color: "FED1A7" }}
        >
          Log In
        </button>
        <button
          type="submit"
          name="accessBtn"
          value="SignUpBtn"
          className={"button"}
          style={{ color: "FFBE18" }}
        >
          Register
        </button>
      </form>
      <SocialMedia />
    </div>
  );
};

export default withRouter(Access);
