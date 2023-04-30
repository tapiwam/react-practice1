import { useState } from "react";
import ExpenseList from "./components/ExpenseList";
import ExpenseTracker from "./components/ExpenseTracker";
import Expense from "./model/Expense";

function App() {
  const [expenses, setExpenses] = useState<Expense[]>([]);

  const onSubmitItem = (data: Expense) => {
    console.log(data);

    setExpenses([...expenses, data]);
  };

  const onDeleteItem = (index: number, item: Expense) => {
    setExpenses(expenses.filter((e, index) => e !== item));
  };

  return (
    <div>
      <ExpenseTracker
        items={expenses}
        onSubmitItem={onSubmitItem}
      ></ExpenseTracker>

      <ExpenseList items={expenses} onDeleteItem={onDeleteItem}></ExpenseList>
    </div>
  );
}

export default App;
