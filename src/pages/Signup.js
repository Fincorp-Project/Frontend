// import React from "react";
import '../styles/Verification.css';
import '../styles/CreatePassword.css';
import signup from '../assets/signup.png';
import { useNavigate } from 'react-router-dom';
function Signup(){
  const navigate = useNavigate();
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
          <form>
            <div className="form-group">
              <input
                className="verification-input icon-input padding-input"
                type="text"
                id="verification-code"
                name="verification-code"
                placeholder="Please enter your email ID"
              />
            </div>
            <div className="form-group">
              <input
                className="verification-input icon-input padding-input"
                type="text"
                id="verification-code"
                name="verification-code"
                placeholder="Please enter your mobile number"
              />
            </div>
            <button type="submit" className="submit-button" onClick={()=>navigate('/email/send')}>
              SUBMIT
            </button>
            <p className="powered-text">Powered by Fintech Corp</p>
          </form>
        </div>
      </div>
    );
}

export default Signup;