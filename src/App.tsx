import React from "react";
import "./App.scss";
import Header from "components/Header/Index";
import Button from "components/Button/Index";

function App() {
  return (
    <div className="App">
      <Header title="Car Refinancing Simulation" />
      <div>
        <Button classNameType="btn fw-bold" title="Submit Application" />
      </div>
    </div>
  );
}

export default App;
