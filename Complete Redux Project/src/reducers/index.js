import { booksApi } from "../components/api/booksApi";
// import reducerManageBooks from "./reducerManageBooks";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  // reducerManageBooks,
  [booksApi.reducerPath]: booksApi.reducer,
});

export default rootReducer;
