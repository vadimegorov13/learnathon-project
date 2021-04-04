import { auth } from "../config";
import { Button } from "react-bootstrap";

const LogOut = ({ setShowListMenu }) =>
  auth.currentUser && (
    <button
      variant="primary"
      onClick={() => {
        auth.signOut();
      }}
    >
      Sign Out
    </button>
  );

export default LogOut;
