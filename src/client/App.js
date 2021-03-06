// ------------------------------------------------------
import React from 'react'
import { renderRoutes } from 'react-router-config'
// ------------------------------------------------------
import { fetchCurrentUser } from './actions'
import Header from './components/Header'
import Footer from './components/Footer'
// ------------------------------------------------------

const App = ({ route }) => {
    return (
        <div>
            <Header />
            {renderRoutes(route.routes)}
            <Footer />
        </div>
    )
}

// ------------------------------------------------------
export default {
    component: App,
    loadData: ({ dispatch }) => dispatch(fetchCurrentUser())
}
// ------------------------------------------------------