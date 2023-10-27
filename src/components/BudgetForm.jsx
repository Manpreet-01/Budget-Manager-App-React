import React, { useState } from 'react';

function BudgetForm({ onAddBudget }) {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && amount) {
      // Create a new budget object
      const newBudget = {
        id: Date.now(), // Using Date.now() as categoryId
        name,
        amount: parseFloat(amount),
      };
      
      setName("");
      setAmount("");
      
      onAddBudget(newBudget); // Pass the new budget to the parent component
    }
  }

  return (
    <form className='budget-form' onSubmit={handleSubmit}>
      <label htmlFor="name">Name:</label>
      <input
        type="text"
        id="name"
        placeholder="Enter budget name"
        required
        autoComplete='off'
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <label htmlFor="amount">Amount:</label>
      <input
        type="number"
        id="amount"
        placeholder="Enter budget amount"
        required
        autoComplete='off'
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <button type="submit" className='add-budget-btn'>Add Budget</button>
    </form>
  );
}

export default BudgetForm;