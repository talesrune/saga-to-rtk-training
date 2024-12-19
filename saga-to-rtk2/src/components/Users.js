// src/components/Users.js
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsersRequest, deleteUserRequest } from '../redux/userActions';
import { Link } from 'react-router-dom';

const Users = () => {
  const dispatch = useDispatch();
  const users = useSelector(state => state.users.users);

  useEffect(() => {
    dispatch(fetchUsersRequest());
  }, [dispatch]);

  const handleDelete = (id) => {
    dispatch(deleteUserRequest(id));
  };

  return (
    <div>
      <h2>Users</h2>
      <Link to="/add-user">Add User</Link>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            {user.name} ({user.email})
            <Link to={`/edit-user/${user.id}`}>Edit</Link>
            <button onClick={() => handleDelete(user.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Users;
