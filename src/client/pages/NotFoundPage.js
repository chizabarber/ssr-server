// ------------------------------------------------------
import React from 'react'
// ------------------------------------------------------

const NotFoundPage = ({ staticContext = {} }) => {      // Note: staticContext needs to be defaulted as an empty object because context is defined in renderer.js and doesn't exist on the browser
    staticContext.notFound = true
    return (
        <h3 className='center-align'>Page not found!</h3>
    )
}

// ------------------------------------------------------
export default {
    component: NotFoundPage
}
// ------------------------------------------------------