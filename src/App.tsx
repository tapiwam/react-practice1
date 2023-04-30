import { useState } from "react";
import ExpenseList from "./components/ExpenseList";
import ExpenseTracker from "./components/ExpenseTracker";
import Expense from "./model/Expense";

function App() {
  const [expenses, setExpenses] = useState([]);

  const onSubmitItem = (data: Expense) => {
    console.log(data);
  };

  return (
    <div>
      <ExpenseTracker
        items={expenses}
        onSubmitItem={onSubmitItem}
      ></ExpenseTracker>

      <ExpenseList items={expenses}></ExpenseList>
    </div>
  );
}

export default App;
