import React, { useContext, useState } from "react";
import firebase from "firebase/app";
import "firebase/auth";
import { UserContext } from "../../App";
import { useHistory, useLocation } from "react-router-dom";
import firebaseConfig from "./firebase.config";
import googleImg from "../../icons/google-img.png";
import "./Login.css";

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app();
}

const Login = () => {
  // eslint-disable-next-line
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const history = useHistory();
  const location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };
  // eslint-disable-next-line
  const [user, setUser] = useState({
    isSignedIn: false,
    name: "",
    email: "",
  });
  const handleGoogleSignIn = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        const { displayName, email } = result.user;
        const signedInUser = {
          isSignedIn: true,
          name: displayName,
          email: email,
        };
        setUser(signedInUser);
        setLoggedInUser(signedInUser);
        history.replace(from);
        const user = result.user;
        console.log(user);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <button
        onClick={handleGoogleSignIn}
        className="signIn-btn btn btn-outline-primary"
      >
        {" "}
        <img src={googleImg} alt="" />
        <span>Sign in with Google</span>
      </button>
    </div>
  );
};

export default Login;
