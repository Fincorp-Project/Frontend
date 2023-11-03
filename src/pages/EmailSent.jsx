import React, { useEffect } from "react";
import '../styles/Verification.css';
import { useNavigate} from 'react-router-dom';
import emailsend from '../assets/emailsend.png';
import '../styles/EmailSend.css';
import API_URL from '../utils/apiconfig';
import axios from "axios"; // Import Axios

function EmailSent(){
    const navigate = useNavigate();

    // const navigationTime = 5000; 
    const verifyEmail = async () => {
        const token = localStorage.getItem("token");
        if (token) {
            try {
                console.log("send");
                const response = await axios.post(`${API_URL}api/auth/verify/email-verification/`, { token });
    
                if (response.status === 200) {
                    const data = response.data;
                    console.log(data.message);
                    console.log("verified");
                    navigate('/verify');
                } else {
                    console.error("Email verification failed");
                }
            } catch (error) {
                console.error("Error while verifying email:", error);
            }
        } else {
            console.error("Token not found");
        }
    };
    
    // const verifyEmail = async() => {
    //     const token = localStorage.getItem("token");
    //     if(token){
    //         try{
    //             console.log("send");
    //             const response = await fetch(`${API_URL}api/auth/verify/email-verificaion/`,{
    //                 method: "POST",
    //                 headers: {
    //                     "Content-type": "application/json",
    //                 },
    //                 body: JSON.stringify({token}),
    //             });
    //             console.log(response);
    //             if(response.status === 200){
    //                 const data = await response.json();
    //                 console.log(data.message);
    //                 console.log("verified")
    //                 navigate('/verify');
    //             }else{
    //                 console.error("email verification failed");
    //             }
    //         }catch (error){
    //             console.error("Error while verifying email:",error);
    //         }
    //     }else{
    //         console.error("token not found");
    //     }
    // };
    useEffect(() => {
        // Call the API for email verification when the component mounts
        verifyEmail();
    }, []);
    // useEffect(() => {
    //     const timeoutId = setTimeout(() => {
    //         navigate('/verify'); 
    //     }, navigationTime);

    //     return () => clearTimeout(timeoutId);
    // }, [navigate]);
    return (
        <div className="verification-page">
            <div className="verification-image">
                <img src={emailsend} alt="Verification image"/>
            </div>
            <div className="verification-form">
                <h2 className="fintech-heading">Fintech Corp</h2>
                <hr className="line"/>
                <div className="email-send-para">
                <p>Hi!</p>
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