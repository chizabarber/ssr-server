// ------------------------------------------------------
import { createStore, applyMiddleware } from 'redux'
import reduxThunk from 'redux-thunk'
import axios from 'axios'
import { Path } from 'path-parser'
// ------------------------------------------------------
import keys from '../../config/keys'
import reducers from '../client/reducers'
// ------------------------------------------------------

const serverStore = (req) => {
    const axiosInstance = axios.create({
        baseURL: keys.redirectDomain,
        headers: {
            cookie: req.get('cookie') || ''
        }
    })
    const path = new Path('/blog/:id')
    const match = path.test(req.path)
    if (match) {
        const store = createStore(
            reducers,
            { id: match.id },
            applyMiddleware(
                reduxThunk.withExtraArgument(axiosInstance)
            )
        )
        return store
    } else {
        const store = createStore(
            reducers,
            {},
            applyMiddleware(
                reduxThunk.withExtraArgument(axiosInstance)
            )
        )
        return store
    }
}

// ------------------------------------------------------
export default serverStore
// ------------------------------------------------------