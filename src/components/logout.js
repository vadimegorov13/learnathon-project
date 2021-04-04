import { auth } from "../config";
import { Button } from "react-bootstrap";

const LogOut = ({ setShowListMenu }) =>
  auth.currentUser && (
    <Button
      variant="primary"
      onClick={() => {
        auth.signOut();
      }}
    >
      Sign Out
    </Button>
  );

export default LogOut;
