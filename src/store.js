import { createStore, combineReducers } from "redux";
import { posts } from "./redux/reducers";

const reducer = combineReducers({
  posts,
});

const store = createStore(reducer);

export default store;
