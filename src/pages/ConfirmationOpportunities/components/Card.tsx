import { LoansAvailableResponse } from "types/Loans";
import Button from "components/Button";
export default function Card({ loansAvailable }: LoansAvailableResponse) {
  return (
    <div className="card mb-3 shadow col-12 col-sm col-md col-lg">
      <div className="card-header">
        <p className="card-header--title fw-medium">{loansAvailable.lender}</p>
        <p>$ {loansAvailable.monthlyPayments} /month</p>
      </div>

      <div className="card-body">
        <div className="card-body--car row g-0">
          <div className="col-3 card-body--img">
            <img
              src={loansAvailable.automobile.imageSource}
              className="rounded"
              alt={loansAvailable.automobile.make}
            />
          </div>
          <div className="card-body-content col-8">
            <p className="card-body-content--title">
              {loansAvailable.automobile.year}
              {loansAvailable.automobile.make}
              {loansAvailable.automobile.model}
            </p>
            <p className="card-body-content--text text-secondary-emphasis">
              estimated {loansAvailable.automobile.mileage} mi
            </p>
          </div>
        </div>

        <div className="card-body--fees">
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <p className="card-body--fees-title">APR</p>
              <p className="card-body--fees-value"> {loansAvailable.apr} %</p>
            </li>
            <li className="list-group-item">
              <p className="card-body--fees-title">Time Remaining</p>
              <p className="card-body--fees-value">
                {loansAvailable.remainingMonths} mo
              </p>
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
