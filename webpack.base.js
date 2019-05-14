// ------------------------------------------------------
const webpack = require('webpack')
// ------------------------------------------------------
const keys = require('./config/keys')
// ------------------------------------------------------

module.exports = {
    plugins: [                                          // Done: make sure to come back to this if there are issues in production. This is for the "process is not defined error."
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(keys.environment)
        })
    ],
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
            },
            {
                test: /\.(png|svg|jpg|gif|pdf)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]'
                        }
                    }
                ]
            }
        ]
    }
}

// ------------------------------------------------------