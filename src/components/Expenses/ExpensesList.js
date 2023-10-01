import React from "react";
import ExpenseItem from "./ExpenseItem";

const ExpensesList = (filteredExpenses) => {
  return (
    <div>
      {filteredExpenses.length === 0 ? (
        <p>No expense found</p>
      ) : (
        filteredExpenses.map((item) => (
          <ExpenseItem
            key={item.id}
            title={item.title}
            amount={item.amount}
            date={item.date}
          />
        ))
      )}
    </div>
  );
};

export default ExpensesList;
