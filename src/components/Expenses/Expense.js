import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expense.css";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";

const Expense = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  const Yearhandler = (onYearhandler) => {
    setFilteredYear(onYearhandler);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <Card className="expenses">
      <ExpensesFilter selected={filteredYear} onYearhandler={Yearhandler} />
      <ExpensesList items={filteredExpenses} />
    </Card>
  );
};

export default Expense;
