import "./confirmationOpportunities.scss";
import Card from "pages/ConfirmationOpportunities/components/Card";
import ConfirmationMessage from "./components/ConfirmationMessage";
import { loansAvailableData } from "utils/DataLoan";
import SimulatorService from "services/SimulatorService";
import Alert from "components/Alert";
import { useAlerts } from "hooks/useAlerts";
import { Key } from "react";
import { LoanAvailableData } from "types/Loans";

export default function ConfirmationOpportunities() {
  const { showAlertDisplay, message, type, iconName, showAlert } = useAlerts();

  const getLoansAvailableList = async (userId: string) => {
    try {
      // const response = await SimulatorService.getLoansAvailable(
      //   this.$store.state.submissionsResponse.userId
      // );
      // this.cardLoan = response.loansAvailable;
      console.log("olas", userId)
    } catch (error) {
      console.error("Erro ao enviar os dados:", error);
      showAlert(
        "danger",
        "Sorry! We had a problem with our service. Try again later!",
        "exclamation-circle-fill"
      );
    }
  };
  return (
    <div className="confirmation">
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
          <div className="row group-card g-2 g-lg-3">
            {loansAvailableData.map((loansAvailable: LoanAvailableData, index: Key | null | undefined) => (
              <Card key={index} loansAvailable={loansAvailable} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
