import { FormEvent, useState } from "react";
import Expense from "../model/Expense";

interface Props {
  items: Expense[];
}

const ExpenseList = ({ items }: Props) => {
  const [selected, setSelected] = useState("");

  const handleSelection = (event: FormEvent) => {
    console.log(event.target.value);
    setSelected(event.target.value);
  };

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
          {items.map((item, index) => (
            <tr key={index}>
              <td>{item.description}</td>
              <td>{item.amount}</td>
              <td>{item.category}</td>
              <td>
                <button className="btn btn-danger">Delete</button>
              </td>
            </tr>
          ))}

          <tr>
            <td>Total</td>
            <td>$0.0</td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ExpenseList;
