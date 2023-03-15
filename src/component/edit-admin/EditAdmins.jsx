import React from "react";
import "./EditAdmins.css";
import {Link} from "react-router-dom"

function EditAdmins() {
  return (
    <div className="M7-container1">
      <div className="M7-container2">
    <div className="M7-center-container">
      <div className="M7-profile-button" >
        <div className="M7-profile-pic">
          <img src="https://pic.onlinewebfonts.com/svg/img_510068.png" alt="" />
        </div>
        
        <button className="M7-upload-button"><i class="fa-solid fa-upload"></i> Upload picture</button>
      </div>
      <div className="M7-addadmins-forms">
      <div className="M7-addadmins">
        <label className="M7-label-Addadmins" htmlFor="">First name</label>
        <input className="M7-input-Addamis" type="text" />
        <label className="M7-label-Addadmins" htmlFor="">Last name</label>
        <input className="M7-input-Addamis" type="text" />
        <label className="M7-label-Addadmins" htmlFor="">Role</label>
        <select className="M7-input-Addamis" disabled>
    <option value="">--Select Role--</option>
    <option value="A">Admin</option>
    <option value="B">Teacher</option>
    
           </select>
        <label className="M7-label-Addadmins" htmlFor="">Email</label>  
        <input className="M7-input-Addamis" type="text" />
        <label className="M7-label-Addadmins" htmlFor="">Password</label>
        <input className="M7-input-Addamis" type="text" />
        </div>
        </div>
        <div className="M7-buttons">
        <button className="M7-cancel-classes"><Link to='/admin'>Cancel</Link></button><button className="M7-edit-classes">Submit</button>
         </div>
    </div>
    </div>
    </div>
  );
}

export default EditAdmins;


// import React, { useState, useEffect } from 'react';src/component/edit-admin/EditAdmins.jsx
// import { useParams, useHistory } from 'react-router-dom';
// import axios from 'axios';

// import './EditAdmins.css';

//  function EditAdmins() {


//   const { id } = useParams();
//   const history = useHistory();
//   const [admin, setAdmin] = useState({
//     full_name: '',
//     email: '',
//     password: '',
//     role: '',
//   });

//   useEffect(() => {
//     axios.get(`http://localhost:8000/admin/read/${id}`)
//       .then(response => {
//         setAdmin(response.data);
//       })
//       .catch(error => console.log(error));
//   }, [id]);

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     axios.put(`http://localhost:8000/admin/update/${id}`, admin)
//       .then(response => {
//         console.log(response.data);
//         history.push('/admin');
//       })
//       .catch(error => console.log(error));
//   };

//   const handleInputChange = (event) => {
//     const { name, value } = event.target;
//     setAdmin(prevState => ({
//       ...prevState,
//       [name]: value
//     }));
//   };

//   return (
//     <div className="M7-container1">
//       <div className="M7-container2">
//         <div className="M7-center-container">
//           <div className="M7-profile-button">
//             <div className="M7-profile-pic">
//               <img src="https://pic.onlinewebfonts.com/svg/img_510068.png" alt="" />
//             </div>
//             <button className="M7-upload-button">
//               <i class="fa-solid fa-upload"></i> Upload picture
//             </button>
//           </div>
//           <form onSubmit={handleSubmit} className="M7-addadmins-forms">
//             <div className="M7-addadmins">
//               <label className="M7-label-Addadmins" htmlFor="full_name">Full Name</label>
//               <input className="M7-input-Addamis" type="text" name="full_name" value={admin.full_name} onChange={handleInputChange} />
//               <label className="M7-label-Addadmins" htmlFor="email">Email</label>
//               <input className="M7-input-Addamis" type="email" name="email" value={admin.email} onChange={handleInputChange} />
//               <label className="M7-label-Addadmins" htmlFor="password">Password</label>
//               <input className="M7-input-Addamis" type="password" name="password" value={admin.password} onChange={handleInputChange} />
//               <label className="M7-label-Addadmins" htmlFor="role">Role</label>
//               <select className="M7-input-Addamis" name="role" value={admin.role} onChange={handleInputChange}>
//                 <option value="">--Select Role--</option>
//                 <option value="Admin">Admin</option>
//                 <option value="Teacher">Teacher</option>
//               </select>
//             </div>
//             <div className="M7-buttons">
//               <button className="M7-cancel-classes" onClick={() => history.push('/admin')}>Cancel</button>
//               <button type="submit" className="M7-edit-classes">Submit</button>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }
// export default EditAdmins;