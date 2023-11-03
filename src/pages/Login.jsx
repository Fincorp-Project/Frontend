import React,{useState} from "react";
import "../styles/Verification.css";
import "../styles/CreatePassword.css";
import { useNavigate } from "react-router-dom";
import login from "../assets/login.png";
import gmail from '../assets/Gmail logo.png';
import outlook from '../assets/Outlook logo.png';
import '../styles/sidebar.css'
import axios from "axios";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import API_URL from "../utils/apiconfig";
function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const notifySuccess = (message) => toast.success(message);
  const notifyError = (message) => toast.error(message);
  const handleSubmit = async (e) => {
    e.preventDefault();

    const requestBody = {
      email: username,
      password: password,
    };

    try {
      const response = await axios.post(`${API_URL}/api/auth/login`, requestBody, {
        headers: {
          'Content-Type': 'application/json'
        }
      });

      if (response.status === 200) {
        // Login successful, you can handle the response data here,
        // such as saving tokens or user information to state or localStorage.
        const message = response.data.message;
        notifySuccess('Login Successfull');
        navigate('/users'); // Navigate to the users page or any other page.
      } else {
        const message = response.data.message;
        notifyError(message);
        // Handle login failure, e.g., display an error message to the user.
        console.error("Login failed");
      }
    } catch (error) {
      if(error.response && error.response.status === 401){
        const message = error.response.data.detail;
        notifyError(message);

      }else{
        notifyError("An error occurred. Please contact Admin.")
      }
      console.error("Error while making the API request:", error);
    }
  };
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
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              className="verification-input icon-input "
              type="text"
              id="username"
              name="username"
              value={username}
              placeholder="Username"
              onChange={(e) => setUsername(e.target.value)}
            />
            <p className="forgot-para">Forget username?</p>
          </div>
          <div className="form-group">
            <input
              className="verification-input icon-input "
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <p className="forgot-para">Forget password?</p>
          </div>
          <button type="submit" className="submit-button login-button" >
            SUBMIT
          </button>
          <div className="or-divider">
              <div className="or-line"></div>
              <div className="or-text">OR</div>
              <div className="or-line"></div>
            </div>
          <div className="Login-with-gmail-and-outlook">
            <button><img src={gmail} className="gmail"/>Login with Gmail</button>
            <button><img src={outlook} className="gmail"/>Login with Outlook</button>
          </div>
          <p>Don't have an account <span className="bold-text" onClick={()=>navigate('/signup')}>Create a now</span></p>
          <p className="powered-text">Powered by Fintech Corp</p>
        </form>
      </div>
    </div>
  );
}

export default Login;
