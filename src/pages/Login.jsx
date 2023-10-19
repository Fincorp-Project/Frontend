import React from "react";
import "../styles/Verification.css";
import "../styles/CreatePassword.css";
import login from "../assets/login.png";
function Login() {
  return (
    <div className="verification-page">
      <div className="verification-image">
        <img src={login} alt="signup" />
      </div>
      <div className="verification-form">
        <h2 className="fintech-heading">Fintech Corp</h2>
        <hr className="line" />
        <h4>Login Up</h4>
        <p>Welcome back, Please enter your details</p>
        <form>
          <div className="form-group">
            <input
              className="verification-input icon-input"
              type="text"
              id="verification-code"
              name="verification-code"
              placeholder="Username"
            />
            <p>Forget username?</p>
          </div>
          <div className="form-group">
            <input
              className="verification-input icon-input"
              type="text"
              id="verification-code"
              name="verification-code"
              placeholder="Password"
            />
            <p>Forget password?</p>
          </div>
          <button type="submit" className="submit-button">
            SUBMIT
          </button>
          <div>
            <button>Login with Gmail</button>
            <button>Login with Outlook</button>
          </div>
          <p className="powered-text">Powered by Fintech Corp</p>
        </form>
      </div>
    </div>
  );
}

export default Login;
