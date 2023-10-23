import React from "react";
import "../styles/Navbar.css"
// import { Link } from "react-router-dom";

export function Navbar () {
    return ( 
        <nav className="navbar">
            <div className="transaction-title" > Budgtr </div>
                <button className="navbar-button"> 
                    {/* <Link to='/'> Transactions </Link> */}
                    Transactions
                </button>
        </nav>
    )

}

