import React from "react";
import "./AddStudents.css";

export default function AddStudents() {
  return (
      // <div>
      //   <div className="M1-center-container">
      //     <div className="M1-profile-pic">
      //       <img src="https://pic.onlinewebfonts.com/svg/img_510068.png" alt="" />
      //     </div>
          
      //     <button className="M1-upload-button">Upload</button>
      //   </div>
      //   <div className="M1-addadmins">
      //     <label className="M1-label-Addadmins" htmlFor="">First name</label>
      //     <input className="M1-input-Addamis" type="text" />
      //     <label className="M1-label-Addadmins" htmlFor="">Last name</label>
      //     <input className="M1-input-Addamis" type="text" />
      //     <label className="M1-label-Addadmins" htmlFor="">Phone Number</label>
      //     <input className="M1-input-Addamis" type="text" />
      //     <label className="M1-label-Addadmins" htmlFor="">Email</label>  
      //     <input className="M1-input-Addamis" type="text" />
      //     <label className="M1-label-Addadmins" htmlFor="">Grade</label>
      //     <input className="M1-input-Addamis" type="text" />
      //     <label className="M1-label-Addadmins" htmlFor="">Section</label>
      //     <input className="M1-input-Addamis" type="text" />
      //     <div className="M1-buttons">
      //     <button className="M1-cancel-classes">Cancel</button><button className="M1-edit-classes">Edit</button>
      //     </div>
      //   </div>
      // </div>
      <div className="M1-container1">
      <div className="M1-container2">
      <div className="M1-center-container">
      <div className="M1-profile-button" >
        <div className="M1-profile-pic">
          <img src="https://pic.onlinewebfonts.com/svg/img_510068.png" alt="" />
        </div>
        
        <button className="M1-upload-button">Upload</button>
      </div>

      <div className="M1-addadmins">
  <label className="M1-label-Addadmins" htmlFor="">First name</label>
  <input className="M1-input-Addamis" type="text" />
  <label className="M1-label-Addadmins" htmlFor="">Last name</label>
  <input className="M1-input-Addamis" type="text" />
  <label className="M1-label-Addadmins" htmlFor="">Phone Number</label>
  <input className="M1-input-Addamis" type="text" />
  <label className="M1-label-Addadmins" htmlFor="">Email</label>  
  <input className="M1-input-Addamis" type="text" />
  <label className="M1-label-Addadmins" htmlFor="">Grade</label>
  <select className="M1-input-Addamis">
    <option value="">--Select grade--</option>
    <option value="1">1st grade</option>
    <option value="2">2nd grade</option>
    <option value="3">3rd grade</option>
    <option value="4">4th grade</option>
    <option value="5">5th grade</option>
  </select>
  <label className="M1-label-Addadmins" htmlFor="">Section</label>
  <select className="M1-input-Addamis">
    <option value="">--Select section--</option>
    <option value="A">Section A</option>
    <option value="B">Section B</option>
    <option value="C">Section C</option>
    <option value="D">Section D</option>
  </select>
  </div>
  <div className="M1-buttons">
    <button className="M1-cancel-classes">Cancel</button><button className="M1-edit-classes">Submit</button>
  </div>

</div>
</div>
</div>

  );
}

