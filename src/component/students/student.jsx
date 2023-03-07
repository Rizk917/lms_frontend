import React from 'react';
import { Link } from "react-router-dom";

import './student.css';

export default function Students() {
  return (
    <div className="M6-classespage">
      
    <table className="M6-table-classes">
      <tr  className='M6-tr'>
        <th className="M6-headetable"> Name</th>
        <th className="M6-headetable">Phone</th>
        <th> <Link className="M6-addclass-button" to='/add-students'> Add new Student</Link></th>
      </tr>
      <tr className='M6-tr'>
        <td className="M6-table-info1"><img src="https://pic.onlinewebfonts.com/svg/img_510068.png" alt=""className="M6-profile-pic" />Samira Samir</td>
        <td className="M6-table-info">71111555</td>
        <td className="M6-table-info2"><button className="M6-select-classes"><Link to='/select-student'> Select</Link></button><button className="M6-delete-classes">Delete</button><Link className="M6-edit-classes" to='/edit-student'>Edit</Link></td>
      </tr>
      <tr className='M6-tr'>
        <td className="M6-table-info1"><img src="https://pic.onlinewebfonts.com/svg/img_510068.png" alt=""className="M6-profile-pic" />Samira Samir</td>
        <td className="M6-table-info">71111555</td>
        <td className="M6-table-info2"><button className="M6-select-classes"><Link to='/select-student'> Select</Link></button><button className="M6-delete-classes">Delete</button><Link className="M6-edit-classes" to='/edit-student'>Edit</Link></td>
      </tr>
      <tr className='M6-tr'>
        <td className="M6-table-info1"><img src="https://pic.onlinewebfonts.com/svg/img_510068.png" alt=""className="M6-profile-pic" />Samira Samir</td>
        <td className="M6-table-info">71111555</td>
        <td className="M6-table-info2"><button className="M6-select-classes"><Link to='/select-student'> Select</Link></button><button className="M6-delete-classes">Delete</button><Link className="M6-edit-classes" to='/edit-student'>Edit</Link></td>
      </tr>
    </table>
  </div>

  );
}


