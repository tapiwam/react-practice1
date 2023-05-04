import { useEffect, useState } from "react";
import axios from "axios";

// https://jsonplaceholder.typicode.com/

interface User {
  id: number;
  name: string;
}

function App() {
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    axios
      .get<User[]>("https://jsonplaceholder.typicode.com/usersx")
      .then((res) => {
        setUsers(res.data);
        setError("");
      })
      .catch((err) => {
        console.log(err);
        setError(err.message);
        setUsers([]);
      });
  }, []);

  return (
    <>
      {error && <p className="text-danger">{error}</p>}
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </>
  );
}

export default App;
