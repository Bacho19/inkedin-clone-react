import {combineReducers} from 'redux'
import {postsReducer} from './reducers/postsReducer'

export const rootReducer = combineReducers({
    posts: postsReducer
})