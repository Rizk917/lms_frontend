import React from "react";
import { Link } from "react-router-dom";
import "./first.css";

function Editclasses() {
  const edithandler = () => {
    console.log("hello")
  }
  return (
    <div className="editclassespage">

      edit classs

      <div className="editclass-border">

        <label className="label-Addadmins" htmlFor="">
          Class Name
        </label>
        <input className="input-Classes" type="text" />
        <div className="buttons-classes">
          <Link className="cancel-classes" to='/Classespage'> Cancel</Link>

          <Link className="submit-classes" to='/Classespage'> Submit</Link>

        </div>

      </div>

      <div className="edit-border">

      </div>
      <table className="table-classes">
        <thead>
          <tr>
            <th className="headetable">Section Name</th>
            <th className="headetable">Number of Students</th>
            <th> <Link className="addclass-button" to='/newSection'> Add new Section</Link></th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td className="table-info">Section A </td>
            <td className="table-info">1</td>
            <td className="table-info"><button className="delete-classes">Delete</button><button className="edit-classes" onClick={() => edithandler()}>Edit</button></td>
          </tr>
          <tr>
            <td className="table-info">Section B </td>
            <td className="table-info">30</td>
            <td className="table-info"><button className="delete-classes">delete</button>
              <button className="edit-classes">     <Link to="/EditSections" className="edit-classes" onClick={edithandler}>
                Edit
              </Link></button></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Editclasses;
