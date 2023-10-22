import React from "react";
import "../styles/Navbar.css"
// import { Link } from "react-router-dom";

export function Navbar () {
    return ( 
        <nav className="navbar">
            <ul className="navbar-list">
                <li className="navbar-item"> 
                    {/* <Link to='/'> Transactions </Link> */}
                    Transactions
                </li>
            </ul>
        </nav>
    )

}

