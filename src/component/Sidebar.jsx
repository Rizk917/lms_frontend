import React from "react";
import "./first.css";
import { Link, Route, Routes, BrowserRouter } from 'react-router-dom';
import AddAminPage from "../pages/admin-pages/AdminPage";
import AddClassesPage from "../pages/AddClassesPage";
import AddSectionsPage from "../pages/AddSectionsPage";
import AddStudentsPage from "../pages/student-pages/AddStudentsPage";
import home from "../images/home_icon.png";
import logo from "../images/logo.png"
import classlogo from "../images/classicon.png"
import studentlogo from "../images/studentlogo.png"
import Attendancelogo from "../images/Attendance.png"
import adminlogo from "../images/adminlogo.png"

const Role=localStorage.getItem("Role");
const Logout = () => {
  window.location.href = "/";

  window.localStorage.clear();
  localStorage.removeItem('token');
};
function Sidebar() {
  return <div className="sidebar-container">
    <img className="logoo" src={logo} alt="" />

    <div className="sidebar-buttons"><img src={home} alt="" /> <p><Link to="/home">Home</Link></p></div>
    <div className="sidebar-buttons"><img src={classlogo} alt="" /> <p ><Link to='/Classespage'>Classes</Link></p></div>
    <div className="sidebar-buttons"><img src={studentlogo} alt="" /> <p ><Link to='/students'>Students</Link></p> </div >
    <div className="sidebar-buttons" id="sidebar-buttons"><img src={Attendancelogo} alt="" /> <p ><Link to='/attendance'>Attendance</Link></p></div >
  
  {Role==="Admin"?<div className="sidebar-buttons" id="sidebar-buttons"><img src={adminlogo} alt="" /> <p ><Link to='/admin'>Admins</Link></p></div >:null}
    
    
    <div href="/" onClick={Logout} className="sidebar-buttons" id="sidebar-buttons"><img src={adminlogo} alt="" /> <p ><Link to='/'>Logout</Link></p></div >
  </div >







}

export default Sidebar;