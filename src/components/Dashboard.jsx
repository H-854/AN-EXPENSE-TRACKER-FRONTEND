import Navbar from "./Navbar"
import Expense from "./Expense"
import Tracker from "./Tracker"
import Transaction from "./Transaction"
import AddTransaction from "./AddTransactionForm"
import AddTransactionExpense from "./AddExpense"


export default function Dashboard(){

    return (
        <div>
            <Navbar/>
            <div className="main">
                <Expense />
                <Tracker/>
                <Transaction />
                <AddTransaction />
                <AddTransactionExpense />
            </div>
        </div>
    )
}