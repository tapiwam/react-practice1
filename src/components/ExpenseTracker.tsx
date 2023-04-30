import React, { FormEvent } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { Schema, z } from "zod";
import Expense from "../model/Expense";

const schema = z.object({
  description: z
    .string()
    .min(2, { message: "Description should have at least 2 characters." }),
  amount: z.number(),
  category: z.string(),
});

type FormData = z.infer<typeof schema>;

interface Props {
  items: any[];
  onSubmitItem: (item: Expense) => void;
}

const ExpenseTracker = ({ items, onSubmitItem }: Props) => {
  // Form items
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormData>();

  const onSubmit = (data: FieldValues) => {
    if (isValid) {
      onSubmitItem(data as Expense);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-3">
        <label htmlFor="description" className="form-label">
          Description
        </label>
        <input
          {...register("description")}
          id="description"
          type="text"
          className="form-control"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="amount" className="form-label">
          Amount
        </label>
        <input
          {...register("amount")}
          id="amount"
          type="number"
          className="form-control"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="category" className="form-label">
          Category
        </label>
        <select
          {...register("category")}
          id="category"
          className="form-select"
          aria-label="Category"
        >
          <option selected></option>
          <option value="Groceries">Groceries</option>
          <option value="Utilities">Utilities</option>
          <option value="Entertainment">Entertainment</option>
        </select>
      </div>

      <button className="btn btn-primary" type="submit">
        Submit
      </button>
    </form>
  );
};

export default ExpenseTracker;
