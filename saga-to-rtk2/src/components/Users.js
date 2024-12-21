// src/components/Users.js
import React, { useEffect, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchUsersRequest, deleteUserRequest } from '../redux/userActions';
import { Link } from 'react-router-dom';
import { useFetchUsersQuery, useDeleteUserMutation } from '../redux/apiSlice';

const Users = () => {
  // const dispatch = useDispatch();
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(fetchUsersRequest());
  // }, [dispatch]);
  const { data: users = [], isLoading, refetch} = useFetchUsersQuery();
  const [deleteUser] = useDeleteUserMutation();
  const [render, setRender] = useState(0);


  const handleDelete = (id) => {
    // dispatch(deleteUserRequest(id));
    deleteUser(id);
    setTimeout(() => {
      refetch();
    }, 200);
  };


  if (render === 0) {
    setRender(prev => prev + 1);
    setTimeout(() => {
    refetch();
    }, 200);
  }


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
