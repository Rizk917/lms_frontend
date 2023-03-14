import React from "react";
import { useState, useEffect } from "react";

import "./AddStudents.css";

export default function AddStudents() {
  
  const [firstName, setFirstName] = useState("");


  const [Email, setEmail]= useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [sectionId, setSectionId] = useState("");

  const handleSubmit = async(e) =>{
    //e.preventDefault prevent the page of refreshing
    e.preventDefault();
    const inputValue = { 
      "First_Name": firstName, 
      "Last_Name": lastName,
      "phone_number": phoneNumber, 
      "Section_ID":2,
      "image_path": "/data"
 
    
    };
    console.log("inputvalue ",JSON.stringify(inputValue));
    try{
      const response = await fetch("http://localhost:8000/api/student/post", {
        method: "POST",
        headers: {'Content-Type': 'application/json'},
        // 'X-CSRF-TOKEN': ('meta[name="csrf-token"]').attr('content')},
        body: JSON.stringify(inputValue)
  
        } );
        console.log("response ",response)
      }
        catch(error){
          console.log("error ",error);
        }
    }

  
    
  return (
   
    
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
      <form onSubmit={handleSubmit}>
  <label className="M1-label-Addadmins" htmlFor="">First name</label>
  <input className="M1-input-Addamis" type="text" value={firstName} required onChange={(e)=>setFirstName(e.target.value)} />
  <label className="M1-label-Addadmins" htmlFor="">Last name</label>
  <input className="M1-input-Addamis" type="text" value={lastName} required onChange={(e)=>setLastName(e.target.value)}/>
  <label className="M1-label-Addadmins" htmlFor="">Phone Number</label>
  <input className="M1-input-Addamis" type="text" value={phoneNumber} required onChange={(e)=>setPhoneNumber(e.target.value)} />
  <label className="M1-label-Addadmins" htmlFor="">Email</label>  
  <input className="M1-input-Addamis" type="text" value={Email}  required onChange={(e)=>setEmail(e.target.value)}  />
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
  </form>
  </div>
 
  <div className="M1-buttons">
    <button className="M1-cancel-classes">Cancel</button><button className="M1-edit-classes" onClick={handleSubmit}>Submit</button>
  </div>

</div>
</div>
</div>

  );
}

