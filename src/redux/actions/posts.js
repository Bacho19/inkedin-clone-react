import {ADD_POST, FETCH_POSTS} from "../types";

export const fetchPosts = (post) => {
    return {
        type: FETCH_POSTS,
        payload: post
    }
}

export const addPost = (newPost) => {
    return {
        type: ADD_POST,
        payload: newPost
    }
}