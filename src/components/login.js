import { auth, firebaseRef } from "../config";
import {Button} from "react-bootstrap"

const LogIn = () => (
  <div className="container">
    <button
      onClick={() => {
        auth.signInWithPopup(new firebaseRef.auth.GoogleAuthProvider());
      }}
    >
      Login with Google
    </button>
  </div>
);

export default LogIn;