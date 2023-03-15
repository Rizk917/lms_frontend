import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

export default function EditUser() {
  const { id } = useParams();
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    axios.get(`http://localhost:8000/api/user/${id}`)
      .then(response => {
        setUser(response.data);
        setIsLoading(false);
      })
      .catch(error => {
        setError(error.message);
        setIsLoading(false);
      });
  }, [id]);

  const onChange = e => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    });
  };

  const onSubmit = e => {
    e.preventDefault();
    axios.put(`http://localhost:8000/api/user/${id}`, user)
      .then(response => {
        alert('User updated successfully');
        window.location = '/admin';
      })
      .catch(error => {
        setError(error.message);
      });
  };

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div>
      <h1>Edit User</h1>
      <form onSubmit={onSubmit}>
        <div>
          <label htmlFor="full_name">Full Name</label>
          <input type="text" name="Full_name" id="full_name" value={user.Full_name} onChange={onChange} />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" name="Email" id="email" value={user.Email} onChange={onChange} />
        </div>
        <div>
          <label htmlFor="role">Role</label>
          <select name="Role" id="role" value={user.Role} onChange={onChange}>
            <option value="admin">Admin</option>
            <option value="user">User</option>
          </select>
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input type="password" name="Password" id="password" onChange={onChange} />
        </div>
          <label htmlFor="confirm_password">Confirm Password</label>
          <input type="password" name="confirm_password" id="confirm_password" onChange={onChange
} />
    <button type="submit">Update User</button>
  </form>
</div>

);
}
