import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { AuthContext } from "./auth";

//indicating which component should be rendered if user is authenticated
const PrivateRoute = ({ component: RouteComponent, ...rest }) => {
  const { currentUser } = useContext(AuthContext); // hook from auth
  return (
    <Route
      {...rest}
      render={(routeProps) =>
        !!currentUser ? (
          <RouteComponent {...routeProps} /> //if we have an user we render the route component
        ) : (
          <Redirect to={"/access"} /> //if we don't we redirect to access page
        )
      }
    />
  );
};

export default PrivateRoute;
