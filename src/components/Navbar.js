import React from "react";
import "../styles/Navbar.css"
import { Link } from "react-router-dom";

export function Navbar () {
    return ( 
        <nav className="navbar">
            <div className="transaction-title" > 
                <Link to="/" className="transaction-title"> Budgtr </Link>
            </div>
            <button className="navbar-button"> 
                <Link to="/new" className="navbar-new-transaction">Add </Link>
            </button>
        </nav>
    )

}

