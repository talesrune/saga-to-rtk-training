// src/components/EditUser.js
import React, { useState, useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { updateUserRequest } from '../redux/userActions';
import { useParams, useNavigate } from 'react-router-dom';
import { useUpdateUserMutation, useFetchUsersQuery } from '../redux/apiSlice';


const EditUser = () => {
  const { id } = useParams();
  // const dispatch = useDispatch();
  const navigate = useNavigate();
  // const user = useSelector(state =>
  //   state.users.users.find(user => user.id === parseInt(id))
  // );

  const { data: users = [] } = useFetchUsersQuery();
  const [updateUser] = useUpdateUserMutation();
  const user = users.find(user => user.id === parseInt(id));


  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    if (user) {
      setName(user.name);
      setEmail(user.email);
    }
  }, [user]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // dispatch(updateUserRequest({ id: parseInt(id), name, email }));
    await updateUser({ id: id, name, email });
    navigate('/');
  };

  return (
    <div>
      <h2>Edit User</h2>
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
        <button type="submit">Update User</button>
      </form>
    </div>
  );
};

export default EditUser;
