// ------------------------------------------------------

module.exports = {
    module: {
        rules: [
            {
                test: /\.js?$/,                         // Note: regex ensures that Babel only runs over .js files
                loader: 'babel-loader',
                exclude: /node_modules/,
                options: {
                    presets: [
                        'react', 'stage-0',
                        ['env', {
                            targets: {
                                browsers: ['last 2 versions']
                            }
                        }]
                    ]
                }
            }
        ]
    }
}

// ------------------------------------------------------