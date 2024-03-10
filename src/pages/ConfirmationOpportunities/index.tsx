import { useEffect, useState } from "react";
import "./confirmationOpportunities.scss";
import Card from "pages/ConfirmationOpportunities/components/Card";
import ConfirmationMessage from "./components/ConfirmationMessage";

import SimulatorService from "services/SimulatorService";
import Alert from "components/Alert";
import { useAlerts } from "hooks/useAlerts";
import { Key } from "react";
import { LoanAvailableData } from "types/Loans";

export default function ConfirmationOpportunities() {
  const { showAlertDisplay, message, type, iconName, showAlert } = useAlerts();
  const [loansAvailableData, setLoansAvailableData] = useState<
    LoanAvailableData[]
  >([]);

  useEffect(() => {
    if (userId !== null) {
      getLoansAvailableList(userId);
    }
  }, []);

  const userId = localStorage.getItem("userId");

  const getLoansAvailableList = async (userId: string) => {
    try {
      const response = await SimulatorService.getLoansAvailable(userId);
      setLoansAvailableData(response.loansAvailable);
    } catch (error) {
      showAlert(
        "danger",
        "Sorry! We had a problem with our service. Try again later!",
        "exclamation-circle-fill"
      );
    }
  };
  return (
    <div className="confirmation">
      {showAlertDisplay === true && (
        <Alert message={message} type={type} iconName={iconName} />
      )}
      <ConfirmationMessage />

      <div className="results container mt-5">
        <span className="badge rounded-pill text-uppercase">
          <span className="circle">
            <i className="bi bi-currency-dollar"></i>
          </span>
          <p>Savings Available</p>
        </span>
        <p className="fs-5">
          <span className="fw-bold">You could be saving money</span> <br />
          on your existing loans
        </p>

        <div className="col-12">
          <Card loansAvailableList={loansAvailableData} />
        </div>
      </div>
    </div>
  );
}
