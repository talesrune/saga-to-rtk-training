// import { applyMiddleware, compose, legacy_createStore } from 'redux'
import { configureStore } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'
import rootSaga from './sagas'
import reducer from './reducers'

const sagaMiddleware = createSagaMiddleware()
// const store = legacy_createStore(
//   reducer,
//   compose(
//     applyMiddleware(sagaMiddleware),
//     typeof window === 'object' && typeof window.__REDUX_DEVTOOLS_EXTENSION__
//     ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f
//   )
// )
const store = configureStore({
  reducer: reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware)
})
sagaMiddleware.run(rootSaga)

export default store
