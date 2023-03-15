// import React, { useState, useEffect } from 'react';
// import { Link } from "react-router-dom";

// import './admin.css';

// export default function Admin() {
//   const [admins, setAdmins] = useState([]);
  
//   const [adminData, setAdminData] = useState([]); 

//   useEffect(() => {
//     fetch('http://localhost:8000/api/admin/read')
//       .then(response => response.json())
//       .then(data => setAdmins(data))
//       .catch(error => console.error(error));
//   }, []);

//   return (
//     <div className="M3-classespage">
      
//     <table className="M3-table-classes">
//       <tr className='tr'>
//         <th className="M3-headetable"> Name</th>
//         <th className="M3-headetable">Phone</th>
//         <th> <Link className="M3-addclass-button" to='/add-admins'> Add new Admin</Link></th>
//       </tr>
//       {admins.map(admin => (
//         <tr key={admin.id} className='tr'>
//           <td className="M3-table-info1"><img src="https://pic.onlinewebfonts.com/svg/img_510068.png" alt=""className="M3-profile-pic" />{admin.Full_name}</td>
//           <td className="M3-table-info">{admin.id}</td>
//           <td className="M3-table-info2"><button className="M3-select-classes"><Link to='/select-admin'> Select</Link></button><button className="M3-delete-classes">Delete</button><button className="M3-edit-classes">  <Link to={{ pathname: '/edit-admin', state: { adminData: adminData } }}> Edit </Link></button></td>
//         </tr>
//       ))}
//     </table>
//   </div>
//   );
// }


import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

import './admin.css';

export default function Admin() {
  const [admins, setAdmins] = useState([]);
  const [currentAdmin, setCurrentAdmin] = useState(null);
  const [updatedAdmin, setUpdatedAdmin] = useState({ Full_name: '', Password: '', Email: '', Role: '' });

  useEffect(() => {
    loadadmins();
  }, []);
const loadadmins=async=>{
  fetch('http://localhost:8000/api/admin/read')
  .then(response => response.json())
  .then(data => setAdmins(data))
  .catch(error => console.error(error));
}
  const handleEditClick = (admin) => {
    setCurrentAdmin(admin);
    setUpdatedAdmin(admin);
  }

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUpdatedAdmin(prevState => ({ ...prevState, [name]: value }));
  }
  const handleFormSubmit = (event) => {
    event.preventDefault();
    // Call API to update admin's information
    fetch(`http://localhost:8000/api/admin/edit/${currentAdmin.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(updatedAdmin)
    })
      .then(response => response.json())
      .then(updatedAdmin => {
        // Update the admins state and close the modal
        setAdmins(admins.map(admin => admin.id === updatedAdmin.id ? updatedAdmin : admin));
        setCurrentAdmin(null);
        setUpdatedAdmin({ Full_name: '', Password: '', Email: '', Role: '' });
        loadadmins()
      })
      .catch(error => console.error(error));
  }
  const deleteAdmin = (id) => {
    fetch(`http://localhost:8000/api/admin/delete/${id}`, {
      method: 'DELETE'
    })
      .then(() => setAdmins(admins.filter(admin => admin.id !== id)))
      .catch(error => console.error(error));
  }
  return (
    <div className="M3-classespage">
      <table className="M3-table-classes">
        <tr className='tr'>
          <th className="M3-headetable"> Name</th>
          <th className="M3-headetable">Id</th>
          <th className="M3-headetable">Email</th> 
          <th className='M3-button'> <Link className="M3-addclass-button" to='/add-admins'> Add new Admin</Link></th>
        </tr>
        {admins.map(admin => (
          <tr key={admin.id} className='tr'>
            <td className="M3-table-info1"><img src="https://pic.onlinewebfonts.com/svg/img_510068.png" alt="" className="M3-profile-pic" />{admin.Full_name}</td>
            <td className="M3-table-info">{admin.id}</td>
            <td className="M3-table-info">{admin.Email}</td>
            <td className="M3-table-info2">
              <button className="M3-delete-classes" onClick={() => deleteAdmin(admin.id)}>Delete</button>
              <button className="M3-edit-classes" onClick={() => handleEditClick(admin)}>Edit</button>
            </td>
          </tr>
        ))}
      </table>

      {currentAdmin && (
        <div className="modal">
          <div className="modal-content">
            <form onSubmit={handleFormSubmit}>
              <label>Full Name:</label>
              <input type="text" name="Full_name" value={updatedAdmin.Full_name} onChange={handleInputChange} />
              <label>Password:</label>
              <input type="password" name="Password" value={updatedAdmin.Password} onChange={handleInputChange} />
              <label>Confirm Password:</label>
              <input type="password" name="ConfirmPassword" value={updatedAdmin.ConfirmPassword} onChange={handleInputChange} />
              <label>Email:</label>
              <input type="email" name="Email" value={updatedAdmin.Email} onChange={handleInputChange} />
              <label>Role:</label>
              <select type="text" name="Role" value={updatedAdmin.Role} onChange={handleInputChange} >
              <option value="">--Select Role--</option>
              <option value="Admin">Admin</option>
              <option value="Teacher">Teacher</option>
              </select>
              <button type="submit">Save</button>
    
              <button type="button" onClick={() => setCurrentAdmin(null)   }>Cancel</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
