// src/redux/actions/userActions.js
import {
    FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS, FETCH_USERS_FAILURE,
    ADD_USER_REQUEST, ADD_USER_SUCCESS, ADD_USER_FAILURE,
    UPDATE_USER_REQUEST, UPDATE_USER_SUCCESS, UPDATE_USER_FAILURE,
    DELETE_USER_REQUEST, DELETE_USER_SUCCESS, DELETE_USER_FAILURE
  } from './userTypes';
  
  export const fetchUsersRequest = () => ({ type: FETCH_USERS_REQUEST });
  export const fetchUsersSuccess = users => ({ type: FETCH_USERS_SUCCESS, payload: users });
  export const fetchUsersFailure = error => ({ type: FETCH_USERS_FAILURE, payload: error });
  
  export const addUserRequest = user => ({ type: ADD_USER_REQUEST, payload: user });
  export const addUserSuccess = user => ({ type: ADD_USER_SUCCESS, payload: user });
  export const addUserFailure = error => ({ type: ADD_USER_FAILURE, payload: error });
  
  export const updateUserRequest = user => ({ type: UPDATE_USER_REQUEST, payload: user });
  export const updateUserSuccess = user => ({ type: UPDATE_USER_SUCCESS, payload: user });
  export const updateUserFailure = error => ({ type: UPDATE_USER_FAILURE, payload: error });
  
  export const deleteUserRequest = id => ({ type: DELETE_USER_REQUEST, payload: id });
  export const deleteUserSuccess = id => ({ type: DELETE_USER_SUCCESS, payload: id });
  export const deleteUserFailure = error => ({ type: DELETE_USER_FAILURE, payload: error });
  