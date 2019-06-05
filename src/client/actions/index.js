// ------------------------------------------------------
import {
    FETCH_CURRENT_USER,
    FETCH_POSTS,
    FETCH_POST
} from './types'
// ------------------------------------------------------

export const fetchCurrentUser = () => 
    async (dispatch, getState, api) => {
        const res = await api.get('/current_user')
        dispatch({ type: FETCH_CURRENT_USER, payload: res })
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