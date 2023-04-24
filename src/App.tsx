import { useState } from "react";
import Like from "./components/Like";

function App() {
  const [person, setPerson] = useState({
    firstName: "T",
    lastName: "M",
  });

  const handleClick = () => {
    setPerson({ ...person, firstName: "Tapiwa" });
  };

  return (
    <div>
      {person.firstName} {person.lastName}
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
}

export default App;
