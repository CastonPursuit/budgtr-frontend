import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom"; // Import useNavigate from react-router-dom
import "../styles/TransactionDetails.css";

export default function TransactionDetails() {
    const { id } = useParams();
    const navigate = useNavigate(); // Use useNavigate from react-router-dom
    const [transaction, setTransaction] = useState([]);
    const [showConfirmation, setShowConfirmation] = useState(false);

    useEffect(() => {
        fetch(`http://localhost:3001/items/${id}`)
            .then(response => response.json())
            .then(data => setTransaction(data));
    }, [id]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setTransaction(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleUpdate = () => {
        fetch(`http://localhost:3001/items/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(transaction)
        })
        .then(response => response.json())
        .then(data => {
            console.log('Update successful:', data);
        })
        .catch(error => {
            console.error('Error updating:', error);
        });
    };

    const handleDelete = () => {
        fetch(`http://localhost:3001/items/${id}`, {
            method: 'DELETE'
        })
        .then(() => {
            console.log('Delete successful');
            navigate('/'); // Use the navigate function to redirect to the transactions list
        })
        .catch(error => {
            console.error('Error deleting:', error);
        });
    };

    const toggleConfirmationDialog = () => {
        setShowConfirmation(!showConfirmation);
    };

    return (
        <div className="transaction-details">
            <h2>Transaction Details</h2>

            <div>
                <label>Date:</label>
                <input
                    type="text"
                    name="date"
                    value={transaction.date || ""}
                    onChange={handleChange}
                />
            </div>

            <div>
                <label>Category:</label>
                <input
                    type="text"
                    name="category"
                    value={transaction.category || ""}
                    onChange={handleChange}
                />
            </div>

            <div>
                <label>Amount:</label>
                <input
                    type="text"
                    name="amount"
                    value={transaction.amount || ""}
                    onChange={handleChange}
                />
            </div>

            <button onClick={handleUpdate}>Update Transaction</button>
            
            {showConfirmation ? (
                <div className="confirmation-dialog">
                    <p>Are you sure you want to delete this transaction?</p>
                    <button onClick={handleDelete}>Yes</button>
                    <button onClick={toggleConfirmationDialog}>No</button>
                </div>
            ) : (
                <button onClick={toggleConfirmationDialog}>Delete Transaction</button>
            )}
            
            <Link to="/">Back to Transactions</Link>
        </div>
    );
}
