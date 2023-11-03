// import React from "react";
import '../styles/Verification.css';
import '../styles/CreatePassword.css';
import signup from '../assets/signup.png';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react';
import API_URL from '../utils/apiconfig';

function Signup(){
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
    if (!isEmailValid(email)) {
      notifyError("Invalid email address.");
      return;
    }
    const data = {
      "email": email,
      "phonenumber": phonenumber,
    };
    console.log(data);

    try {
      const response = await axios.post(`${API_URL}/api/auth/register`, data,{
        headers: {
          'Content-Type': 'application/json', // Set the content type to JSON
        },
      });
      console.log(response);

      if (response.status === 201) {
        console.log(response.data.user.id)
        notifySuccess('Successful!');
        navigate('/email/send');
      } else {
        const message = response.data.message;
        notifyError(message);
      }
    } catch (error) {
      console.error('Error signing up:', error);
      if(error.response && error.response.status === 400){
        const message = error.response.data.phonenumber[0];
        notifyError(message);

      }else{
        notifyError("An error occurred. Please contact Admin.")
      }
    }
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
                onChange={(e) => setPhonenumber(e.target.value)}
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