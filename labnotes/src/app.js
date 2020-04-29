import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/Main/Home";
import Access from "./components/Access/Access";
import CreateNote from "./components/New Note/CreateNote";
import { AuthProvider } from "./auth";
import PrivateRoute from "./privateRoute";
import Welcome from "./components/Welcome";
import Profile from "./components/Profile";
import Edit from "./components/Edit";

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <PrivateRoute exact path="/home" component={Home} />
        <Route exact path="/" component={Welcome} />
        <Route exact path="/access" component={Access} />
        <PrivateRoute exact path="/newnote" component={CreateNote} />
        <PrivateRoute exact path="/profile" component={Profile} />
        <PrivateRoute exact path="/edit" component={Edit} />
      </Router>
    </AuthProvider>
  );
};

export default App;
