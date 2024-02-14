import React from "react";
import "./App.scss";
import Header from "components/Header/Index";
import Button from "components/Button/Index";
import Alert from "components/Alert/Index";
function App() {
  return (
    <div className="App">
      <Header title="Car Refinancing Simulation" />
      <Alert
        message="Sorry! We had a problem with our service. Try again later!"
        type="danger"
        iconName="exclamation-triangle-fill"
      />
      <div>
        <Button classNameType="btn fw-bold" title="Submit Application" />
      </div>
    </div>
  );
}

export default App;
