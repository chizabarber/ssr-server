// ------------------------------------------------------
import { createStore, applyMiddleware } from 'redux'
import reduxThunk from 'redux-thunk'
import axios from 'axios'
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
    const store = createStore(
        reducers,
        {},
        applyMiddleware(
            reduxThunk.withExtraArgument(axiosInstance)
        )
    )
    return store
}

// ------------------------------------------------------
export default serverStore
// ------------------------------------------------------