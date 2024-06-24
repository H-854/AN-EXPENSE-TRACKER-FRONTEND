function Transactions() {
  return (
    <>
      <div className="container-fluid transaction my-5 p-2">
        <h1 className="fs-3">My Transactions</h1>
        <div className="sortBtn">
          <div
            className="btn-group"
            role="group"
            aria-label="Basic radio toggle button group"
          >
            <input
              type="radio"
              className="btn-check"
              name="btnradio"
              id="btnradio1"
              autocomplete="off"
            />
            <label className="btn btn-outline-primary" htmlFor="btnradio1">
              No sort
            </label>

            <input
              type="radio"
              className="btn-check"
              name="btnradio"
              id="btnradio2"
              autocomplete="off"
            />
            <label className="btn btn-outline-primary" htmlFor="btnradio2">
              Sort by Date
            </label>

            <input
              type="radio"
              className="btn-check"
              name="btnradio"
              id="btnradio3"
              autocomplete="off"
            />
            <label className="btn btn-outline-primary" htmlFor="btnradio3">
              Sort by Amount
            </label>
          </div>
        </div>
        <div>
          <button className="btn btn-outline-primary mx-2">
            Export as CSV
          </button>
          <button className="btn btn-outline-primary">Import as CSV</button>
        </div>
      </div>
      <div className="container mb-5">
        <table class="table">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Type</th>
              <th scope="col">Date</th>
              <th scope="col">Amount</th>
              <th scope="col">Tag</th>
            </tr>
          </thead>
          <tbody>
            
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Transactions;
