import React from 'react'
import '../styles/topbar.css';
import '../styles/Verification.css';
import notification from '../assets/notifications.png';
import profile from '../assets/Profile.png';
function Topbar() {
  return (
    <div className='topbar'>
        <h2 className='fintech-heading'>Fintech Corp</h2>
        <div className='search-box'>
            <input placeholder='Search' name='search' type='text' />
        </div>
        <div className='additional-items'>
        <img className="notification-img"src={notification} alt='notifications'/>
        <img className="profile-img"src={profile} alt='profile'/>
        <div className='username'>Username</div>
        </div>
    </div>
  )
}

export default Topbar;