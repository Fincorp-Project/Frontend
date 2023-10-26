import React from "react";
import '../styles/Verification.css';
import '../styles/newuserlogin.css'
import newuser from '../assets/newuserlogin.png';

import '../styles/CreatePassword.css';
import createpass from '../assets/createpass.png';
import { useNavigate } from "react-router-dom";
function CreateNewUserPassword(){
    const navigate = useNavigate();
    return (
        <div className="App">
            <div className="new-user-login">
        <div className="verification-page">
            
            <div className="verification-form ">
                <h2 className="fintech-heading">Fintech Corp</h2>
                <hr className="line"/>
                <h4>Create a password</h4>
                
                <form>
                <div className="form-group">
            <input className="verification-input icon-input padding-input"type="text" id="verification-code" name="verification-code" placeholder="Please Enter your new password"/>
          </div> 
          <div className="form-group">
            <input className="verification-input icon-input padding-input"type="text" id="verification-code" name="verification-code" placeholder="Please Re - Enter your new password"/>
          </div> 
          <button type="submit" className="submit-button" onClick={()=> navigate('/registration/complete')}>SUBMIT</button>
          <p className="powered-text">Powered by Fintech Corp</p>
                </form>
            </div>
            <div className="verification-image new-user-image-container">
                <img className="new-user-image"src={newuser} alt="create password image"/>
            </div>
        </div>
        </div>
        </div>
    );
}

export default CreateNewUserPassword;