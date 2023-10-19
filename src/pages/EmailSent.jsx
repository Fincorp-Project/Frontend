import React, { useEffect } from "react";
import '../styles/Verification.css';
import { useNavigate} from 'react-router-dom';
import emailsend from '../assets/emailsend.png';
import '../styles/EmailSend.css';
function EmailSent(){
    const navigate = useNavigate();

    // Set the time in milliseconds after which you want to navigate to another page
    const navigationTime = 5000; // 5000 milliseconds = 5 seconds

    useEffect(() => {
        // Use setTimeout to navigate after a certain time
        const timeoutId = setTimeout(() => {
            navigate('/verify'); // Replace '/other-page' with the actual path you want to navigate to
        }, navigationTime);

        // Clear the timeout if the component unmounts before the timeout is reached
        return () => clearTimeout(timeoutId);
    }, [navigate]);
    // const navigate = useNavigate();
    return (
        <div className="verification-page">
            <div className="verification-image">
                <img src={emailsend} alt="Verification image"/>
            </div>
            <div className="verification-form">
                <h2 className="fintech-heading">Fintech Corp</h2>
                <hr className="line"/>
                <div className="email-send-para">
                <p>Hi Username!</p>
                <p>
We have sent an email to your mail ID for the verification purpose
please check that for log in to your account
and also we have sent a verification code on your mobile number.</p>
<p className="why-this-text"><a href="#">Why This?</a></p>
</div>
                <form>
                
          <p className="powered-text">Powered by Fintech Corp</p>
                </form>
            </div>
        </div>
    );
}

export default EmailSent;