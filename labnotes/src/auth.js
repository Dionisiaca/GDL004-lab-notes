import React, { useEffect, useState } from "react";
import firebaseConfig from "./firebase";

export const AuthContext = React.createContext(); // react tool to propagate data through the whole component

export const AuthProvider = ({ children }) => {
  //Storing the auth status
  const [currentUser, setCurrentUser] = useState(null);
  const [pending, setPending] = useState(true);

  useEffect(() => {
    // hook to sign up for changes
    firebaseConfig.auth().onAuthStateChanged((user) => {
      setCurrentUser(user);
      setPending(false);
    });
  }, []);

  if (pending) {
    return <>Loading...</>;
  }

  return (
    <AuthContext.Provider
      value={{
        currentUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
