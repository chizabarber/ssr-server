// ------------------------------------------------------
import {
    FETCH_USERS, FETCH_CURRENT_USER, POST_ID,
    FETCH_ADMINS, FETCH_POSTS, FETCH_POST
} from './types'
// ------------------------------------------------------

export const fetchUsers = () => 
    async (dispatch, getState, api) => {
        const res = await api.get('/users')             // Note: express-http-proxy and axiosInstance (via api argument) takes care of the rest of the .get path
        dispatch({ type: FETCH_USERS, payload: res })
}

export const fetchCurrentUser = () => 
    async (dispatch, getState, api) => {
        const res = await api.get('/current_user')
        dispatch({ type: FETCH_CURRENT_USER, payload: res })
}

export const fetchAdmins = () => 
    async (dispatch, getState, api) => {
        const res = await api.get('/admins')
        dispatch({ type: FETCH_ADMINS, payload: res })
}

export const fetchPosts = () => 
    async (dispatch, getState, api) => {
        const res = await api.get('/blog')
        dispatch({ type: FETCH_POSTS, payload: res.data })
    }

export const fetchPost = (id) => 
    async (dispatch, getState, api) => {
        const res = await api.get(`/blog/${id}`)
        dispatch({ type: FETCH_POST, payload: res.data })
    }

// ------------------------------------------------------