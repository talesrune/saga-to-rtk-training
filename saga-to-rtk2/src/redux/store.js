// import createSagaMiddleware from 'redux-saga';
// import rootReducer from './reducers';
import rootSaga from '../saga/saga';
import { configureStore } from '@reduxjs/toolkit';
import { apiSlice } from './apiSlice';


// const sagaMiddleware = createSagaMiddleware();
const store = configureStore({
    reducer: {
        [apiSlice.reducerPath]: apiSlice.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware),
});

// sagaMiddleware.run(rootSaga);

export default store;