import Card from "./UI/Card";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";
import { useState } from "react";

export default function ExpenseItem(props) {
  //changing the title
  const [title, setTitle] = useState(props.title);
  const clickHandler = () => {
    setTitle("hello");
  };
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">{props.amount}</div>
      </div>
      <button onClick={clickHandler}>Change title</button>
    </Card>
  );
}
