interface Expense {
  description: string;
  amount: number;
  category: "Groceries" | "Utilities" | "Entertainment";
}

export default Expense;
