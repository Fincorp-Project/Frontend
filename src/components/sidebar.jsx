import React ,{useState}from 'react'
import '../styles/sidebar.css';
import users from '../assets/users.png';
import dashboard from '../assets/dashboard.png';
import bars from '../assets/bars.png';
import { NavLink } from 'react-router-dom';

function Sidebar({children}) {
    const[isOpen ,setIsOpen] = useState(false);
    const togglelogo = () => setIsOpen (!isOpen);
    const toggleScroll = (isOpen) => {
        const body = document.body;
        body.style.overflowY = isOpen ? 'hidden' : 'auto';
        body.style.overflowX = isOpen ? 'hidden' : 'auto';

      };
    const toggle = () => {
        setIsOpen (!isOpen);
        toggleScroll(!isOpen);
        };
    const menuItem =[
        {
            path:"/dashboard",
            name: "Dashboard",
            icon : <img src={dashboard} alt="dashboard"/>

        },
        {
            path:"/users",
            name: "Users",
            icon : <img src={users} alt='users'/>

        },
       
    ]
  return (
    <div className='container'>
<div style={{width: isOpen ? "200px" : "50px"}} className="sidebar">
               <div className='toggle-button icon' onClick={toggle}>
                <img src={bars} />
                </div>
               {menuItem.map((item, index) => (
                        
                            <NavLink to={item.path} key={index} className={isOpen ? "link" : "link-hidden"} activeclassName="active">
                                <div className="icon" title={`${item.name}`}>{item.icon}</div>
                                <div style={{ display: isOpen ? "block" : "none" }} className="link_text">
                                    {item.name}
                                </div>
                            </NavLink>
                        
                    ))}
                    
           </div>
           <main  >{children}</main>

    </div>
  )
}

export default Sidebar;