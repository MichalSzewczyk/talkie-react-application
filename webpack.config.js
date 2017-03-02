const path = require('path');

const config = {
    context: path.join(__dirname, 'src/'),
    entry: [
        './index.js',
    ],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/',
    },
};
module.exports = config;