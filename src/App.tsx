import { useState } from "react";
import produce from "immer";
import ListGroup from "./components/ListGroup";
import NavBar from "./components/NavBar";
import Cart from "./components/Cart";

function App() {
  const [cart, setCart] = useState(["Product1", "Product2"]);

  const handleClick = () => {
    // setting arrays in state also need new arrays

    // Update a value -> Map to find then spread the inner object with updates
    // setBugs(bugs.map((bug) => (bug.id === 1 ? { ...bug, fixed: true } : bug)));
    setCart([...cart, "Produce3"]);
  };

  return (
    <div>
      <button onClick={handleClick}>Click Me</button>
      <br />

      <NavBar cartCount={cart.length}></NavBar>
      <Cart cartItems={cart}></Cart>
    </div>
  );
}

export default App;
