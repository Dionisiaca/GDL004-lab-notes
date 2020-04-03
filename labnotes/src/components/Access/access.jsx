import FullLogo from "./fullLogo";
//import Form from "./form";
import SocialMedia from "./socialMedia";
import React, { useCallback, useContext } from "react";
import { withRouter, Redirect } from "react-router";
import firebaseConfig from "firebase";
import {AuthContext} from "../../auth";

const Access = ({ history }) => {

  const handleSignUp = useCallback(async event => {
    event.preventDefault();
    const { email, password } = event.target.elements;
    try {
      await firebaseConfig
        .auth()
        .createUserWithEmailAndPassword(email.value, password.value);
      history.push("/home");
    }catch(error) {
      alert(error);
    }
  }, [history]);

  const handleLogIn = useCallback(async event => {
    event.preventDefault();
    const { email, password } = event.target.elements;
    try {
      await firebaseConfig
        .auth()
        .signInWithEmailAndPassword(email.value, password.value);
      history.push("/home");
    }catch(error) {
      alert(error);
    }
  }, [history]);

  const { currentUser } = useContext(AuthContext);

  if (currentUser) {
    return <Redirect to="/home" />;
  }

  return(
    <div>
        <FullLogo />
        <form>
          <input
            name='email'
            type="email"
            placeholder="email"
          ></input>
          <input
            name='password'
            type="password"
            placeholder="password"
          ></input>
          <button onSubmit={handleLogIn}>Log In</button>
          <button onSubmit={handleSignUp}>Register</button>
        </form>
        <SocialMedia />
      </div>
  );
};

export default withRouter(Access);


/*class Access extends Component {
  state = {};
  render() {
    return (
      <div>
        <FullLogo />
        <form>
          <input
            name='email'
            type="email"
            placeholder="email"
          ></input>
          <input
            name='password'
            type="password"
            placeholder="password"
          ></input>
          <button onSubmit={handleLogIn}>Log In</button>
          <button onSubmit={handleSignUp}>Register</button>
        </form>
        <SocialMedia />
      </div>
    );
  }
}*/