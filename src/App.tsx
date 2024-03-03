import React from "react";
import "./App.scss";
import Header from "components/Header";
import Alert from "components/Alert";
import FormOffers from "pages/FormOffers/FormOffers";
import { useAlerts } from "hooks/useAlerts";
import MainRoutes from "route/Routes";

function App() {
  const { showAlertDisplay, message, type, iconName, showAlert } = useAlerts();

  return (
    <div className="App">
      <Header title="Car Refinancing Simulation" />
      {showAlertDisplay === true && (
        <Alert message={message} type={type} iconName={iconName} />
      )}

      <FormOffers />
      <MainRoutes />
    </div>
  );
}

export default App;
