import { useState } from "react";
import Like from "./components/Like";

function App() {
  const [bugs, setBugs] = useState([
    { id: 1, title: "Bug 1", fixed: false },
    { id: 2, title: "Bug 2", fixed: false },
  ]);

  const handleClick = () => {
    // setting arrays in state also need new arrays

    // Update a value -> Map to find then spread the inner object with updates
    setBugs(bugs.map((bug) => (bug.id === 1 ? { ...bug, fixed: true } : bug)));
  };

  return (
    <div>
      {bugs.map((bug) => (
        <div key={bug.id}>
          {bug.id} {bug.title} {bug.fixed ? "TRUE" : "FALSE"}
        </div>
      ))}
      <br />
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
}

export default App;
