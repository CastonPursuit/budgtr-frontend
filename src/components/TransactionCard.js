import "../styles/TransactionCard.css";
export  default function TransactionCard() {  
    return (
        <div className="transaction-card"> 
            <div className="transaction-info"> 
                <div className="transaction-date"> Oct 23  </div>
                <div className="transaction-category"> Food  </div>
                <div className="transaction-amount"> $150 </div>
            </div>
        </div>
        
    )
}
