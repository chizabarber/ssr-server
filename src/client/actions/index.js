// ------------------------------------------------------
import {
    FETCH_CURRENT_USER,
    FETCH_BLOG_POSTS, 
    FETCH_BLOG_POST, 
    SUBMIT_BLOG_POST
} from './types'
// ------------------------------------------------------

export const fetchCurrentUser = () => 
    async (dispatch, getState, api) => {
        const res = await api.get('/current_user')
        dispatch({ type: FETCH_CURRENT_USER, payload: res })
}

export const fetchBlogPosts = () => 
    async (dispatch, getState, api) => {
        const res = await api.get('/blog_posts')
        dispatch({
            type: FETCH_BLOG_POSTS,
            payload: res.data 
        })
}

export const fetchBlogPost = (id) => 
    async (dispatch, getState, api) => {
        const res = await api.get(`/blog_posts/${id}`)
        dispatch({
            type: FETCH_BLOG_POST,
            payload: res.data
        })
}

export const submitBlogPost = (formValues) =>
    async (dispatch, getState, api) => {
        const img = formValues.img
        const title = formValues.title
        const snippet = formValues.snippet
        const content = formValues.content
        const date = new Date().toLocaleDateString()
        const res = await api.post('/submit_blog', {
            img, title, snippet, content, date
        })
        dispatch({
            type: SUBMIT_BLOG_POST,
            payload: res.data
        })
}

// ------------------------------------------------------