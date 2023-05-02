import { FormEvent, useState } from "react";
import { NumericFormat } from "react-number-format";
import Expense from "../model/Expense";

interface Props {
  items: Expense[];
  onDeleteItem: (index: number, item: Expense) => void;
}

const calculateTotal = (category: string, items: Expense[]): number => {
  let total: number = 0;
  const expenses = filterItems(category, items);

  expenses.forEach((expense) => {
    total = total + parseFloat(expense.amount);
  });

  return total;
};

const filterItems = (category: string, items: Expense[]): Expense[] => {
  let expenses = items;
  if (category != "") {
    expenses = items.filter((expense) => expense.category === category);
  }
  return expenses;
};

const ExpenseList = ({ items, onDeleteItem }: Props) => {
  const [selected, setSelected] = useState("");

  const handleSelection = (event: FormEvent) => {
    console.log(event.target.value);
    setSelected(event.target.value);
  };

  if (items.length === 0) return null;

  return (
    <div>
      <form>
        <div className="mb-3 mt-4">
          <select
            value={selected}
            defaultValue={""}
            name="selectedOption"
            id=""
            className="form-select"
            onChange={handleSelection}
          >
            <option value="">All Categories</option>
            <option value="Groceries">Groceries</option>
            <option value="Utilities">Utilities</option>
            <option value="Entertainment">Entertainment</option>
          </select>
        </div>
      </form>

      <table className="table table-bordered">
        <thead>
          <tr>
            <th scope="col">Description</th>
            <th scope="col">Amount</th>
            <th scope="col">Category</th>
            <th scope="col"></th>
          </tr>
        </thead>

        <tbody>
          {filterItems(selected, items).map((item, index) => (
            <tr key={index}>
              <td>{item.description}</td>
              <td>
                <NumericFormat
                  value={item.amount}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={"$"}
                  decimalScale={2}
                  fixedDecimalScale
                ></NumericFormat>
              </td>
              <td>{item.category}</td>
              <td>
                <button
                  className="btn btn-outline-danger"
                  onClick={() => {
                    onDeleteItem(index, item);
                  }}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td>Total</td>
            <td>
              <NumericFormat
                value={calculateTotal(selected, items)}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
                decimalScale={2}
                fixedDecimalScale
              ></NumericFormat>
            </td>
            <td></td>
            <td></td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default ExpenseList;
