import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./app.css";
import CreditCardUi from "./components/CreditCardUi";
function App() {
  return (
    <div className="container rounded mt-5 p-5 w-25 bg-light">
      <h2 className="mb-4">React Credit Card Payment UI Componenet Example</h2>
      <CreditCardUi />
    </div>
  );
}
export default App;
