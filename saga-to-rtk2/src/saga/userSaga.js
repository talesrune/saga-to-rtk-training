// // src/redux/sagas/userSaga.js
// import { takeLatest, call, put, all, fork } from 'redux-saga/effects';
// import axios from 'axios';
// import {
//   FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS, FETCH_USERS_FAILURE,
//   ADD_USER_REQUEST, ADD_USER_SUCCESS, ADD_USER_FAILURE,
//   UPDATE_USER_REQUEST, UPDATE_USER_SUCCESS, UPDATE_USER_FAILURE,
//   DELETE_USER_REQUEST, DELETE_USER_SUCCESS, DELETE_USER_FAILURE
// } from '../redux/userTypes';

// const apiUrl = 'http://localhost:5000/users';

// function* fetchUsers() {
//   try {
//     const response = yield call(axios.get, apiUrl);
//     yield put({ type: FETCH_USERS_SUCCESS, payload: response.data });
//   } catch (error) {
//     yield put({ type: FETCH_USERS_FAILURE, payload: error.message });
//   }
// }

// function* addUser(action) {
//   try {
//     const response = yield call(axios.post, apiUrl, action.payload);
//     yield put({ type: ADD_USER_SUCCESS, payload: response.data });
//   } catch (error) {
//     yield put({ type: ADD_USER_FAILURE, payload: error.message });
//   }
// }

// function* updateUser(action) {
//   try {
//     const response = yield call(axios.put, `${apiUrl}/${action.payload.id}`, action.payload);
//     yield put({ type: UPDATE_USER_SUCCESS, payload: response.data });
//   } catch (error) {
//     yield put({ type: UPDATE_USER_FAILURE, payload: error.message });
//   }
// }

// function* deleteUser(action) {
//   try {
//     yield call(axios.delete, `${apiUrl}/${action.payload}`);
//     yield put({ type: DELETE_USER_SUCCESS, payload: action.payload });
//   } catch (error) {
//     yield put({ type: DELETE_USER_FAILURE, payload: error.message });
//   }
// }

// function* watchFetchUsers() {
//   yield takeLatest(FETCH_USERS_REQUEST, fetchUsers);
// }

// function* watchAddUser() {
//   yield takeLatest(ADD_USER_REQUEST, addUser);
// }

// function* watchUpdateUser() {
//   yield takeLatest(UPDATE_USER_REQUEST, updateUser);
// }

// function* watchDeleteUser() {
//   yield takeLatest(DELETE_USER_REQUEST, deleteUser);
// }

// export default function* rootSaga() {
//   yield all([
//     fork(watchFetchUsers),
//     fork(watchAddUser),
//     fork(watchUpdateUser),
//     fork(watchDeleteUser)
//   ]);
// }
