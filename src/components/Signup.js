import React, { useState } from "react";


function Signup() {
  const [formData, setFormData] = useState({
    email: "",
    phoneNumber: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm(formData);
    if (Object.keys(validationErrors).length === 0) {
      // You can make an API call to register the user here
      console.log("Form data submitted:", formData);
    } else {
      setErrors(validationErrors);
    }
  };

  const validateForm = (data) => {
    const errors = {};
    // Basic form validation
    if (!data.email) {
      errors.email = "Email is required";
    }
    if (!data.phoneNumber) {
      errors.phoneNumber = "Phone Number is required";
    }
    return errors;
  };

  return (
    <div className="signup-container">
      <div className="signup-img">
      </div>
      <div className="signup-form">
        <p className="logo">Fintech Corp</p>
        <hr className="line" />
        <p className="signuptext">Sign Up</p>
        <p className="subtext">Please enter the details give below</p>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            placeholder="Please enter your email ID"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <div className="error">{errors.email}</div>}

          <input
            type="tel"
            name="phoneNumber"
            placeholder="Please enter your mobile number"
            value={formData.phoneNumber}
            onChange={handleChange}
          />
          {errors.phoneNumber && (
            <div className="error">{errors.phoneNumber}</div>
          )}
          <button type="submit">Sign Up</button>
        </form>
        <p className="btmline">Powered by Fintech Corp</p>
      </div>
    </div>
  );
}

export default Signup;
