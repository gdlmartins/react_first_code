import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expense.css";
import ExpensesFilter from "./ExpensesFilter";

const Expense = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  const Yearhandler = (onYearhandler) => {
    setFilteredYear(onYearhandler);
  };

  return (
    <Card className="expenses">
      <ExpensesFilter selected={filteredYear} onYearhandler={Yearhandler} />
      {console.log(props.expense)}
      {props.expense.map((expense) => (
        <ExpenseItem
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </Card>
  );
};

export default Expense;
