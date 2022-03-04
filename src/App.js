import React, { useState } from "react";

import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import CRight from "./components/UI/CRight";
import Header from "./components/UI/Header";

// import BarChartComponent from './components/Expenses/BarChartComponent';
// import PieChartComponent from './components/Expenses/PieChartComponent';

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Groceries",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Netflix account",
    amount: 299.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "Furniture (Wooden)",
    amount: 500,
    date: new Date(2021, 5, 12),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      {/* <h2> Let's Get Started Godzy</h2> */}
      <Header/>
      {/* <h1>BarChart</h1>
        <BarChartComponent/>
      <h1>PieChart</h1>
        <PieChartComponent/> */}

      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
      <CRight/>
      {/* <ExpenseItem 
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      /> */}
    </div>
  );
};

export default App;
