import {ADD_POST, FETCH_POSTS, REMOVE_POST} from "../types";

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

export const removePost = (id) => {
    return {
        type: REMOVE_POST,
        payload: id
    }
}