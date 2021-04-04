import "./App.css";
import { auth } from "./config";
import { useState, useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import LogIn from "./components/login";
import LogOut from "./components/logout";
import { Container, Row, Col } from "react-bootstrap";
import Pomodoro from "./components/Pomodoro";
import RightSide from "./components/RightSide";
//import SnakeGame from "./SnakeGame";

function App() {
  const [user] = useAuthState(auth);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <div className="container" mg >
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div>
          <Container>
            <Row>
              <Col sm={8}>
                <Pomodoro defaultBreakLength={5} defaultSessionLength={25} />
              </Col>
              <Col sm={4}>
               <RightSide/>
              </Col>
            </Row>
          </Container>
        </div>
      )}
    </div>
  );
}

export default App;
