import React from "react";
import '../styles/Verification.css';
import { useNavigate} from 'react-router-dom';

import verificationImg from '../assets/verification.png';
function Verification(){
    // const navigate = useNavigate();
    return (
        <div className="verification-page">
            <div className="verification-image">
                <img src={verificationImg} alt="Verification image"/>
            </div>
            <div className="verification-form">
                <h2 className="fintech-heading">Fintech Corp</h2>
                <hr className="line"/>
                <h4>Verification</h4>
                <p>We have sent verification code to +1 0000000000
enter it below</p>
                <form>
                <div className="form-group">
            <input className="verification-input icon-input"type="text" id="verification-code" name="verification-code" placeholder="Please Enter verification code"/>
          </div> 
          <button type="submit" className="submit-button">SUBMIT</button>
          <p className="powered-text">Powered by Fintech Corp</p>
                </form>
            </div>
        </div>
    );
}

export default Verification;