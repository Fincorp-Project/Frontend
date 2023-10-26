import React,{useState} from 'react'
import '../styles/userlist.css'
import dots from '../assets/dots.png';
import { useNavigate } from "react-router-dom";
import edit from '../assets/edit.png'
import resend from '../assets/resend.png'
function Users() {
    const navigate = useNavigate();
    const [openDivId, setOpenDivId] = useState(null);
    const users = [
        // Replace this with your actual user data
        {id:1,  name: 'User 1', email: 'user1@example.com', status: 'active' },
        {id:2,  name: 'User 2', email: 'user2@example.com', status: 'inactive' },
        {id:1,  name: 'User 1', email: 'user1@example.com', status: 'active' },
        {id:2,  name: 'User 2', email: 'user2@example.com', status: 'inactive' },
        {id:1,  name: 'User 1', email: 'user1@example.com', status: 'active' },
        // Add more user data as needed
      ];
      const toggleDiv = (userId) => {
        if (openDivId === userId) {
          setOpenDivId(null);
        } else {
          setOpenDivId(userId);
        }
      };
  return (
    <div className='App'>
        <div className='users-heading'>
            <h2 >User List</h2>
            <button onClick={()=>navigate('/create-user')}>+ Create User</button>

        </div>
        <div className='grid-container'>
        <div className="user-grid">
        <div className="user-row user-header">
          
          <div>Name</div>
          <div>Email</div>
          <div>status</div>
          <div></div>
        </div>
        {users.map((user, index) => (
          <div
            key={user.id}
            className={`user-row ${index % 2 === 0 ? 'even' : 'odd'}`}
          >
           
            <div>{user.name}</div>
            <div>{user.email}</div>
            <div className='status'><button>{user.status}</button></div>
            <div><img className='dots' src={dots} onClick={() => toggleDiv(user.id)}/>
            
            </div>

          </div>
        ))},
        {users.map((user) => (
      <div key={user.id}>
        {openDivId === user.id && (
          <div className="options-div">
            <div><img src={edit} />Edit</div>
            <div><img src={resend} />Re-send Activation</div>
          </div>
        )}
      </div>
   ) )}
        
      </div>
     
    </div>
    
    </div>
    
  )
}

export default Users;