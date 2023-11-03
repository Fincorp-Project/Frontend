import React from 'react'
import '../styles/userlist.css'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react';
import API_URL from '../utils/apiconfig';
function CreateUser() {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
  const [phonenumber, setPhonenumber] = useState("");
  const notifySuccess = (message) => toast.success(message);
  const notifyError = (message) => toast.error(message);
  return (
    <div className='App'>
       <div className='users-heading'>
        <h2 className='create-user-heading'>Create New User</h2>
        </div> 
        <div className='create-user-form'>
            <form>
                <div className='create-form-row'>
                    <div className='create-form-group'>
                        <input placeholder='First Name' name="firstname" type='text'/>
                    </div>
                    <div className='create-form-group'>
                    <input placeholder='Middle Name' name="middlename" type='text'/>

                    </div>
                </div>
                <div className='create-form-row'>
                    <div className='create-form-group'>
                    <input placeholder='Last Name' name="firstname"type='text'/>

                    </div>
                </div>
                <div className='create-form-row'>
                    <div className='create-form-group'>
                    <input placeholder='Work email address' name="firstname" type='text'/>

                    </div>
                    <div className='create-form-group'>
                    <input placeholder='xxx-xxx-xxxx' name="firstname" type='text'/>

                    </div>
                  

                </div>
                <div className='buttons'>
                <button className='cancel-button'>Cancel</button>
                <button className='create-button' onClick={() => navigate('/new-user-login')}>Create</button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default CreateUser