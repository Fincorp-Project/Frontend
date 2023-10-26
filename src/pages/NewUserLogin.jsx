import React from 'react'
import '../styles/newuserlogin.css'
import '../styles/Verification.css';
import { useNavigate} from 'react-router-dom';
import newuser from '../assets/newuserlogin.png';
function NewUserLogin() {
    const navigate = useNavigate();

  return (
    <div className='App'>
        <div className='new-user-login'>
        <div className="verification-page">
            
            <div className="verification-form new-user-form">
                <h2 className="fintech-heading">Fintech Corp</h2>
                <hr className="line"/>
                <h4>New User Login</h4>
                <p>Welcome, Please enter your mobile number to log in into your account</p>
                <form>
                <div className="form-group">
            <input className="verification-input icon-input"type="text" id="verification-code" name="verification-code" placeholder="Please Enter your mobile number"/>
          </div> 
          <button type="submit" className="submit-button" onClick={()=>navigate('/new-user-verification')}>SUBMIT</button>
          <p className="powered-text">Powered by Fintech Corp</p>
                </form>
            </div>
            <div className="verification-image new-user-image-container">
                <img className="new-user-image"src={newuser} alt="Verification image"/>
            </div>
        </div>
        </div>
    </div>
  )
}

export default NewUserLogin