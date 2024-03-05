import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import FormOffers from "pages/FormOffers";
import ConfirmationOpportunities from "pages/ConfirmationOpportunities";

export default function MainRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" Component={FormOffers} />
        <Route path="confirmation-opportunities" Component={ConfirmationOpportunities} />
      </Routes>
    </Router>
  );
}
