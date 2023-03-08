import React from "react";
import "../component/select-student/SelectStudent.css";
import { Link } from "react-router-dom"
export default function SecondselectStudent() {
  return (
   
      <div className="M2-container1">
      <div className="M2-container2">
      <div className="M2-center-container">
      <div className="M2-profile-button" >
        <div className="M2-profile-pic">
          <img src="https://pic.onlinewebfonts.com/svg/img_510068.png" alt="" />
        </div>
        
        <button className="M2-upload-button">Upload</button>
      </div>

      <div className="M2-addadmins">
  <label className="M2-label-Addadmins" htmlFor="">First name</label>
  <input className="M2-input-Addamis" type="text" />
  <label className="M2-label-Addadmins" htmlFor="">Last name</label>
  <input className="M2-input-Addamis" type="text" />
  <label className="M2-label-Addadmins" htmlFor="">Phone Number</label>
  <input className="M2-input-Addamis" type="text" />
  <label className="M2-label-Addadmins" htmlFor="">Email</label>  
  <input className="M2-input-Addamis" type="text" />
  <label className="M2-label-Addadmins" htmlFor="">Grade</label>
  <select className="M2-input-Addamis" disabled>
    <option value="">--Select grade--</option>
    <option value="1">1st grade</option>
    <option value="2">2nd grade</option>
    <option value="3">3rd grade</option>
    <option value="4">4th grade</option>
    <option value="5">5th grade</option>
  </select>
  <label className="M2-label-Addadmins" htmlFor="">Section</label>
  <select className="M2-input-Addamis" disabled>
    <option value="">--Select section--</option>
    <option value="A">Section A</option>
    <option value="B">Section B</option>
    <option value="C">Section C</option>
    <option value="D">Section D</option>
  </select>
  </div>
  <div className="M2-buttons">
    <Link className="M4-cancel-classes" to='/EditSections'>Cancel</Link>
    <button className="M2-edit-classes">Edit</button>
  </div>

</div>
</div>
</div>

  );
}

