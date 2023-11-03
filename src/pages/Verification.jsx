import React ,{useEffect}from "react";
import '../styles/Verification.css';
import { useNavigate,useParams} from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import verificationImg from '../assets/verification.png';
import axios from "axios";
import API_URL from "../utils/apiconfig";
function Verification(){
    const navigate = useNavigate();
    const {token} = useParams();
    const notifySuccess = (message) => toast.success(message);
    const notifyError = (message) => toast.error(message);
    const verifyEmail = async () => {
        if (token) {
            try {
                console.log("send");
                const response = await axios.post(`${API_URL}api/auth/verify/email-verification/`, { token });
    
                if (response.status === 200) {
                    const data = response.data;
                    const message = data.message;
                    console.log(data.message);
                    console.log("verified");
                    // navigate('/verify');
                    notifySuccess(message)
                    navigate(`/create-pass/${token}`);
                } else {
                    const message = response.data.message;
                    console.error("Email verification failed");
                    notifyError(message);
                }
            } catch (error) {
                console.error("Error while verifying email:", error);
            }
        } else {
            console.error("Token not found");
        }
    };
    useEffect(() => {
        // Call the API for email verification when the component mounts
        verifyEmail();
    }, []);
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
          <button type="submit" className="submit-button" onClick={()=>navigate('/create/pass')}>SUBMIT</button>
          <p className="powered-text">Powered by Fintech Corp</p>
                </form>
            </div>
        </div>
    );
}

export default Verification;