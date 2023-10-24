import React, { useState } from 'react';
import '../styles/AddTransaction.css';

export default function AddTransaction() {
  const [transaction, setTransaction] = useState({ date: '', category: '', amount: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
  
    // Check if the transaction object doesn't have an id yet
    if (!transaction.id) {
      const randomId = Math.floor(Math.random() * 1000000);
      setTransaction(prev => ({
        ...prev,
        id: randomId,
        [name]: value
      }));
    } else {
      setTransaction(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };  

  const handleSubmit = async (e) => {
    e.preventDefault(); // prevent the default form submission

    try {
      const response = await fetch('http://localhost:3001/items', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(transaction),
      });

      if (response.ok) {
        console.log('Transaction added successfully');
        // Optionally reset the form or navigate the user elsewhere
        setTransaction({ date: '', category: '', amount: '' });
      } else {
        console.error('Failed to add transaction');
      }
    } catch (error) {
      console.error('There was an error:', error);
    }
  };

  return (
    <div className="add-transaction-container">
      <h2 className="add-transaction-title">Add Transaction</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="form-label">Date:</label>
          <input
            type="text"
            name="date"
            value={transaction.date}
            onChange={handleChange}
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label className="form-label">Category:</label>
          <input
            type="text"
            name="category"
            value={transaction.category}
            onChange={handleChange}
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label className="form-label">Amount:</label>
          <input
            type="text"
            name="amount"
            value={transaction.amount}
            onChange={handleChange}
            className="form-input"
          />
        </div>
        <button type="submit" className="submit-button">
          Add Transaction
        </button>
      </form>
    </div>
  );
}
