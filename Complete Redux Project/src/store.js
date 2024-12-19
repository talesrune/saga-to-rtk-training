import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducers/index";
import { booksApi } from "./components/api/booksApi";

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([booksApi.middleware]),
});

export default store;
