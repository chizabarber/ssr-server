// ------------------------------------------------------
const webpack = require('webpack')
// ------------------------------------------------------
const keys = require('./config/keys')
// ------------------------------------------------------

module.exports = {
    plugins: [                                          // Done: make sure to come back to this if there are issues in production. This is for the "process is not defined error."
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(keys.environment)
        }),
        new webpack.DefinePlugin({
            'process.env.BROWSER': JSON.stringify(true)
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
                        'es2015',
                        ['env', {
                            targets: {
                                browsers: ['last 2 versions']
                            }
                        }], 'react', 'stage-0'
                    ]
                }
            },
            {
                test: /\.jpe?g$|\.ico$|\.pdf$|\.gif$|\.png$|\.svg$|\.woff$|\.ttf$|\.wav$|\.mp3$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]'
                        }
                    }
                ]
            },
            {
                test: /\.(sa|sc|c)ss$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.json$/,
                loader: 'json-loader',
                options: {
                    name: '[name].[ext]'
                }
            }
        ]
    }
}

// ------------------------------------------------------