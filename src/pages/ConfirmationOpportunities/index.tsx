import "./confirmationOpportunities.scss";
import Card from "pages/ConfirmationOpportunities/components/Card";
import ConfirmationMessage from "./components/ConfirmationMessage";
import { loansAvailableData } from "utils/DataLoan";

export default function ConfirmationOpportunities() {
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
            {loansAvailableData.map((loansAvailable, index) => (
              <Card key={index} loansAvailable={loansAvailable} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
