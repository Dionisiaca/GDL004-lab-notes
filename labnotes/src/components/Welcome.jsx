import React from "react";
import { Link } from "react-router-dom";
import { Div, H2, P, Button } from "../styles/Welcome";

const Welcome = () => {
  return (
    <Div>
      <H2>labnotes</H2>
      <P>all your thoughts and ideas in one place</P>
      <Link to="/access">
        <Button>get started</Button>
      </Link>
    </Div>
  );
};

export default Welcome;
