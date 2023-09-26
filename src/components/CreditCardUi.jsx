import React, { useState } from "react";
import Cards from "react-credit-cards-2";
import "react-credit-cards-2/dist/es/styles-compiled.css";

const PaymentForm = () => {
  const [state, setState] = useState({
    number: "",
    expiry: "",
    cvc: "",
    name: "",
    focus: "",
  });

  const handleInputChange = (evt) => {
    const { name, value } = evt.target;
    setState((prev) => ({ ...prev, [name]: value }));
  };

  const handleInputNumbersOnly = (evt) => {
    const { name, value } = evt.target;
    // Validate that only numbers are entered
    if (/^[0-9]*$/.test(value) || value === "") {
      setState((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleInputFocus = (evt) => {
    setState((prev) => ({ ...prev, focus: evt.target.name }));
  };

  // Function to format the card number for preview
  const formatCardNumberForPreview = (number) => {
    // Get the first 4 digits
    const first4 = number.slice(0, 4);
    // Get the last 4 digits
    const last4 = number.slice(-4);

    // Check if there are more than 8 digits for masking
    if (number.length > 8) {
      // Create a masked string with asterisks for the middle digits
      const maskedMiddle = "*".repeat(number.length - 8); // Mask all but 4 digits on each end
      // Combine the visible first 4, masked middle, and visible last 4
      return `${first4} ${maskedMiddle} ${last4}`;
    } else {
      // If there are 8 or fewer digits, don't mask anything
      return number;
    }
  };

  return (
    <div>
      <Cards
        number={formatCardNumberForPreview(state.number)}
        expiry={state.expiry}
        cvc={state.cvc}
        name={state.name}
        focused={state.focus}        
      />
      <form>
        <div className="form-group mb-3 mt-4">
          <input
            type="text"
            name="number"
            className="form-control"
            placeholder="Card Number"
            maxLength="16"
            pattern="[0-9]*"
            value={state.number}
            required
            onChange={handleInputNumbersOnly}
            onFocus={handleInputFocus}
          />
        </div>
        <div className="form-group mb-3">
          <input
            type="text"
            name="name"
            className="form-control"
            placeholder="Name"
            required
            onChange={handleInputChange}
            onFocus={handleInputFocus}
          />
        </div>
        <div className="row mb-3">
          <div className="col-6">
            <input
              type="text"
              name="expiry"
              className="form-control"
              placeholder="Valid Thru"
              maxLength="4"
              pattern="[0-9]*"
              value={state.expiry}
              onChange={handleInputNumbersOnly}
              onFocus={handleInputFocus}
            />
          </div>
          <div className="col-6">
            <input
              type="text"
              name="cvc"
              className="form-control"
              placeholder="CVC"
              maxLength="4"
              required
              value={state.cvc}
              onChange={handleInputNumbersOnly}
              onFocus={handleInputFocus}
            />
          </div>
        </div>

        <div className="d-grid">
          <button className="btn btn-dark">Confirm</button>
        </div>
      </form>
    </div>
  );
};

export default PaymentForm;
