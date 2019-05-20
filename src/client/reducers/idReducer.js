// ------------------------------------------------------
import { POST_ID } from '../actions/types'
// ------------------------------------------------------

const INITIAL_STATE = { id: undefined }

// ------------------------------------------------------

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case POST_ID:
            return { ...state, id: action.payload }
        default: 
            return state
    }
}

// ------------------------------------------------------