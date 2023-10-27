import React, { useState } from 'react';
import '../styles/App.css';

import BudgetForm from "./BudgetForm";
import ExpenseForm from "./ExpenseForm";


const App = () => {
  const [budgets, setBudgets] = useState([]);
  const [expenses, setExpenses] = useState([]);

  const getCategoryName = (categoryId) => {
    const category = budgets.find((budget) => budget.id == categoryId);
    return category ? category.name : "";
  };

  const addBudget = (newBudget) => {
    setBudgets([...budgets, newBudget]);
  };

  const addExpense = (newExpense) => {
    setExpenses([...expenses, newExpense]);
  };

  return (
    <div id="main">
      <h1>Budget Manager App</h1>
      <div>
        <h2>Budgets</h2>
        <ul className='budget-list'>
          {budgets.map((budget) => (
            <li className='budget-list-item' key={budget.id}>
              {budget.name}: {budget.amount}
            </li>
          ))}
        </ul>
        <BudgetForm onAddBudget={addBudget} />
      </div>
      <hr />
      <div>
        <h2>Expenses</h2>
        <ExpenseForm categories={budgets} expenses={expenses} onAddExpense={addExpense} getCategoryName={getCategoryName} />
      </div>
    </div>
  );
};

export default App;
