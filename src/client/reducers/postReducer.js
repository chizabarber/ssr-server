// ------------------------------------------------------
import { FETCH_BLOG_POST } from '../actions/types'
// ------------------------------------------------------

export default function (state = [], action) {
    switch (action.type) {
        case FETCH_BLOG_POST:
            return action.payload
        default:
            return state
    }
}

// ------------------------------------------------------