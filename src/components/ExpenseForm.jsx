import React, { useState } from 'react';

function ExpenseForm({ categories, expenses, onAddExpense, getCategoryName }) {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const [categoryId, setCategoryId] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && amount && categoryId) {
      // Create a new expense object
      const newExpense = {
        id: Date.now(), // Using Date.now() as categoryId
        name,
        amount: parseFloat(amount),
        categoryId: categoryId,
      };      
      
      setName("");
      setAmount("");
      setCategoryId("");

      onAddExpense(newExpense); // Pass the new expense to the parent component
    }
  }

  return (
    <>
      <form className='expense-form' onSubmit={handleSubmit}>
        <h3>Add Expense</h3>
        <div>
          <label>Name</label>
          <input
            type="text"
            id="name"
            placeholder="Enter expense name"
            autoComplete='off'
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Amount</label>
          <input
            type="number"
            id="amount"
            placeholder="Enter expense amount"
            autoComplete='off'
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            required
            />
        </div>
        <div>
          <label>Category</label>
          <select id="expense-option" value={categoryId} onChange={(e) => setCategoryId(e.target.value)} required>
            <option value="">--Select a category--</option>
            {categories.map((category) => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </select>
        </div>
        <button className='add-expense-btn'>Add Expense</button>
      </form>
      <div>
        <h3>Expenses</h3>
        <ul className='expense-list'>
          {expenses.map((expense) => (
            <li className='expense-list-item' key={expense.id}>
              {expense.name}: {expense.amount} ({getCategoryName(expense.categoryId)})
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default ExpenseForm;