import {CREATE_POST} from "../types";

const initialState = {
    news: [
        { id: 1, title: 'React is back', description: 'Top news - 1919 readers' },
        { id: 2, title: 'Angular is back', description: 'Web news - 719 readers' },
        { id: 3, title: 'Vue is back', description: 'Frontend news - 987 readers' },
        { id: 4, title: 'Svelte is back', description: 'Backend) news - 357 readers' },
        { id: 5, title: 'Hello is back)', description: 'What?? news - 519 readers' },
        { id: 6, title: 'Front is back)', description: 'News apple - 5517 readers' },
        { id: 7, title: 'Back is front)', description: 'Samsung news - 7529 readers' }
    ],
    posts: []
}

export const postsReducer = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_POST:
            return {...state, posts: [...state.posts, action.payload]}
        default:
            return state
    }
}