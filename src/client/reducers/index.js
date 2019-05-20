// ------------------------------------------------------
import { combineReducers } from 'redux'
// ------------------------------------------------------
import usersReducer from './usersReducer'
import authReducer from './authReducer'
import adminsReducer from './adminsReducer'
import blogReducer from './blogReducer'
import postReducer from './postReducer'
import idReducer from './idReducer'
// ------------------------------------------------------

export default combineReducers({
    users: usersReducer,
    auth: authReducer,
    admins: adminsReducer,
    blog: blogReducer,
    post: postReducer,
    id: idReducer
})

// ------------------------------------------------------