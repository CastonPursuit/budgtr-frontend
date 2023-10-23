import React, { useState } from 'react';
import '../styles/AddTransaction.css'; //

export default function AddTransaction() {
  return (
    <div className="add-transaction-container">
      <h2 className="add-transaction-title">Add Transaction</h2>
      <form >
        <div className="form-group">
          <label className="form-label">Date:</label>
          <input
            type="text"
            name="date"

            className="form-input"
          />
        </div>
        <div className="form-group">
          <label className="form-label">Category:</label>
          <input
            type="text"
            name="category"
 
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label className="form-label">Amount:</label>
          <input
            type="text"
            name="amount"
  
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
