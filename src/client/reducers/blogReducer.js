// ------------------------------------------------------
import {
    FETCH_BLOG_POSTS,
    SUBMIT_BLOG_POST
} from '../actions/types'
// ------------------------------------------------------

export default function (state = [], action) {
    switch (action.type) {
        case SUBMIT_BLOG_POST:
            return action.payload
        case FETCH_BLOG_POSTS:
            return action.payload
        default:
            return state
    }
}

// ------------------------------------------------------