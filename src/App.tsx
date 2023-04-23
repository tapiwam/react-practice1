import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup";

function App() {
  const [alertVisible, setAlertVisible] = useState(false);

  return (
    <div>
      {alertVisible && (
        <Alert onClose={() => setAlertVisible(false)}>My Alert</Alert>
      )}

      <Button color="primary" onClick={() => setAlertVisible(true)}>
        Click Me
      </Button>
    </div>
  );
}

export default App;
