import "../styles/TransactionList.css";
import TransactionCard  from "./TransactionCard";

export function TransactionList() {


    return (
        <div className="transaction-list" > 
            <div className="transaction-items-list"> 
                list of transactions
                <TransactionCard/>
            </div>
        </div>

    )


}