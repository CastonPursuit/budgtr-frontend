import "../styles/TransactionCard.css";
export  default function TransactionCard( {date, category, amount}) {  
    return (
        <div className="transaction-card"> 
            <div className="transaction-info"> 
                <div className="transaction-date"> {date}  </div>
                <div className="transaction-category"> {category}</div>
                <div className="transaction-amount"> ${amount} </div>
            </div>
        </div>
        
    )
}
