import { useState } from "react";
import Button from "./components/Button";

function App() {
  const [counter, setCounter] = useState(0);

  return (
    <div>
      <Button color="primary" onClick={() => setCounter(counter + 1)}>
        Click Me!
      </Button>
      <br />
      {counter}
    </div>
  );
}

export default App;
