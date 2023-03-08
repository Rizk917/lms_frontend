import React from "react";
import "./AddAdmins.css";
import {Link} from "react-router-dom";

function AddAdmins() {
  return (
    <div className="M8-container1">
      <div className="M8-container2">
    <div className="M8-center-container">
      <div className="M8-profile-button" >
        <div className="M8-profile-pic">
          <img src="https://pic.onlinewebfonts.com/svg/img_510068.png" alt="" />
        </div>
        
        <button className="M8-upload-button"><i class="fa-solid fa-upload"></i> Upload picture</button>
      </div>
      <div className="M8-addadmins-forms">
      <div className="M8-addadmins">
        <label className="M8-label-Addadmins" htmlFor="">First name</label>
        <input className="M8-input-Addamis" type="text" />
        <label className="M8-label-Addadmins" htmlFor="">Last name</label>
        <input className="M8-input-Addamis" type="text" />
        <label className="M8-label-Addadmins" htmlFor="">Role</label>
        <select className="M8-input-Addamis">
    <option value="">--Select Role--</option>
    <option value="A">Admin</option>
    <option value="B">Teacher</option>
    
           </select>
        <label className="M8-label-Addadmins" htmlFor="">Email</label>  
        <input className="M8-input-Addamis" type="text" />
        <label className="M8-label-Addadmins" htmlFor="">Password</label>
        <input className="M8-input-Addamis" type="text" />
        </div>
        </div>
        <div className="M8-buttons">
        <button className="M8-cancel-classes"><Link to="/admin">Cancel</Link></button><button className="M8-edit-classes">Submit</button>
         </div>
      
    </div>
    </div>
    </div>
  );
}

export default AddAdmins;
