// src/redux/reducers/userReducer.js
import {
    FETCH_USERS_SUCCESS,
    ADD_USER_SUCCESS,
    UPDATE_USER_SUCCESS,
    DELETE_USER_SUCCESS
  } from './userTypes';
  
  const initialState = {
    users: []
  };
  
  const userReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_USERS_SUCCESS:
        return { ...state, users: action.payload };
      case ADD_USER_SUCCESS:
        return { ...state, users: [...state.users, action.payload] };
      case UPDATE_USER_SUCCESS:
        return {
          ...state,
          users: state.users.map(user =>
            user.id === action.payload.id ? action.payload : user
          )
        };
      case DELETE_USER_SUCCESS:
        return {
          ...state,
          users: state.users.filter(user => user.id !== action.payload)
        };
      default:
        return state;
    }
  };
  
  export default userReducer;
  
  