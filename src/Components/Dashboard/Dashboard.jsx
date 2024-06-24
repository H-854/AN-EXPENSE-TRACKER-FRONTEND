import Balance from "./Balance";
import Navbar from "./Navbar";
import Transactions from "./Transactions";
import Stat from "./TransactionsStat";

function Dashboard() {
    return ( 
        <>
            <Navbar/>
            <Balance/>
            <Stat/>
            <Transactions/>
        </>
     );
}

export default Dashboard;