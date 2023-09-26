import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import CreditCardUi from "./components/CreditCardUi";
function App() {
  return (
    <div className="container mt-5">
      <h2 className="mb-4">React Credit Card Payment UI Componenet Example</h2>
      <CreditCardUi />
    </div>
  );
}
export default App;