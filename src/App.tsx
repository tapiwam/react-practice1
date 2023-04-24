import { useState } from "react";
import Like from "./components/Like";

function App() {
  const [person, setPerson] = useState({
    firstName: "T",
    lastName: "M",
    address: {
      city: "Dallas",
      zipCode: 75126,
    },
  });

  const handleClick = () => {
    // When spreading remember "it is shallow". Need to traverse nested objects
    setPerson({
      ...person,
      firstName: "Tapiwa",
      address: { ...person.address, zipCode: 75254 },
    });
  };

  return (
    <div>
      {person.firstName} {person.lastName} <br />
      {person.address.city} {person.address.zipCode}
      <br />
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
}

export default App;
