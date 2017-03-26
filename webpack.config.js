const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

const config = {
    context: path.join(__dirname, 'src/'),
    devtool: 'inline-source-map',
    entry: [
        './index.js'
    ],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader'
            },
            {test: /(\.css|\.scss)$/, loaders: ['style-loader', 'css-loader', 'sass-loader']},
            {test: /\.svg/, loader: 'svg-url-loader'},
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
        template: 'index.html'
    }),
        new CopyWebpackPlugin([
            {
                from:'./resources/image/login_background.jpg',
                to:'./login_background.jpg'
            },
            {
                from:'./resources/image/login_background_edited.jpg',
                to:'./login_background_edited.jpg'
            },
            {
                from:'./resources/image/crying_jordan.png',
                to:'./crying_jordan.png'
            }
        ])
    ]
}
module.exports = config
