import LogIn from "./login";
import LogOut from "./logout";
import { auth } from "../config";
import { useAuthState } from "react-firebase-hooks/auth";
import "./style/RightSide.css";

function RightSide() {
  const [user] = useAuthState(auth);
  return (
    <div>
      <h1 className="header-name">Chat</h1>
      <div className="login-section">
        {user ? (
          <div className="login-section">
            <div>
              <LogOut />
            </div>
            <div className="margin-yeah">Imagine chat here</div>
          </div>
        ) : (
          <div className="login-section">
            <LogIn />
          </div>
        )}
      </div>
    </div>
  );
}

export default RightSide;
