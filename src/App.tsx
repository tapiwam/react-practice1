import { useState } from "react";
import Like from "./components/Like";

function App() {
  const [counter, setCounter] = useState(0);

  return (
    <div>
      <Like onClick={() => console.log("clicked")}></Like>
    </div>
  );
}

export default App;
