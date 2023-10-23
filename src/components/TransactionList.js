// TransactionList.js
import React, {useEffect, useState} from 'react';
import '../styles/TransactionList.css';
import TransactionCard from './TransactionCard';

export default function TransactionList() {
  const [transactions, setTransactions] =  useState([]);

  useEffect( () =>  {
    fetch("http://localhost:3001/items")
    .then((response) =>{ return response.json()})
    .then((data) => setTransactions(data))
  })

  return (
    <div className="transaction-list">
      <div className="transaction-items-list">
         {transactions.map((transaction, index) => ( 
          <TransactionCard
            key={transaction.id}
            date={transaction.date}
            category={transaction.category}
            amount={transaction.amount}
          />
         ))}
      </div>
    </div>
  );
}
