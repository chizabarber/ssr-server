// ------------------------------------------------------
import 'babel-polyfill'
import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { createStore, applyMiddleware, compose } from 'redux'
import reduxThunk from 'redux-thunk'
import { Provider } from 'react-redux'
import { renderRoutes } from 'react-router-config'
import axios from 'axios'
// ------------------------------------------------------
import Routes from './Routes'
import reducers from './reducers'
// ------------------------------------------------------

const axiosInstance = axios.create({
    baseURL: '/api'
})
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(
    reducers,
    window.INITIAL_STATE,
    composeEnhancers(
        applyMiddleware(
            reduxThunk.withExtraArgument(axiosInstance)
        )
    )
)

ReactDOM.hydrate(
    <Provider store={store}>
        <BrowserRouter>
            <div>{renderRoutes(Routes)}</div>
        </BrowserRouter>
    </Provider>,
    document.querySelector('#root')
)

// ------------------------------------------------------