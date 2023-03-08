import React from "react";
import "./EditAdmins.css";
import {Link} from "react-router-dom"

function AddAdmins() {
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

export default AddAdmins;
