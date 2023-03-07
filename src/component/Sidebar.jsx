import React from "react";
import "./first.css";
import { Link, Route, Routes, BrowserRouter } from 'react-router-dom';
import AddAminPage from "../pages/AddAdminsPage";
import AddClassesPage from "../pages/AddClassesPage";
import AddSectionsPage from "../pages/AddSectionsPage";
import AddStudentsPage from "../pages/AddStudentsPage";
import home from "../images/home_icon.png";
import logo from "../images/logo.png"
import classlogo from "../images/classicon.png"
import studentlogo from "../images/studentlogo.png"
import Attendancelogo from "../images/Attendance.png"
import adminlogo from "../images/adminlogo.png"


function Sidebar() {
  return <div className="sidebar-container">
    <img className="logoo" src={logo} alt="" />

    <div className="sidebar-buttons"><img src={home} alt="" /> <p><Link to="/">Home</Link></p></div>
    <div className="sidebar-buttons"><img src={classlogo} alt="" /> <p ><Link to='/Classespage'>CLasses</Link></p></div>
    <div className="sidebar-buttons"><img src={studentlogo} alt="" /> <p ><Link to='/Classespage'>Students</Link></p> </div >
    <div className="sidebar-buttons"><img src={Attendancelogo} alt="" /> <p ><Link to='/Classespage'>Attendance</Link></p></div >
    <div className="sidebar-buttons"><img src={adminlogo} alt="" /> <p ><Link to='/Classespage'>Admins</Link></p></div >





    {/* <p className="sidebar-buttons"><Link to="/">Home</Link></p>
    <p className="sidebar-buttons"><Link to='/Classespage'>CLasses</Link></p>
    <p className="sidebar-buttons"><Link to='/classes'>Add Classes</Link></p>
    <p className="sidebar-buttons"><Link to='/sections'>Add sections</Link></p>
    <p className="sidebar-buttons"><Link to='/addstudent'>Add Students</Link></p>
    <p className="sidebar-buttons"><Link to='/addstudent'>Add Students</Link></p> */}


    {/* <p className="sidebar-buttons"><Link to='/attendance'>Attendance</Link></p>
      <p className="sidebar-buttons"><Link to='/students'>Add students</Link></p>
      <p className="sidebar-buttons"><Link to='/allstudents'>All students</Link></p> */}

  </div >







}

export default Sidebar;
