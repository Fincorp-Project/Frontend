import React ,{useState}from 'react'
import '../styles/sidebar.css';
import users from '../assets/users-black.png';
import dashboard from '../assets/dashboard-black.png';
import userwhite from '../assets/users-white.png';
import dashboardwhite from '../assets/dashboard-white.png'
import bars from '../assets/bars.png';
import logout from '../assets/logout.png';
import back from '../assets/back.png';
import { NavLink,useLocation } from 'react-router-dom';

function Sidebar({children}) {
    const location = useLocation();
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
            icon: (
                <img src={location.pathname === '/dashboard' ? dashboardwhite : dashboard} alt="dashboard" />
              ),
        },
        {
            path:"/users",
            name: "Users",
            icon: (
                <img src={location.pathname === '/users' ? userwhite : users} alt="users" />
              ),
        },
       
    ]
  return (
    <div className='container'>
<div style={{width: isOpen ? "200px" : "50px"}} className="sidebar">
    {isOpen ? (
        <div className="toggle-button icon right" onClick={toggle}>
        <img src={back} alt="back" />
      </div>
    ):(
        <div className='toggle-button icon' onClick={toggle}>
                <img src={bars} />
                </div>
    )}
               
               {menuItem.map((item, index) => (
                        
                            <NavLink to={item.path} key={index} className={isOpen ? "link" : "link-hidden"} activeclassName="active">
                                <div className="icon" title={`${item.name}`}>{item.icon}</div>
                                <div style={{ display: isOpen ? "block" : "none" }} className="link_text">
                                    {item.name}
                                </div>
                            </NavLink>
                        
                    ))}
                     <div className={isOpen ? "link  bottom-logout" : "link-hidden  bottom-logout-close"} >
                            <div className="icon " title='Log Out'><img src={logout} className='icon-img' /></div>
                            <div style={{ display: isOpen ? "block" : "none" }} className="link_text">Log Out</div>
                        </div>
                    
           </div>
           <main  >{children}</main>

    </div>
  )
}

export default Sidebar;