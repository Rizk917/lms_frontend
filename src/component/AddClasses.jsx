import React from "react";
import "./first.css";
import { Link } from "react-router-dom";

function AddClasses() {
  return (
    <div className="addadmins">

      <div className="addclasses-border">

        <label className="label-Addadmins" htmlFor="">
          Class Name
        </label>
        <input className="input-Classes" type="text" />
        <div className="buttons-classes">
          <Link className="cancel-classes" to='/Classespage'> Cancel</Link>

          <Link className="submit-classes" to='/Classespage'> Submit</Link>
        </div>


      </div>

    </div>
  );
}

export default AddClasses;
