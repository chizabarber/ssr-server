// ------------------------------------------------------
import 'babel-polyfill'
import express from 'express'
import { matchRoutes } from 'react-router-config'
import proxy from 'express-http-proxy'
// ------------------------------------------------------
import './images/favicon.ico'
import keys from '../config/keys'
import Routes from './client/Routes'
import renderer from './helpers/renderer'
import serverStore from './helpers/serverStore'
// ------------------------------------------------------

const app = express()

app.use('/api', proxy(keys.redirectDomain, {
    proxyReqOptDecorator (opts) {
        opts.headers['x-forwarded-host'] = keys.currentDomain
        return opts
    }
}))
app.use(express.static('public'))
app.use((req, res, next) => {
    if (!req.secure && req.get('x-forwarded-proto') !== 'https' && process.env.NODE_ENV !== 'development') {
        return res.redirect('https://' + req.get('host') + req.url)
    }
    next();
})

app.get('*', (req, res) => {
    const store = serverStore(req)
    const promises = matchRoutes(Routes, req.path)
        .map(({ route }) => {
            return route.loadData ? route.loadData(store) : null
        })
        .map((promise) => {
            if (promise) {
                return new Promise((resolve, reject) => {
                    promise.then(resolve).catch(resolve)
                })
            }
        })
    Promise.all(promises).then(() => {
        const context = {}
        const content = renderer(req, store, context)
        if (context.url) {
            return res.redirect(303, context.url)
        }
        if (context.notFound) {
            res.status(404)
        }
        res.send(content)
    })
})

const port = process.env.PORT || 3000
app.listen(port, () => {
    console.log('ssr-server listening on port', port)
})

// ------------------------------------------------------