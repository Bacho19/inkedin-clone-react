import {CREATE_POST} from "./types";

export const addPost = (newPost) => {
    return {
        type: CREATE_POST,
        payload: newPost
    }
}