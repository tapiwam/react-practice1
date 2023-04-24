import { useState } from "react";
import Like from "./components/Like";

function App() {
  const [tags, setTags] = useState(["happy", "cheerful"]);

  const handleClick = () => {
    // setting arrays in state also need new arrays

    // Add a tag
    setTags([...tags, "Exciting"]);

    // remove a tag
    setTags(tags.filter((tag) => tag != "happy"));

    // Update a flag
    setTags(tags.map((tag) => (tag === "happy" ? "happiness" : tag)));
  };

  return (
    <div>
      {tags}
      <br />
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
}

export default App;
