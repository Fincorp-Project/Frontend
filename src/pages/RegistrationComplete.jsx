import React from "react";
import '../styles/Verification.css';
import { useNavigate} from 'react-router-dom';
import success from '../assets/success.png';
import verificationImg from '../assets/verification.png';
import '../styles/RegisterComplete.css';
function RegistrationComplete(){
    const navigate = useNavigate();
    return (
        <div className="verification-page">
            <div className="verification-image">
                <img src={verificationImg} alt="Verification image"/>
            </div>
            <div className="verification-form">
                <h2 className="fintech-heading">Fintech Corp</h2>
                <hr className="line"/>
                <img src={success} alt="success img"/>
                <h4>Registration is complete</h4>
                
                <form>
                
          <button type="submit" className="submit-button"onClick={()=> navigate('/')}>LOGIN NOW</button>
          <p className="powered-text">Powered by Fintech Corp</p>
                </form>
            </div>
        </div>
    );
}

export default RegistrationComplete;