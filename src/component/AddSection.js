import React from "react";
import "./first.css";
import { Link } from "react-router-dom";

function AddSection() {
  return (
    <div className="addadmins">
           <div className="editclass-border">

<label className="label-Addadmins" htmlFor="">
Section Name 
</label>
<input className="input-Classes" type="text" />
<div className="buttons-classes">
  <Link className="cancel-classes" to='/editClassespage'> Cancel</Link>

  <Link className="submit-classes" to='/editClassespage'> Submit</Link>

</div>

</div>
    </div>
  );
}

export default AddSection;
