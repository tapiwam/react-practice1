import { useState } from "react";
import ExpenseList from "./expense-tracker/components/ExpenseList";
import ExpenseTracker from "./expense-tracker/components/ExpenseTracker";
import Expense from "./expense-tracker/model/Expense";

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
