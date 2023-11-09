// import React from "react";
import "../styles/Verification.css";
import "../styles/CreatePassword.css";
import signup from "../assets/signup.png";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";
import API_URL from "../utils/apiconfig";

function Signup() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [phonenumber, setPhonenumber] = useState("");
  const notifySuccess = (message) => toast.success(message);
  const notifyError = (message) => toast.error(message);

  const isEmailValid = (email) => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailRegex.test(email);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    phonenumber.toString();
    console.log(phonenumber)
    if (email == "") {
      notifyError("Please enter Email");
      return;
    }
    if (!isEmailValid(email)) {
      notifyError("Invalid email address");
      return;
    }
    if (phonenumber == "") {
      notifyError("Please Enter Phone no");
      return;
    }
    if(phonenumber.length >=15 || phonenumber.length<=13){
      notifyError("Number should be 10 digits long")
    }
    const data = {
      email: email,
      phonenumber: phonenumber,
    };
    console.log(data);

    try {
      const response = await axios.post(`${API_URL}/api/auth/register`, data, {
        headers: {
          "Content-Type": "application/json", // Set the content type to JSON
        },
      });
      console.log(response);

      if (response.status === 201) {
        console.log(response.data.user.id);
        notifySuccess("Successful!");
        navigate("/email/send");
      } else {
        const message = response.data.message;
        notifyError(message);
      }
    } catch (error) {
      console.error("Error signing up:", error);
      // if (error.response && error.response.status === 400) {
      //   const message = error.response.data.phonenumber[0];
      //   notifyError(message);
      // } else {
      //   notifyError("An error occurred. Please contact Admin.");
      // }
    }
  };
  const formatPhoneNumber = (input) => {
    const cleanedInput = input.replace(/\D/g, '');
  
    // Handle the case where the user erases the input
    if (cleanedInput.length === 0) {
      return '';
    } else if (cleanedInput.length <= 3) {
      // Format the first three digits
      return `(${cleanedInput}`;
    } else if (cleanedInput.length <= 6) {
      // Format the first three digits and add a hyphen after the next three digits
      return `(${cleanedInput.slice(0, 3)}) ${cleanedInput.slice(3)}`;
    } else {
      // Format the first three digits, add a hyphen after the next three digits, and another hyphen after the next three digits
      return `(${cleanedInput.slice(0, 3)}) ${cleanedInput.slice(3, 6)}-${cleanedInput.slice(6)}`;
    }
  };
  const handlePhoneNumber = (e) => {
    const inputValue = e.target.value;
    const formattedValue = formatPhoneNumber(inputValue);
    setPhonenumber(formattedValue);
  };
  return (
    <div className="verification-page">
      <div className="verification-image">
        <img src={signup} alt="signup" />
      </div>
      <div className="verification-form">
        <h2 className="fintech-heading">Fintech Corp</h2>
        <hr className="line" />
        <h4>Sign Up</h4>
        <p>Please enter the details give below</p>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              className="verification-input icon-input padding-input"
              type="text"
              id="email"
              name="email"
              value={email}
              placeholder="Please enter your email ID"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group">
            <input
              className="verification-input icon-input padding-input"
              type="text"
              id="Phonenumber"
              name="Phonenumber"
              value={phonenumber}
              placeholder="Please enter your mobile number"
              onChange={handlePhoneNumber}
            />
          </div>
          <button type="submit" className="submit-button">
            SUBMIT
          </button>
          <p className="powered-text">Powered by Fintech Corp</p>
        </form>
      </div>
    </div>
  );
}

export default Signup;
