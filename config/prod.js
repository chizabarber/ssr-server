// ------------------------------------------------------

module.exports = {
    currentDomain: process.env.CURRENT_DOMAIN,
    faviconPath: process.env.FAVICON_PATH || 'favicon.ico',
    manifestPath: process.env.MANIFEST_PATH || 'manifest.json',
    redirectDomain: process.env.REDIRECT_DOMAIN,
    environment: 'production'
}

// ------------------------------------------------------