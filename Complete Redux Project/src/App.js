import "./App.css";
import ManageBook from "./components/managebooks/ManageBook";
import React, { Suspense, lazy } from 'react';
const SagaToRtk2App = lazy(() => import('saga2/App'));
// const SagaToRtk2App = require('saga2/App')


function App() {
  return (
    <div className="App">
      <h1>Redux Complete Tutorial...</h1>
      {/* <ManageBook />
       */}
       <Suspense fallback={<div>Loading...</div>}>
        <SagaToRtk2App />
        <ManageBook />
      </Suspense>
    </div>
  );
}

export default App;
