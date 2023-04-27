import { useState } from "react";
import produce from "immer";
import ListGroup from "./components/ListGroup";
import NavBar from "./components/NavBar";
import Cart from "./components/Cart";

function App() {
  // Excercise 1
  const [game, setGame] = useState({
    id: 1,
    player: {
      name: "John",
    },
  });

  const handleClick1 = () => {
    setGame({ ...game, player: { ...game.player, name: "Bob" } });
  };

  // Excercise 2 - add pizza topping

  const [pizza, setPizza] = useState({
    name: "Spicy Pepperonni",
    toppings: ["Mushrooms"],
  });

  const handlePizzaToppings = () => {
    setPizza({
      ...pizza,
      toppings: [...pizza.toppings, "Pepperonni"],
    });
  };

  // Excercise 3 - Update cart

  const [cart, setCart] = useState({
    discount: 0.1,
    items: [
      { id: 1, title: "Product 1", quantity: 1 },
      { id: 2, title: "Product 2", quantity: 1 },
    ],
  });

  const handleCartUpdate = () => {
    setCart({
      ...cart,
      items: cart.items.map((item) =>
        item.id === 1 ? { ...item, quantity: item.quantity + 1 } : item
      ),
    });
  };

  // Render
  return (
    <div>
      <button onClick={handleClick1}>Update Name</button>
      <br />
      <h3>
        {game.id} - {game.player.name}
      </h3>
      <hr />
      <button onClick={handlePizzaToppings}>Add Topping</button>
      <br />
      <h3>Pizza Name : {pizza.name}</h3>
      Toppings
      <ul>
        {pizza.toppings.map((topping, index) => (
          <li key={index}>{topping}</li>
        ))}
      </ul>
      <hr />
      <button onClick={handleCartUpdate}>Update Cart</button>
      <br />
      <h3>Cart Discount : {cart.discount}</h3>
      Cart
      <ul>
        {cart.items.map((item, index) => (
          <li key={index}>
            {item.id} - {item.title} - {item.quantity}
          </li>
        ))}
      </ul>
      <hr />
    </div>
  );
}

export default App;
