import React from 'react';
import { Link } from "react-router-dom";

import './admin.css';

export default function admin() {
  return (
    <div className="M3-classespage">
      
    <table className="M3-table-classes">
      <tr className='tr'>
        <th className="M3-headetable"> Name</th>
        <th className="M3-headetable">Phone</th>
        <th> <Link className="M3-addclass-button" to='/add-admins'> Add new Admin</Link></th>
      </tr>
      <tr  className='tr'>
        <td className="M3-table-info1"><img src="https://pic.onlinewebfonts.com/svg/img_510068.png" alt=""className="M3-profile-pic" />Samira Samir</td>
        <td className="M3-table-info">71111555</td>
        <td className="M3-table-info2"><button className="M3-select-classes"><Link to='/select-admin'> Select</Link></button><button className="M3-delete-classes">Delete</button><button className="M3-edit-classes"><Link to='/edit-admin'>Edit</Link></button></td>
      </tr>
      <tr  className='tr'>
        <td className="M3-table-info1"><img src="https://pic.onlinewebfonts.com/svg/img_510068.png" alt=""className="M3-profile-pic" />Samira Samir</td>
        <td className="M3-table-info">71111555</td>
        <td className="M3-table-info2"><button className="M3-select-classes"><Link to='/select-admin'> Select</Link></button><button className="M3-delete-classes">Delete</button><button className="M3-edit-classes"><Link to='/edit-admin'>Edit</Link></button></td>
      </tr>
      <tr  className='tr'>
        <td className="M3-table-info1"><img src="https://pic.onlinewebfonts.com/svg/img_510068.png" alt=""className="M3-profile-pic" />Samira Samir</td>
        <td className="M3-table-info">71111555</td>
        <td className="M3-table-info2"><button className="M3-select-classes"><Link to='/select-admin'> Select</Link></button><button className="M3-delete-classes">Delete</button><button className="M3-edit-classes"><Link to='/edit-admin'>Edit</Link></button></td>
      </tr>
    </table>
  </div>

  );
}


