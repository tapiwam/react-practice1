import Alert from "./components/Alert";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup";

function App() {
  return (
    <div>
      <Alert>
        Hello <span>World</span>
      </Alert>

      <Button color="primary" onClick={() => console.log("Clicked!")}>
        Click Me
      </Button>
    </div>
  );
}

export default App;
