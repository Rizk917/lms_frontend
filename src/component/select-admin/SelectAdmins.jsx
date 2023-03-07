import React from "react";
import "./SelectAdmins.css";
import{Link} from "react-router-dom";

function AddAdmins() {
  return (
    <div className="M9-container1">
      <div className="M9-container2">
    <div className="M9-center-container">
      <div className="M9-profile-button" >
        <div className="M9-profile-pic">
          <img src="https://pic.onlinewebfonts.com/svg/img_510068.png" alt="" />
        </div>
        
        <button className="M9-upload-button"><i class="fa-solid fa-upload"></i> Upload picture</button>
      </div>
      <div className="M9-addadmins-forms">
      <div className="M9-addadmins">
        <label className="M9-label-Addadmins" htmlFor="">First name</label>
        <input className="M9-input-Addamis" type="text" />
        <label className="M9-label-Addadmins" htmlFor="">Last name</label>
        <input className="M9-input-Addamis" type="text" />
        <label className="M9-label-Addadmins" htmlFor="">Role</label>
        <select className="M9-input-Addamis" disabled >
    <option value="">--Select Role--</option>
    <option value="A">Admin</option>
    <option value="B">Teacher</option>
    
           </select>
        <label className="M9-label-Addadmins" htmlFor="">Email</label>  
        <input className="M9-input-Addamis" type="text" />
        <label className="M9-label-Addadmins" htmlFor="">Password</label>
        <input className="M9-input-Addamis" type="text" />
        </div>
        </div>
        <div className="M9-buttons">
        <button className="M9-cancel-classes"><Link to="/admin">Cancel</Link></button><button className="M9-edit-classes">Edit</button>
         </div>
      
    </div>
    </div>
    </div>
  );
}

export default AddAdmins;
