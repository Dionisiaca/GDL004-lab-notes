import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/Main/home";
import Access from "./components/Access/access";
import { AuthProvider } from "./auth";
import PrivateRoute from "./privateRoute";

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <PrivateRoute exact path="/home" component={Home} />
        <Route exact path="/" component={Access} />
        <Route exact path="/access" component={Access} />
      </Router>
    </AuthProvider>
  );
};

export default App;
