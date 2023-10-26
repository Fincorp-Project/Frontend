import React from "react";
import "../styles/Verification.css";
import "../styles/CreatePassword.css";
import { useNavigate } from "react-router-dom";
import login from "../assets/login.png";
function Login() {
  const navigate = useNavigate();
  return (
    <div className="verification-page">
      <div className="verification-image">
        <img src={login} alt="signup" />
      </div>
      <div className="verification-form">
        <h2 className="fintech-heading">Fintech Corp</h2>
        <hr className="line" />
        <h4>Login </h4>
        <p>Welcome back, Please enter your details</p>
        <form>
          <div className="form-group">
            <input
              className="verification-input icon-input "
              type="text"
              id="verification-code"
              name="verification-code"
              placeholder="Username"
            />
            <p className="forgot-para">Forget username?</p>
          </div>
          <div className="form-group">
            <input
              className="verification-input icon-input "
              type="text"
              id="verification-code"
              name="verification-code"
              placeholder="Password"
            />
            <p className="forgot-para">Forget password?</p>
          </div>
          <button type="submit" className="submit-button login-button" onClick={()=> navigate('/users')}>
            SUBMIT
          </button>
          <div className="Login-with-gmail-and-outlook">
            <button>Login with Gmail</button>
            <button>Login with Outlook</button>
          </div>
          <p>Don't have an account <span className="bold-text" onClick={()=>navigate('/signup')}>Create a now</span></p>
          <p className="powered-text">Powered by Fintech Corp</p>
        </form>
      </div>
    </div>
  );
}

export default Login;
