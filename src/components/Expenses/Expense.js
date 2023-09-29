import React from "react";
import NewExpense from "./new_expense/NewExpense";
import Expenses from "./Expenses";
import { expenses } from "../../data/data";

export default function Expense() {
  //adding data
  const addExpenseHandler = (expense) => {
    console.log("in the expense");
    console.log(expense);
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}
