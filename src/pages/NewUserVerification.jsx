import React from "react";
import '../styles/Verification.css';
import { useNavigate} from 'react-router-dom';
import '../styles/newuserlogin.css'
import newuser from '../assets/newuserlogin.png';

function NewUserVerification(){
    const navigate = useNavigate();
    return (
        <div className="verification-page">
            
            <div className="verification-form new-user-from verification-user-form">
                <h2 className="fintech-heading">Fintech Corp</h2>
                <hr className="line"/>
                <h4>Verification</h4>
                <p>We have sent verification code to +1 0000000000
enter it below</p>
                <form>
                <div className="form-group">
            <input className="verification-input icon-input"type="text" id="verification-code" name="verification-code" placeholder="Please Enter verification code"/>
          </div> 
          <button type="submit" className="submit-button" onClick={()=>navigate('/new-user-create-password')}>SUBMIT</button>
          <p className="powered-text">Powered by Fintech Corp</p>
                </form>
            </div>
            <div className="verification-image new-user-image-container">
                <img className="new-user-image"src={newuser} alt="Verification image"/>
            </div>
        </div>
    );
}

export default NewUserVerification;