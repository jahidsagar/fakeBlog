import { ActionTypes } from "../constants/action-types";

export const setPosts = (posts) =>{
    return {
        type: ActionTypes.GET_POSTS,
        payload: posts
    }
}

export const showPosts = (post) =>{
    return {
        type: ActionTypes.SHOW_POST,
        payload: post
    }
}