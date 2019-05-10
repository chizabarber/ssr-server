// ------------------------------------------------------
import { createStore, applyMiddleware } from 'redux'
import reduxThunk from 'redux-thunk'
import axios from 'axios'
// ------------------------------------------------------
import reducers from '../client/reducers'
// ------------------------------------------------------

const serverStore = (req) => {
    const axiosInstance = axios.create({
        baseURL: 'http://localhost:5000',
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