import React, { ChangeEvent, Suspense, useState } from "react";
import "./App.scss";
import Header from "components/Header/Index";
import Button from "components/Button/Index";
import Select from "components/Select/Index";
import { loanPurposeOptions, loanTermOptions } from "utils/DataSelect";

function App() {
  const [amount, setAmountInput] = useState('');
  const [loanPurpose, setLoanPurposeSelect] = useState<string>('');
  const [terms, setTermsSelect] = useState('');
  const handleInputChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
    setAmountInput(event.target.value);
  };



 
  const handleChanges = (event: ChangeEvent<HTMLSelectElement>) => {
    const novoValor = event.target.value;
    setLoanPurposeSelect(novoValor);
  };

 

  return (
    <div className="App">
      <Header title="Car Refinancing Simulation" />
      <div className="personal-form container text-center">
        <form className="row justify-content-md-center">
          <div className="col col-4">
            <Select items={loanPurposeOptions} labelSelect="Loan Purpose*" valueSelect={loanPurpose} handleChange={handleChanges}/>
          </div>
          <div className="col col-4">
            <div className="form-floating mb-5">
              <input
                className="form-control"
                id="floatingInputValue"
                type="number"
                value={amount}
                onChange={handleInputChange}
              />
              <label htmlFor="floatingInputValue">Total loan Amount*</label>
            </div>
          </div>
          {/* <div className="col col-4">
            <Select items={loanTermOptions} labelSelect="Loan term(months)*" valueSelect={terms}/>
          </div> */}

          <Suspense>
            <div className="personal-form--fees row justify-content-md-center">
              <ul className="list-group list-group-flush col col-6">
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

          <div className="row justify-content-md-center">
            <div className="col col-6">
              <Button classNameType="btn fw-bold" title="Submit Application" />
            </div>
          </div>
        </form>
      </div>


      <p>O valor do input é: {amount}</p>
      <p>O valor do loanPurpose é: {loanPurpose}</p>
      {/* <p>O valor do terms é: {terms}</p> */}
    </div>
  );
}

export default App;
