import React, { useState } from "react";
import NewExpense from "./new_expense/NewExpense";
import Expenses from "./Expenses";
import { expenses } from "../../data/data";

export default function Expense() {
  const [expensesItems, setExpensesItems] = useState(expenses);
  //adding data
  const addExpenseHandler = (expense) => {
    // setExpensesItems([expense, ...expenses]); //or
    //clean way
    setExpensesItems((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expensesItems} />
    </div>
  );
}
