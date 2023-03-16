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
import axios from 'axios';

import "./admin.css";
import Sidebar from "../Sidebar";

export default function Admin() {
  const [admins, setAdmins] = useState([]);
  const [currentAdmin, setCurrentAdmin] = useState(null);
  const [updatedAdmin, setUpdatedAdmin] = useState({
    Full_name: "",
    Password: "",
    Password_confirmation: "",
    Email: "",
    Role: "",
  });
  const token = localStorage.getItem("token");
  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  };

  useEffect(() => {
    loadadmins();
  }, []);

  const loadadmins = () => {
    axios
      .get("http://localhost:8000/api/getuser", { headers })
      .then((response) => setAdmins(response.data))
      .catch((error) => console.error(error));
  };

  const handleEditClick = (admin) => {
    setCurrentAdmin(admin);
    setUpdatedAdmin({ ...admin });
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUpdatedAdmin((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const { id } = currentAdmin;
    axios
      .put(`http://localhost:8000/api/user/${id}`, updatedAdmin, { headers })
      .then((response) => {
        setAdmins(
          admins.map((admin) =>
            admin.id === response.data.user.id ? response.data.user : admin
          )
        );
        setCurrentAdmin(null);
        setUpdatedAdmin({
          Full_name: "",
          Password: "",
          Password_confirmation: "",
          Email: "",
          Role: "",
        });
        loadadmins();
      })
      .catch((error) => console.error(error));
  };

  const deleteAdmin = (id) => {
    axios
      .delete(`http://localhost:8000/api/user/${id}`, { headers })
      .then(() => setAdmins(admins.filter((admin) => admin.id !== id)))
      .catch((error) => console.error(error));
  };
  return (
    <div className="M3-classespage">
      <table className="M3-table-classes">
        <tr className="tr">
          <th className="M3-headetable"> Name</th>
          <th className="M3-headetable">Id</th>
          <th className="M3-headetable">Role</th>
          <th className="M3-headetable">Email</th>
          <th className="M3-button">
            {" "}
            <Link className="M3-addclass-button" to="/add-admins">
              {" "}
              Add new Admin
            </Link>
          </th>
        </tr>
        {admins.map((admin) => (
          <tr key={admin.id} className="tr">
            <td className="M3-table-info1">
              <img
                src="https://pic.onlinewebfonts.com/svg/img_510068.png"
                alt=""
                className="M3-profile-pic"
              />
              {admin.Full_name}
            </td>
            <td className="M3-table-info">{admin.id}</td>
            <td className="M3-table-info">{admin.Role}</td>
            <td className="M3-table-info">{admin.Email}</td>
            <td className="M3-table-info2">
              <button
                className="M3-delete-classes"
                onClick={() => deleteAdmin(admin.id)}
              >
                Delete
              </button>
              <button
                className="M3-edit-classes"
                onClick={() => handleEditClick(admin)}
              >
                Edit
              </button>
            </td>
          </tr>
        ))}
      </table>

      {currentAdmin && (
        <div className="modal">
          <div className="modal-content">
            <form onSubmit={handleFormSubmit}>
              <label>
                Full Name:
                <input
                  type="text"
                  name="Full_name"
                  value={updatedAdmin.Full_name}
                  onChange={handleInputChange}
                />
              </label>
              <label>
                Email:
                <input
                  type="email"
                  name="Email"
                  value={updatedAdmin.Email}
                  onChange={handleInputChange}
                />
              </label>
              <label>
                Password:
                <input
                  type="password"
                  name="Password"
                  value={updatedAdmin.Password}
                  onChange={handleInputChange}
                />
              </label>
              <label>
                Confirm Password:
                <input
                  type="password"
                  name="Password_confirmation"
                  value={updatedAdmin.Password_confirmation}
                  onChange={handleInputChange}
                />
              </label>
              <label>
                Role:
                <select
                  name="Role"
                  value={updatedAdmin.Role}
                  onChange={handleInputChange}
                >
                  <option value="">Select Role</option>
                  <option value="admin">Admin</option>
                  <option value="moderator">Moderator</option>
                </select>
              </label>
              <button type="submit">Update</button>
              <button type="button" onClick={() => setCurrentAdmin(null)}>
                Cancel
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
