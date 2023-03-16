import React from "react";
import "./AddAdmins.css";
import {Link} from "react-router-dom";
import { useState } from 'react';









function AddAdmins() {


  const [classes, setClasses] = useState([]);



  const [firstName, setFirstName] = useState("");

  const [Email, setEmail] = useState("");

  
  const [lastName, setLastName] = useState("");
  const [Password, setPassword] = useState("");
  const [confirmPassword, setconfirmPassword] = useState("");

  const [Role, setRole] = useState("");



  
const handleSubmit = async(e) =>{
  e.preventDefault();
  const inputValue = { 
    "Full_name": firstName + " " + lastName,
    "Email": Email, 
    "Role": Role,
    "Password": Password,
    "Password_confirmation": confirmPassword
  
  }
  console.log("inputvalue ",JSON.stringify(inputValue));
  try{
    const response = await fetch("http://localhost:8000/api/register", {
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
    
    <div className="M8-container1">
      <div className="M8-container2">
    <div className="M8-center-container">
      <div className="M8-profile-button" >
        <div className="M8-profile-pic">
          <img src="https://pic.onlinewebfonts.com/svg/img_510068.png" alt="" />
        </div>
        
        <button className="M8-upload-button"> Upload picture</button>
      </div>
      <div className="M8-addadmins-forms">
      <div className="M8-addadmins">
        
      <form onSubmit={handleSubmit}>
          
        <label className="M8-label-Addadmins" htmlFor="">First name</label>
        <input className="M8-input-Addamis" type="text"  value={firstName} required onChange={(e)=>setFirstName(e.target.value)}/>
        <label className="M8-label-Addadmins" htmlFor="">Last name</label>
        <input className="M8-input-Addamis" type="text" value={lastName} required onChange={(e)=>setLastName(e.target.value)}/>
        <label className="M8-label-Addadmins" htmlFor="">Role</label>
        
        <select className="M8-input-Addamis" value={Role} onChange={(e)=>setRole(e.target.value)} >
    <option value="">--Select Role--</option>
    <option value="Admin">Admin</option>
    <option value="Teacher">Teacher</option>
    
           </select>
        <label className="M8-label-Addadmins" htmlFor="">Email</label>  
        <input className="M8-input-Addamis" type="text" value={Email}  required onChange={(e)=>setEmail(e.target.value)}/>
        <label className="M8-label-Addadmins" htmlFor="">Password</label>
        <input className="M8-input-Addamis" type="text" value={Password} required onChange={(e)=>setPassword(e.target.value)}/>
        <label className="M8-label-Addadmins" htmlFor="">Confirm Password</label>
        <input className="M8-input-Addamis" type="text" value={confirmPassword} required onChange={(e)=>setconfirmPassword(e.target.value)}/>

        </form> 
        </div>
        
        </div>
        
        
        
        <div className="M8-buttons">
        <button className="M8-cancel-classes"><Link to="/admin">Cancel</Link></button><button className="M8-edit-classes" onClick={handleSubmit}>Submit</button>
         </div>
         
    </div>
    </div>
    
    </div>
    
  );
  }



export default AddAdmins;
