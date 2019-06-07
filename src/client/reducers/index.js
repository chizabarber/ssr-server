// ------------------------------------------------------
import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
// ------------------------------------------------------
import authReducer from './authReducer'
import blogReducer from './blogReducer'
import postReducer from './postReducer'
import idReducer from './idReducer'
// ------------------------------------------------------

export default combineReducers({
    auth: authReducer,
    form: formReducer,
    blog: blogReducer,
    post: postReducer,
    id: idReducer
})

// ------------------------------------------------------