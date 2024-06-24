import transaction from "./transactions.svg";
function Stat() {
  return (
    <>
      <div className="container stat m-5 p-3">
        <img src={transaction} style={{ width: "30%" }} />
        <h1 className="fs-5 m-5">You Have No Transactions Currently</h1>
      </div>
    </>
  );
}

export default Stat;
