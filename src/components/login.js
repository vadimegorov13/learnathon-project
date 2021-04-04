import { auth, firebaseRef } from "../config";
import {Button} from "react-bootstrap"

const LogIn = () => (
  <div className="container">
    <Button variant="primary"
      onClick={() => {
        auth.signInWithPopup(new firebaseRef.auth.GoogleAuthProvider());
      }}
    >
      Login with Google
    </Button>
  </div>
);

export default LogIn;