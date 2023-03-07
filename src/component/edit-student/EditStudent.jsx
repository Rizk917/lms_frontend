import React from "react";
import { Link } from "react-router-dom";
import "./EditStudent.css";

export default function AddStudents() {
  return (
      // <div>
      //   <div className="M5-center-container">
      //     <div className="M5-profile-pic">
      //       <img src="https://pic.onlinewebfonts.com/svg/img_510068.png" alt="" />
      //     </div>
          
      //     <button className="M5-upload-button">Upload</button>
      //   </div>
      //   <div className="M5-addadmins">
      //     <label className="M5-label-Addadmins" htmlFor="">First name</label>
      //     <input className="M5-input-Addamis" type="text" />
      //     <label className="M5-label-Addadmins" htmlFor="">Last name</label>
      //     <input className="M5-input-Addamis" type="text" />
      //     <label className="M5-label-Addadmins" htmlFor="">Phone Number</label>
      //     <input className="M5-input-Addamis" type="text" />
      //     <label className="M5-label-Addadmins" htmlFor="">Email</label>  
      //     <input className="M5-input-Addamis" type="text" />
      //     <label className="M5-label-Addadmins" htmlFor="">Grade</label>
      //     <input className="M5-input-Addamis" type="text" />
      //     <label className="M5-label-Addadmins" htmlFor="">Section</label>
      //     <input className="M5-input-Addamis" type="text" />
      //     <div className="M5-buttons">
      //     <button className="M5-cancel-classes">Cancel</button><button className="M5-edit-classes">Edit</button>
      //     </div>
      //   </div>
      // </div>
      <div className="M5-container1">
      <div className="M5-container2">
      <div className="M5-center-container">
      <div className="M5-profile-button" >
        <div className="M5-profile-pic">
          <img src="https://pic.onlinewebfonts.com/svg/img_510068.png" alt="" />
        </div>
        
        <button className="M5-upload-button">Upload</button>
      </div>

      <div className="M5-addadmins">
  <label className="M5-label-Addadmins" htmlFor="">First name</label>
  <input className="M5-input-Addamis" type="text" />
  <label className="M5-label-Addadmins" htmlFor="">Last name</label>
  <input className="M5-input-Addamis" type="text" />
  <label className="M5-label-Addadmins" htmlFor="">Phone Number</label>
  <input className="M5-input-Addamis" type="text" />
  <label className="M5-label-Addadmins" htmlFor="">Email</label>  
  <input className="M5-input-Addamis" type="text" />
  <label className="M5-label-Addadmins" htmlFor="">Grade</label>
  <select className="M5-input-Addamis">
    <option value="">--Select grade--</option>
    <option value="1">1st grade</option>
    <option value="2">2nd grade</option>
    <option value="3">3rd grade</option>
    <option value="4">4th grade</option>
    <option value="5">5th grade</option>
  </select>
  <label className="M5-label-Addadmins" htmlFor="">Section</label>
  <select className="M5-input-Addamis">
    <option value="">--Select section--</option>
    <option value="A">Section A</option>
    <option value="B">Section B</option>
    <option value="C">Section C</option>
    <option value="D">Section D</option>
  </select>
  </div>
  <div className="M5-buttons">
    <Link className="M5-cancel-classes" to='/students'>Cancel</Link><button className="M5-edit-classes">Submit</button>
  </div>

</div>
</div>
</div>

  );
}

