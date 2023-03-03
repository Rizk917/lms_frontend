import React from "react";
import "./first.css";

function Addstudent() {
  return (
    <div className="addadmins">
      <h1> Add Students Page</h1>
      <br />
      <br />
      <br />
      <label className="label-Addadmins" htmlFor="">
        First Name
      </label>
      <input className="input-Addamis" type="text" />
      <label className="label-Addadmins" htmlFor="">
        Last Name
      </label>
      <input className="input-Addamis" type="text" />
      <label className="label-Addadmins" htmlFor="">
        Phome Number
      </label>
      <input className="input-Addamis" type="text" />
      <label className="label-Addadmins" htmlFor="">
        IMAGE PATH
      </label>
      <input className="input-Addamis" type="text" />
      <label className="label-Addadmins" htmlFor="">
        Sections
      </label>
      <input className="input-Addamis" type="text" />
    </div>
  );
}

export default Addstudent;
