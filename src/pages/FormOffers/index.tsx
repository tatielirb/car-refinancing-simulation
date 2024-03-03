import { Suspense } from "react";
import "./formOffers.scss";
import Button from "components/Button";
import Select from "components/Select";
import ListRow from "components/ListRow";
import { loanPurposeOptions, loanTermOptions } from "utils/DataSelect";

import { useFormOffers } from "hooks/useFormOffers";

export default function FormOffers() {
  const {
    amount,
    loanPurpose,
    terms,
    dataLoaded,
    responseFees,
    handleInputChange,
    handleLoanPurposeChange,
    handleTermChange,
    postSubmissionsData,
  } = useFormOffers();

  return (
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
              onClickProp={postSubmissionsData}
            />
          </div>
        </div>
      </form>

      <p>O valor do input é: {amount}</p>
      <p>O valor do loanPurpose é: {loanPurpose}</p>
      <p>O valor do terms é: {terms}</p>
    </div>
  );
}
