import React from "react";
import "./first.css";

function Header() {
  const Role = localStorage.getItem("Role");

  return (
    <>
      {Role === "Admin" ? (
        <div className="header">
          <h1 className="heading">SuperAdmin Dashboard</h1>
        </div>
      ) : (
        <div className="header">
          <h1 className="heading">Dashboard</h1>
        </div>
      )}
    </>
  );
}

export default Header;
