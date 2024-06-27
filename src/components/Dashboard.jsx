import Navbar from "./Navbar"
import Expense from "./Expense"
import Tracker from "./Tracker"
import Transaction from "./Transaction"
import AddTransaction from "./AddTransactionForm"
import AddTransactionExpense from "./AddExpense"
import { useEffect, useState } from "react"
import axios from "axios"


export default function Dashboard(){
    let [transaction,setTransaction] = useState([]);

    useEffect(()=>{
        axios.get("http://localhost:3000/transactions").then((response)=>{
            setTransaction(response.data)
        })
    },[transaction])

    return (
        <div>
            <Navbar/>
            <div className="main">
                <Expense />
                <Tracker/>
                <Transaction transaction={transaction} setTransaction={setTransaction}/>
                <AddTransaction setTransaction={setTransaction}/>
                <AddTransactionExpense setTransaction={setTransaction}/>
            </div>
        </div>
    )
}