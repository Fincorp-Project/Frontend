import React from "react";
import '../styles/Verification.css';
import '../styles/CreatePassword.css';
import createpass from '../assets/createpass.png';
function CreatePassword(){
    return (
        <div className="verification-page">
            <div className="verification-image">
                <img src={createpass} alt="create password image"/>
            </div>
            <div className="verification-form">
                <h2 className="fintech-heading">Fintech Corp</h2>
                <hr className="line"/>
                <h4>Create a password</h4>
                
                <form>
                <div className="form-group">
            <input className="verification-input icon-input"type="text" id="verification-code" name="verification-code" placeholder="Please Enter your new password"/>
          </div> 
          <div className="form-group">
            <input className="verification-input icon-input"type="text" id="verification-code" name="verification-code" placeholder="Please Re - Enter your new password"/>
          </div> 
          <button type="submit" className="submit-button">SUBMIT</button>
          <p className="powered-text">Powered by Fintech Corp</p>
                </form>
            </div>
        </div>
    );
}

export default CreatePassword;