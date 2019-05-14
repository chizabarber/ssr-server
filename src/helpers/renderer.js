// ------------------------------------------------------
import React from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { renderRoutes } from 'react-router-config'
import serialize from 'serialize-javascript'
import { Helmet } from 'react-helmet'
// ------------------------------------------------------
import Routes from '../client/Routes'
// ------------------------------------------------------

const renderer = (req, store, context) => {
    const content = renderToString(
        <Provider store={store}>
            <StaticRouter
                context={context} 
                location={req.path}
            >
                <div>{renderRoutes(Routes)}</div>
            </StaticRouter>
        </Provider>
    )
    const helmet = Helmet.renderStatic()
    return `
        <html>
            <head>
                ${helmet.title.toString()}
                ${helmet.meta.toString()}
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">
                <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
                <link href="https://fonts.googleapis.com/css?family=Nunito" rel="stylesheet">
                <link rel="stylesheet" href="/styles.css">
            </head>
            <body>
                <div id='root'>${content}</div>
                <script>
                    window.INITIAL_STATE = ${
                        serialize(store.getState())     // Note: serialize prevents XSS attacks by replacing characters involved in creating script tags with their unicode equivalents.
                    }
                </script>
                <script src='bundle.js'></script>
                <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
            </body>
        </html>
    `
}

// ------------------------------------------------------
export default renderer
// ------------------------------------------------------