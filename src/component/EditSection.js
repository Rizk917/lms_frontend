import React from "react";
import { Link } from "react-router-dom";
import "./first.css";

function EditSection() {
  const edithandler = () => {
    console.log("hello")
  }
  return (
    <div className="editclassespage">

      edit Section

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

      <div className="edit-border">

      </div>
      <table className="table-classes">
        <thead>
          <tr>
            <th className="headetable">Student First Name</th>
            <th className="headetable">Student Last Name</th>
            <th> <Link className="addclass-button" to='/add-students'> Add new Student</Link></th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td className="table-info">Section A </td>
            <td className="table-info">1</td>
            <td className="table-info"><button className="delete-classes">Remove</button>
            
            <button className="edit-classes" >
            <Link to='/SecondSelect'> view</Link>

                
                
                
                </button></td>
          </tr>
          <tr>
            <td className="table-info">Section B </td>
            <td className="table-info">30</td>




            <td className="table-info"><button className="delete-classes">Remove</button>
            
            <button className="edit-classes" onClick={() => edithandler()}>
                
                
                
                
               view </button></td>          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default EditSection;
