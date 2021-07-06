import {FETCH_USER} from "../types";

export const fetchCurrentUser = (userData) => {
    return {
        type: FETCH_USER,
        payload: userData
    }
}