// ------------------------------------------------------
import { combineReducers } from 'redux'
// ------------------------------------------------------
import authReducer from './authReducer'
import blogReducer from './blogReducer'
import postReducer from './postReducer'
// ------------------------------------------------------

export default combineReducers({
    auth: authReducer,
    blog: blogReducer,
    post: postReducer
})

// ------------------------------------------------------