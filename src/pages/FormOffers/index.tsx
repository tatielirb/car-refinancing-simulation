import { Suspense, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./formOffers.scss";
import Button from "components/Button";
import Select from "components/Select";
import ListRow from "components/ListRow";
import Alert from "components/Alert";
import Header from "components/Header";
import SimulatorService from "services/SimulatorService";
import { loanPurposeOptions, loanTermOptions } from "utils/DataSelect";
import { useAlerts } from "hooks/useAlerts";
import getLoansAvailableList from 'pages/ConfirmationOpportunities';

export default function FormOffers() {
  const [monthlyPayments, setMonthlyPayments] = useState<number>();
  const [apr, setApr] = useState<number>();
  const [amount, setAmount] = useState<number>();
  const [loanPurpose, setLoanPurpose] = useState<string>("");
  const [terms, setTerms] = useState<number>(0);
  const [id, setId] = useState<string>();
  const { showAlertDisplay, message, type, iconName, showAlert } = useAlerts();
  const [dataLoaded, setDataLoaded] = useState(false);
  const navigate = useNavigate();
  const [submissionData, setSubmissionData] = useState(null);


  useEffect(() => {
    if (loanPurpose !== " " && terms !== 0) {
      if (amount !== 0 && amount !== undefined && terms !== 0) {
        console.log("amount !== 0 && terms !== 0", amount, terms);
        handleSubmit();
      }
    }
  }, [amount, loanPurpose, terms]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAmount(Number(event.target.value));
  };

  const handleLoanPurposeChange = (loanPurpose: string | number) => {
    setLoanPurpose(String(loanPurpose));
  };

  const handleTermChange = (terms: string | number) => {
    setTerms(Number(terms));
  };

  const responseFees = [
    {
      label: "Monthly payment",
      value: monthlyPayments,
    },
    {
      label: "APR",
      value: apr,
    },
  ];

  const requestData = {
    amount: amount || 0,
    loanPurpose: loanPurpose,
    terms: terms,
  };

  const handleSubmit = async () => {
    try {
      const response = await SimulatorService.postOffersInfo(requestData);

      setMonthlyPayments(response.monthlyPayments);
      setApr(response.apr);
      setDataLoaded(true);

      postSubmissionsData(response.id, requestData);
    } catch (error) {
      console.error("Erro ao enviar os dados:", error);
      showAlert(
        "danger",
        "Sorry! We had a problem with our service. Try again later!",
        "exclamation-circle-fill"
      );
    }
  };

  const postSubmissionsData = async (
    id: string,
    requestData: {
      amount: number;
      loanPurpose: string;
      terms: number;
    }
  ) => {
    try {
      const submissionData = {
        offerId: id,
        ...requestData,
      };

      const submissionResponse = await SimulatorService.postSubmissions(
        submissionData
      );

      console.log("submissionResponse", submissionResponse);
      // getLoansAvailableList(submissionResponse.userId);

  
      navigate(`/confirmation-opportunities?${submissionResponse.userId}`);
      console.log("vai ter coisa aqui");
    } catch (error: any) {
      if (requestData.loanPurpose === "API error") {
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
  };

  return (
    <div>
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
            {dataLoaded ? <ListRow items={responseFees} /> : null}
          </Suspense>

          <div className="row justify-content-md-center">
            <div className="col col-6">
              <Button
                classNameType="btn fw-bold"
                title="Submit Application"
                onClickProp={() => {
                  if (id !== undefined) {
                    postSubmissionsData(id, requestData);
                  }
                }}
              />
            </div>
          </div>
        </form>

        <p>O valor do input é: {amount}</p>
        <p>O valor do loanPurpose é: {loanPurpose}</p>
        <p>O valor do terms é: {terms}</p>
      </div>
    </div>
  );
}
