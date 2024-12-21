// src/components/AddUser.js
import React, { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { addUserRequest } from '../redux/userActions';
import { useNavigate } from 'react-router-dom';
import { useAddUserMutation } from '../redux/apiSlice';

const AddUser = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const [addUser] = useAddUserMutation();
  // const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    // dispatch(addUserRequest({ name, email }));
    await addUser({ name, email });
    navigate('/');
  };

  return (
    <div>
      <h2>Add User</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button type="submit">Add User</button>
      </form>
    </div>
  );
};

export default AddUser;
