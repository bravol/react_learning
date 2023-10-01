import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = ({ onSaveExpenseData }) => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");

  //another way
  //   const [userInput, setUserInput] = useState({
  //     title: "",
  //     amount: "",
  //     date: "",
  //   });
  //   const titleChangeHandler = (e) => {
  //     setTitle(e.target.value);
  //     // setUserInput({
  //     //   ...userInput,
  //     //   title: e.target.value,
  //     // });
  //     // setUserInput((prevState) => {
  //     //   return { ...prevState, title: e.target.value };
  //     // });
  //   };
  // const amountChangeHandler = (e) => {
  //   setAmount(e.target.value);
  //   // setUserInput({
  //   //   ...userInput,
  //   //   amount: e.target.value,
  //   // });
  // };
  const dateChangeHandler = (e) => {
    setDate(e.target.value);
    // setUserInput({
    //   ...userInput,
    //   date: e.target.value,
    // });
  };

  const inputChangeHandler = (name, value) => {
    if (name === "title") {
      setTitle(value);
    } else if (name === "date") {
      setDate(value);
    } else {
      setAmount(value);
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const expenseData = {
      title: title,
      amount: amount,
      date: new Date(date),
    };
    // console.log(expenseData);
    onSaveExpenseData(expenseData);
    setTitle("");
    setAmount("");
    setDate("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            name="title"
            type="text"
            required="required"
            value={title}
            onChange={(e) => inputChangeHandler("title", e.target.value)}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            name="amount"
            min="0.01"
            step="0.01"
            required="required"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            name="date"
            min="2019-01-01"
            max="2023-12-12"
            required="required"
            value={date}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
