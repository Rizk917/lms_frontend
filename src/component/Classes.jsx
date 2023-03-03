import React from "react";
import { Link } from "react-router-dom";
import "./first.css";

function CLasses() {
  return (
    <div className="classespage">
      <table className="table-classes">
        <tr>
          <th className="headetable">Class Name</th>
          <th className="headetable">Number of Sections</th>
          <th> <Link className="addclass-button" to='/classes'> Add new Class</Link></th>
        </tr>
        <tr>
          <td className="table-info">Alfreds Futterkiste</td>
          <td className="table-info">Maria Anders</td>
          <td className="table-info"><button className="delete-classes">Delete</button><button className="edit-classes">Edit</button></td>
        </tr>
        <tr>
          <td className="table-info">Centro comercial Moctezuma</td>
          <td className="table-info">Francisco Chang</td>
          <td className="table-info"><button className="delete-classes">delete</button><button className="edit-classes">Edit</button></td>
        </tr>
      </table>
    </div>
  );
}

export default CLasses;
