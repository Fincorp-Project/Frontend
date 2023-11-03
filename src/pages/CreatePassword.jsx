import React,{useState} from "react";
import '../styles/Verification.css';
import '../styles/CreatePassword.css';
import createpass from '../assets/createpass.png';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate,useParams } from "react-router-dom";
import API_URL from "../utils/apiconfig";
function CreatePassword(){
    const navigate = useNavigate();
    const {token} = useParams();
    const [password, setPassword] = useState("");
    const notifySuccess = (message) => toast.success(message);
  const notifyError = (message) => toast.error(message);
    const handleSubmit = async (e) => {
        e.preventDefault();

        const requestBody = {
            verification_token: token,
            password: password,
        };

        try {
            const response = await axios.post(`${API_URL}/api/auth/verify/set-password/`, requestBody, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            if (response.status === 200) {
                const message = response.data.message;
                // Password set successfully, you can navigate to a success page or perform other actions.
                notifySuccess(message)
                navigate('/registration/complete');
            } else {
                // Handle errors here, e.g., show an error message to the user.
                const message = response.data.message;
                notifyError(message);
                console.error("Password setting failed");
            }
        } catch (error) {
            if(error.response && error.response.status === 400){
                const message = error.response.data.password[0];
                notifyError(message);
        
              }else{
                notifyError("An error occurred. Please contact Admin.")
              }
        }
    };
    return (
        <div className="verification-page">
            <div className="verification-image">
                <img src={createpass} alt="create password image"/>
            </div>
            <div className="verification-form">
                <h2 className="fintech-heading">Fintech Corp</h2>
                <hr className="line"/>
                <h4>Create a password</h4>
                
                <form onSubmit={handleSubmit}>
                <div className="form-group">
            <input className="verification-input icon-input padding-input"type="password" id="password" name="password" placeholder="Please Enter your new password" value={password} onChange={(e) => setPassword(e.target.value)} required/>
          </div> 
          <div className="form-group">
            <input className="verification-input icon-input padding-input"type="password" id="confirm-password" name="confirm-password" placeholder="Please Re - Enter your new password" required/>
          </div> 
          <button type="submit" className="submit-button" >SUBMIT</button>
          <p className="powered-text">Powered by Fintech Corp</p>
                </form>
            </div>
        </div>
    );
}

export default CreatePassword;