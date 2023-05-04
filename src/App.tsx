import { useEffect, useRef, useState } from "react";
import ExpenseList from "./expense-tracker/components/ExpenseList";
import ExpenseTracker from "./expense-tracker/components/ExpenseTracker";
import Expense from "./expense-tracker/model/Expense";

function App() {
  const ref = useRef<HTMLInputElement>(null);

  // After render
  useEffect(() => {
    // Side effect
    if (ref.current) ref.current.focus();
  });

  useEffect(() => {
    document.title = "My App";
  });

  return (
    <div>
      <input ref={ref} type="text" className="form-control" />
    </div>
  );
}

export default App;
