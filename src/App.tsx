import React, { Suspense, useEffect, useState } from "react";
import "./App.scss";
import Header from "components/Header/Index";
import Button from "components/Button/Index";
import Select from "components/Select/Index";
import Alert from "components/Alert/Index";
import { loanPurposeOptions, loanTermOptions } from "utils/DataSelect";
import SimulatorService from "services/SimulatorService";
import { useAlerts } from "hooks/useAlerts";


function App() {
  const [showAlertDisplay, message, type, iconName, showAlert] = useAlerts();
  const [monthlyPayments, setMonthlyPayments] = useState<number>(0);
  const [apr, setApr] = useState<number>(0);

  const [amount, setAmount] = useState<number>();
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAmount(Number(event.target.value));
  };

  const [loanPurpose, setLoanPurpose] = useState<string>("");
  const handleLoanPurposeChange = (loanPurpose: string | number) => {
    setLoanPurpose(String(loanPurpose));
  };

  const [terms, setTerms] = useState<number>(0);
  const handleTermChange = (terms: string | number) => {
    setTerms(Number(terms));
  };

  useEffect(() => {
    if (loanPurpose !== " " && terms !== 0) {
      if (amount !== 0 && amount !== undefined && terms !== 0) {
        console.log("amount !== 0 && terms !== 0" , amount,  terms )
        handleSubmit();
      }
    }
  }, [amount, loanPurpose, terms]);

  const handleSubmit = async () => {
    const requestData = {
      amount: amount,
      loanPurpose: loanPurpose,
      terms: terms,
    };

    try {
      const response = await SimulatorService.postOffersInfo(requestData);

      setMonthlyPayments(response.monthlyPayments);
      setApr(response.apr);
    } catch (error) {
      console.error("Erro ao enviar os dados:", error);
      showAlert(
        "danger",
        "Sorry! We had a problem with our service. Try again later!",
        "exclamation-circle-fill"
      );
    }
  };


  const postSubmissionsData = () => {
    try {
      console.log("vai ter coisa aqui")
    } catch (error: any) {
      if (loanPurpose === "API error") {
        showAlert(
          "danger",
          "Sorry! We had a problem with our service. Try again later!",
          "exclamation-circle-fill"
        );
      } else {
        showAlert(
          "warning",
          "It is necessary to fill in all fields on the form.",
          "exclamation-circle-fill"
        );
        
      
    }
  }
}


  

  return (
    <div className="App">
      <Header title="Car Refinancing Simulation" />
      {showAlertDisplay === true && (
        <Alert message={message} type={type} iconName={iconName} />
      )}
      <div className="personal-form container text-center">
        <form className="row justify-content-md-center">
          <div className="col col-4">
            <Select
              items={loanPurposeOptions}
              labelSelect="Loan Purpose*"
              onChangeValue={handleLoanPurposeChange}
              initialValueSelect={loanPurpose}
              required={true}
            />
          </div>
          <div className="col col-4">
            <div className="form-floating mb-5">
              <input
                className="form-control"
                id="floatingInputValue"
                type="number"
                value={amount === undefined ? "" : amount}
                onChange={handleInputChange}
                required
              />
              <label htmlFor="floatingInputValue">Total loan Amount*</label>
            </div>
          </div>
          <div className="col col-4">
            <Select
              items={loanTermOptions}
              labelSelect="Loan term(months)*"
              onChangeValue={handleTermChange}
              initialValueSelect={terms}
              required={true}
            />
          </div>

          <Suspense fallback={<div>Loading...</div>}>
            <div className="personal-form--fees row justify-content-md-center">
              <ul className="list-group list-group-flush col col-6">
                <li className="list-group-item">
                  <p className="personal-form--fees-title">Monthly payment</p>
                  <span className="personal-form--fees-value">
                    {monthlyPayments}
                  </span>
                </li>
                <li className="list-group-item">
                  <p className="personal-form--fees-title">APR</p>
                  <p className="personal-form--fees-value">{apr} %</p>
                </li>
              </ul>
            </div>
          </Suspense>

          <div className="row justify-content-md-center">
            <div className="col col-6">
              <Button classNameType="btn fw-bold" title="Submit Application" onClickProp={postSubmissionsData}/>
            </div>
          </div>
        </form>
      </div>

      <p>O valor do input é: {amount}</p>
      <p>O valor do loanPurpose é: {loanPurpose}</p>
      <p>O valor do terms é: {terms}</p>
    </div>
  );
}

export default App;
