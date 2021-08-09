import { combineReducers } from "redux";
import blog_posts from "./postReducer";

const rootReducers = combineReducers({
  blog_posts,
});

export default rootReducers;
