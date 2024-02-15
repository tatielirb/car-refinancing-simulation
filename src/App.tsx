import React, { Suspense, useState } from "react";
import "./App.scss";
import Header from "components/Header/Index";
import Button from "components/Button/Index";

function App() {
  const [query, setQuery] = useState("");
  return (
    <div className="App">
      <Header title="Car Refinancing Simulation" />
      <div className="personal-form container text-center">
        <form className="row justify-content-md-center">
          <div className="col col-3">
            <div className="form-floating mb-5">
              <select
                className="form-select"
                id="floatingSelect"
                aria-label="Floating label select example"
              >
                <option>loanPurposeOption</option>
              </select>
              <label htmlFor="floatingSelect">Loan Purpose*</label>
            </div>
          </div>
          <div className="col col-3">
            <div className="form-floating mb-5">
              <input
                className="form-control"
                id="floatingInputValue"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
              <label htmlFor="floatingInputValue">Total loan Amount*</label>
            </div>
          </div>
          <div className="col col-3">
            <div className="form-floating mb-5">
              <select
                className="form-select"
                id="floatingSelect"
                aria-label="Floating label select example"
              >
                <option>loanTermOption</option>
              </select>
              <label htmlFor="floatingSelect">Loan term(months)*</label>
            </div>
          </div>

          <Suspense>
            <div className="personal-form--fees">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <p className="personal-form--fees-title">Monthly payment</p>
                  <span className="personal-form--fees-value">
                    monthlyPayments
                  </span>
                </li>
                <li className="list-group-item">
                  <p className="personal-form--fees-title">APR</p>
                  <p className="personal-form--fees-value">apr%</p>
                </li>
              </ul>
            </div>
          </Suspense>

          <Button classNameType="btn fw-bold" title="Submit Application" />
        </form>
      </div>
    </div>
  );
}

export default App;
