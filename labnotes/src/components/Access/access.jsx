import React, { useContext, useState } from "react";
import { withRouter, Redirect } from "react-router";
import firebaseConfig from "firebase";
import { AuthContext } from "../../auth";
import SocialMedia from "./SocialMedia";
import { Header, Div, P, Button, Input, ButtonsDiv } from "../../styles/Acess";

const Access = () => {
  const [input, setInput] = useState({ email: "", password: "" });
  const handleInputChange = (event) => {
    setInput({ ...input, [event.target.name]: event.target.value });
  };
  const handleAccess = (event) => {
    event.preventDefault();

    if (event.target.logInBtn.name === "logInBtn") {
      try {
        firebaseConfig
          .auth()
          .signInWithEmailAndPassword(input.email, input.password);
        //.then((user) => {});
      } catch (error) {
        alert(error);
      }
    } else if (event.target.SignUpBtn.name === "SignUpBtn") {
      try {
        firebaseConfig
          .auth()
          .createUserWithEmailAndPassword(input.email, input.password);
        //.then((user) => {});
      } catch (error) {
        const errorCode = error.code;
        switch (errorCode) {
          case "auth/weak-password":
            console.log("*Password must contain more than 6 characters");
            break;
          case "auth/email-already-in-use":
            console.log("*Email already in use in another account");
            break;
          case "auth/invalid-email":
            console.log("*Use a valid email");
            break;
          default:
            console.log("*Something went wrong. Try again!");
        }
      }
    }
  };

  const { currentUser } = useContext(AuthContext); //using auth context

  if (currentUser) {
    return <Redirect to="/home" />;
  }

  return (
    <Div>
      <Header>Welcome back!</Header>
      <form id="accessForm" onSubmit={handleAccess}>
        <div id="errorMsg"></div>
        <P primary>email</P>
        <Input
          name="email"
          type="email"
          placeholder="name@email.com"
          className="input"
          value={input.email}
          onChange={handleInputChange}
        ></Input>
        <P primary>password</P>
        <Input
          name="password"
          type="password"
          placeholder="• • • • • •"
          className="input"
          value={input.password}
          onChange={handleInputChange}
        ></Input>
        <ButtonsDiv>
          <Button
            primary
            type="submit"
            name="logInBtn"
            value="logInBtn"
            //onClick={handleAccess}
          >
            Log In
          </Button>
          <Button
            type="submit"
            name="SignUpBtn"
            value="SignUpBtn"
            //onClick={() => handleAccess('signUp')}
          >
            Sign Up
          </Button>
        </ButtonsDiv>
      </form>
      <SocialMedia />
    </Div>
  );
};

export default withRouter(Access);
