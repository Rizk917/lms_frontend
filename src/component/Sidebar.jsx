import React from "react";
import "./first.css";
import {  NavLink, Route, Routes, BrowserRouter } from "react-router-dom";
import AddAminPage from "../pages/admin-pages/AdminPage";
import AddClassesPage from "../pages/AddClassesPage";
import AddSectionsPage from "../pages/AddSectionsPage";
import AddStudentsPage from "../pages/student-pages/AddStudentsPage";
import logOut from "../images/logout.svg";
import home from "../images/home_icon.png";
import logo from "../images/logo.png";
import classlogo from "../images/classicon.png";
import studentlogo from "../images/studentlogo.png";
import Attendancelogo from "../images/Attendance.png";
import adminlogo from "../images/adminlogo.png";

const Role = localStorage.getItem("Role");
const Logout = () => {
  window.location.href = "/";

  window.localStorage.clear();
  localStorage.removeItem("token");
};
function Sidebar() {
  return (
    <div className="sidebar-container">
      <img className="logoo" src={logo} alt="" />

      <div className="sidebar-buttons">
        <img src={home} alt="" />{" "}
        <p>
          <NavLink to="/home" exact activeClassName='active'>Home</NavLink>
        </p>
      </div>
      <div className="sidebar-buttons">
        <img src={classlogo} alt="" />{" "}
        <p>
          <NavLink to="/classes" exact activeClassName='active'>Classes</NavLink>
        </p>
      </div>
      <div className="sidebar-buttons">
        <img src={studentlogo} alt="" />{" "}
        <p>
          <NavLink to="/students" exact activeClassName='active'>Students</NavLink>
        </p>
      </div>
      <div className="sidebar-buttons" id="sidebar-buttons">
        <img src={Attendancelogo} alt="" />{" "}
        <p>
          <NavLink to="/attendances" exact activeClassName='active'>Attendance</NavLink>
        </p>
      </div>

      {Role === "Admin" ? (
        <div className="sidebar-buttons" id="sidebar-buttons">
          <img src={adminlogo} alt="" />
          <p>
            <NavLink to="/admins"  exact activeClassName='active'>
              Admins
            </NavLink>
          </p>
        </div>
      ) : null}

      <div
        href="/"
        onClick={Logout}
        className="sidebar-buttons"
        id="sidebar-buttons"
      >
        <img src={logOut} alt="" />{" "}
        <p>
          <NavLink to="/"exact activeClassName='active'>Logout</NavLink>
        </p>
      </div>
    </div>
  );
}

export default Sidebar;
