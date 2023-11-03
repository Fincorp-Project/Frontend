import React,{useState} from 'react'
import '../styles/userlist.css'
import dots from '../assets/dots.png';
import { useNavigate } from "react-router-dom";
import edit from '../assets/edit.png'
import resend from '../assets/resend.png'
function Users() {
    const navigate = useNavigate();
    const users = [
      // Replace this with your actual user data
      {id:1,  name: 'User 1', email: 'user1@example.com', status: 'active' },
      {id:2,  name: 'User 2', email: 'user2@example.com', status: 'inactive' },
      {id:1,  name: 'User 1', email: 'user1@example.com', status: 'active' },
      {id:2,  name: 'User 2', email: 'user2@example.com', status: 'inactive' },
      {id:1,  name: 'User 1', email: 'user1@example.com', status: 'active' },
      // Add more user data as needed
    ];
    const [openDivId, setOpenDivId] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10); // You can set the default items per page
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = users.slice(indexOfFirstItem, indexOfLastItem);
  const pagesToDisplay = 4;
  const totalPages = Math.ceil(users.length / itemsPerPage) || 1;

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
   
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
    <div className="pagination">
  <div className="items-per-page">
    <label>Show Items per Page:</label>
    <select
      onChange={(e) => setItemsPerPage(parseInt(e.target.value))}
      value={itemsPerPage}
    >
      <option value={10}>10</option>
      <option value={20}>20</option>
      <option value={50}>50</option>
    </select>
  </div>
  <div className="pagination-controls">
    <ul className="pagination-list">
    <li>
      <button
        onClick={() => handlePageChange(currentPage - 1 )}
        disabled={currentPage === 1}
      >
        Previous
      </button>
    </li>

      {Array(pagesToDisplay)
        .fill()
        .map((_, index) => {
          const page = currentPage + index - Math.floor(pagesToDisplay / 2);

    if (page>=1&& page <= totalPages){
          return (
          <li key={page}>
            <button
              onClick={() => handlePageChange(page)}
              className={currentPage === page ? "" : currentPage === 1 && page === 1 ? "" : ""}
>
              {page}
            </button>
          </li>
          );
    }
    return null;
})}
<li>
        <button
 onClick={() => handlePageChange(currentPage + 1)}
 disabled={currentPage === totalPages}
          // onClick={() => handlePageChange(
          //   Math.min(
          //     currentPage + pagesToDisplay,
          //     Math.ceil(data.length / itemsPerPage)
          //   )
          // )}
        >
          Next
        </button>
      </li>
    </ul>
  </div>
</div>
    </div>
    
  )
}

export default Users;