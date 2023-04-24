import { useState } from "react";
import Like from "./components/Like";

function App() {
  const [firstName, setFirstName] = useState("T");
  const [lastName, setLastName] = useState("M");
  const fullName = firstName + " " + lastName;

  const [person, setPerson] = useState({
    firstName: "T",
    lastName: "M",
  });

  return (
    <div>
      {fullName}
      <br />
      {person.firstName} {person.lastName}
    </div>
  );
}

export default App;
