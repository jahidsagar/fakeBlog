import { combineReducers } from "redux";
import { postsReducers, showReducers } from "./postReducer";

const reducers = combineReducers({
    allPosts : postsReducers,
    singlePosts : showReducers,
});

export default reducers;