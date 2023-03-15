// import React, { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
// import axios from 'axios';

// export default function EditUser() {
//   const { id } = useParams();
//   const [user, setUser] = useState({});
//   const [isLoading, setIsLoading] = useState(true);
//   const [error, setError] = useState('');

//   useEffect(() => {
//     axios.get(`http://localhost:8000/api/user/${id}`)
//       .then(response => {
//         setUser(response.data);
//         setIsLoading(false);
//       })
//       .catch(error => {
//         setError(error.message);
//         setIsLoading(false);
//       });
//   }, [id]);

//   const onChange = e => {
//     setUser({
//       ...user,
//       [e.target.name]: e.target.value
//     });
//   };

//   const onSubmit = e => {
//     e.preventDefault();
//     axios.put(`http://localhost:8000/api/user/${id}`, user)
//       .then(response => {
//         alert('User updated successfully');
//         window.location = '/admin';
//       })
//       .catch(error => {
//         setError(error.message);
//       });
//   };

//   if (isLoading) {
//     return <p>Loading...</p>;
//   }

//   if (error) {
//     return <p>{error}</p>;
//   }

// function EditAdmins() {
//   return (
//     <div>
//       <h1>Edit User</h1>
//       <form onSubmit={onSubmit}>
//         <div>
//           <label htmlFor="full_name">Full Name</label>
//           <input type="text" name="Full_name" id="full_name" value={user.Full_name} onChange={onChange} />
//         </div>
//         <div>
//           <label htmlFor="email">Email</label>
//           <input type="email" name="Email" id="email" value={user.Email} onChange={onChange} />
//         </div>
//         <div>
//           <label htmlFor="role">Role</label>
//           <select name="Role" id="role" value={user.Role} onChange={onChange}>
//             <option value="admin">Admin</option>
//             <option value="user">User</option>
//           </select>
//         </div>
//         <div>
//           <label htmlFor="password">Password</label>
//           <input type="password" name="Password" id="password" onChange={onChange} />
//         </div>
//           <label htmlFor="confirm_password">Confirm Password</label>
//           <input type="password" name="confirm_password" id="confirm_password" onChange={onChange
// } />
//     <button type="submit">Update User</button>
//   </form>
// </div>

// );
// }

// export default EditAdmins;


// // import React, { useState, useEffect } from 'react';src/component/edit-admin/EditAdmins.jsx
// // import { useParams, useHistory } from 'react-router-dom';
// // import axios from 'axios';

// // import './EditAdmins.css';

// //  function EditAdmins() {


// //   const { id } = useParams();
// //   const history = useHistory();
// //   const [admin, setAdmin] = useState({
// //     full_name: '',
// //     email: '',
// //     password: '',
// //     role: '',
// //   });

// //   useEffect(() => {
// //     axios.get(`http://localhost:8000/admin/read/${id}`)
// //       .then(response => {
// //         setAdmin(response.data);
// //       })
// //       .catch(error => console.log(error));
// //   }, [id]);

// //   const handleSubmit = (event) => {
// //     event.preventDefault();
// //     axios.put(`http://localhost:8000/admin/update/${id}`, admin)
// //       .then(response => {
// //         console.log(response.data);
// //         history.push('/admin');
// //       })
// //       .catch(error => console.log(error));
// //   };

// //   const handleInputChange = (event) => {
// //     const { name, value } = event.target;
// //     setAdmin(prevState => ({
// //       ...prevState,
// //       [name]: value
// //     }));
// //   };

// //   return (
// //     <div className="M7-container1">
// //       <div className="M7-container2">
// //         <div className="M7-center-container">
// //           <div className="M7-profile-button">
// //             <div className="M7-profile-pic">
// //               <img src="https://pic.onlinewebfonts.com/svg/img_510068.png" alt="" />
// //             </div>
// //             <button className="M7-upload-button">
// //               <i class="fa-solid fa-upload"></i> Upload picture
// //             </button>
// //           </div>
// //           <form onSubmit={handleSubmit} className="M7-addadmins-forms">
// //             <div className="M7-addadmins">
// //               <label className="M7-label-Addadmins" htmlFor="full_name">Full Name</label>
// //               <input className="M7-input-Addamis" type="text" name="full_name" value={admin.full_name} onChange={handleInputChange} />
// //               <label className="M7-label-Addadmins" htmlFor="email">Email</label>
// //               <input className="M7-input-Addamis" type="email" name="email" value={admin.email} onChange={handleInputChange} />
// //               <label className="M7-label-Addadmins" htmlFor="password">Password</label>
// //               <input className="M7-input-Addamis" type="password" name="password" value={admin.password} onChange={handleInputChange} />
// //               <label className="M7-label-Addadmins" htmlFor="role">Role</label>
// //               <select className="M7-input-Addamis" name="role" value={admin.role} onChange={handleInputChange}>
// //                 <option value="">--Select Role--</option>
// //                 <option value="Admin">Admin</option>
// //                 <option value="Teacher">Teacher</option>
// //               </select>
// //             </div>
// //             <div className="M7-buttons">
// //               <button className="M7-cancel-classes" onClick={() => history.push('/admin')}>Cancel</button>
// //               <button type="submit" className="M7-edit-classes">Submit</button>
// //             </div>
// //           </form>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }
// // export default EditAdmins;