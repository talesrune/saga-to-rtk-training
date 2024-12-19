// src/App.js
import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import Users from './components/Users';

const AddUser = lazy(() => import('./components/AddUser'));
const EditUser = lazy(() => import('./components/EditUser'));

const App = () => (
  <Provider store={store}>
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route exact path="/" element={<Users/>} />
          <Route path="/add-user" element={<AddUser/>} />
          <Route path="/edit-user/:id" element={<EditUser/>} />
          <Route path="*" element={<>ERROR</>} />
        </Routes>
      </Suspense>
    </Router>
  </Provider>
);

export default App;
