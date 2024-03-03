import React from "react";
import "./App.scss";
import Header from "components/Header/header";
import Alert from "components/Alert";
import FormOffers from "pages/FormOffers/Index";
import { useAlerts } from "hooks/useAlerts";

function App() {
  const { showAlertDisplay, message, type, iconName, showAlert } = useAlerts();

  return (
    <div className="App">
      <Header title="Car Refinancing Simulation" />
      {showAlertDisplay === true && (
        <Alert message={message} type={type} iconName={iconName} />
      )}

      <FormOffers />
    </div>
  );
}

export default App;
