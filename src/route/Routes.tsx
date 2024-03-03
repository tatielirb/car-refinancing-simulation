import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import FormOffers from "pages/FormOffers";

export default function MainRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" Component={FormOffers} />
      </Routes>
    </Router>
  );
}
