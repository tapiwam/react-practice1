import { useEffect, useState } from "react";
import axios, { AxiosError } from "axios";

// https://jsonplaceholder.typicode.com/

interface User {
  id: number;
  name: string;
}

function App() {
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await axios.get<User[]>(
          "https://jsonplaceholder.typicode.com/usersx"
        );

        setUsers(res.data);
        setError("");
      } catch (err) {
        setError((err as AxiosError).message);
      }
    };
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
