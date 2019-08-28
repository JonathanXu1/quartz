const HtmlWebPackPlugin = require('html-webpack-plugin');
const path = require('path');
const defaultInclude = path.resolve(__dirname, 'src')

module.exports = {
    entry: './src/client/index.js',
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                include: [
                    path.resolve(__dirname, 'src'),
                ],
                use: {
                    loader: 'babel-loader',
                    options: {
                        configFile: path.resolve(__dirname, 'babel.config.js'),
                    },
                },
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: 'html-loader',
                    },
                ],
            },
            {
                test: /\.scss$/,
                use: [
                    "style-loader", // creates style nodes from JS strings
                    "css-loader", // translates CSS into CommonJS
                    "sass-loader" // compiles Sass to CSS, using Node Sass by default
                ]
            },
            {
                test: /\.less$/,
                use: [
                    {
                        loader: 'style-loader',
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true,
                            localIdentName: '[local]___[hash:base64:5]',
                        },
                    },
                    {
                        loader: 'less-loader',
                    },
                ],
            },
            {
                test: /\.(jpe?g|png|gif|ico)$/, 
                use: [{ loader: 'file-loader' }],
                include: defaultInclude
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2)$/, 
                use: [{ loader: 'file-loader' }],
                include: defaultInclude
            }
        ],
    },
    target: 'electron-renderer',
    plugins: [
        new HtmlWebPackPlugin({
            template: './public/index.html',
            favicon: './public/favicon.jpeg',
        }),
    ],
    stats: {
        colors: true,
        children: false,
        chunks: false,
        modules: false
    }
};