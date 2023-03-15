import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';

import './admin.css';

export default function Admin() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/api/getuser')
      .then(response => setUsers(response.data)
      )
      .catch(error => console.log(error));
  }, []);

  return (
    <div className="M3-classespage">
      <table className="M3-table-classes">
        <thead>
          <tr className='tr'>
            <th className="M3-headetable"> Name</th>
            <th className="M3-headetable">Email</th>
            <th> <Link className="M3-addclass-button" to='/add-admins'> Add new Admin</Link></th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr className='tr' key={user.id}>
              <td className="M3-table-info1"><img src={user.avatar} alt={user.Full_name} className="M3-profile-pic" />{user.Full_name}</td>
              <td className="M3-table-info">{user.Email}</td>
              <td className="M3-table-info2">
                <button className="M3-delete-classes">Delete</button>
                
                <button className="M3-edit-classes">Edit User</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
