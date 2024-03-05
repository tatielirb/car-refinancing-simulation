// import { LoansAvailableResponse } from "types/Loans";
import Button from "components/Button";
export default function Card() {
  return (
    <div className="card mb-3 shadow col">
      <div className="card-header">
        <p className="card-header--title fw-medium"> loan.lender </p>
        <p>$ loan.monthlyPayments /month</p>
      </div>

      <div className="card-body">
        <div className="card-body--car row g-0">
          <div className="col-3 card-body--img">
            <img src="" className="rounded" alt="..." />
          </div>
          <div className="card-body-content col-8">
            <p className="card-body-content--title">
              loan.automobile.year loan.automobile.make loan.automobile.model
            </p>
            <p className="card-body-content--text text-secondary-emphasis">
              estimated formatMileage(loan.automobile.mileage) mi
            </p>
          </div>
        </div>

        <div className="card-body--fees">
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <p className="card-body--fees-title">APR</p>
              <p className="card-body--fees-value"> loan.apr %</p>
            </li>
            <li className="list-group-item">
              <p className="card-body--fees-title">Time Remaining</p>
              <p className="card-body--fees-value">loan.remainingMonths mo</p>
            </li>
          </ul>
        </div>
        <div className="d-grid gap-2 card-body--btn">
          <Button classNameType="btn fw-bold" title="Start Saving" />
        </div>
      </div>
    </div>
  );
}
