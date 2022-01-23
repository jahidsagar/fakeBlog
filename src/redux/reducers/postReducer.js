import { ActionTypes } from "../constants/action-types";
const intialState = {
    posts: [],
    post: []
};

export const postsReducers = (state = intialState, { type, payload }) => {
    switch (type) {
        case ActionTypes.GET_POSTS:
            return { ...state, posts: payload };
        default:
            return state;
    }
}
export const showReducers = (state = [], { type, payload }) => {
    switch (type) {
        case ActionTypes.SHOW_POST:
            return { ...state, post: payload };
        default:
            return state;
    }
}