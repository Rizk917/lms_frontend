import React from "react";
import "./first.css";
import { Link, Route, Routes, BrowserRouter } from 'react-router-dom';
import AddAminPage from "../pages/admin-pages/AddAdminsPage";
import AddClassesPage from "../pages/AddClassesPage";
import AddSectionsPage from "../pages/AddSectionsPage";
import AddStudentsPage from "../pages/student-pages/AddStudentsPage";
import logo from "../images/logo.png"



function Sidebar() {
  return <div className="sidebar-container">
    <img className="logoo" src={logo} alt="" />
    <p className="sidebar-buttons"><Link to="/"> Home</Link></p>
    <p className="sidebar-buttons"><Link to='/classes'>Classes</Link></p>
    <p className="sidebar-buttons"><Link to='/students'>Students</Link></p>
    <p className="sidebar-buttons"><Link to='/admin'>Admins</Link></p>
    {/* <p className="sidebar-buttons"><Link to='/attendance'>Attendance</Link></p>
      <p className="sidebar-buttons"><Link to='/students'>Add students</Link></p>
      <p className="sidebar-buttons"><Link to='/allstudents'>All students</Link></p> */}

  </div>







}

export default Sidebar;
