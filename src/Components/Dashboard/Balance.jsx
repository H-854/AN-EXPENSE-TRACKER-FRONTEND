function Balance() {
    return ( 
        <>
            <div className="container-fluid m-1 my-4">
                <div className="balance">
                    <div className="border p-3 m-2" style={{width: "25rem"}}>
                        <h1 className="fs-4">Current Balance</h1>
                        <p>0</p>
                        <button className="btn btn-outline-primary w-100">Reset Balance</button>
                    </div>
                    <div className="border p-3 m-2" style={{width: "25rem"}}>
                        <h1 className="fs-4">Total Income</h1>
                        <p>0</p>
                        <button className="btn btn-outline-primary w-100">Add Income</button>
                    </div>
                    <div className="border p-3 m-2" style={{width: "25rem"}}>
                        <h1 className="fs-4">Total Expenses</h1>
                        <p>0</p>
                        <button className="btn btn-outline-primary w-100">Add Expenses</button>
                    </div>
                </div>
            </div>
        </>
     );
}

export default Balance;