const path = require('path')
module.exports = {
    mode: 'development',
    entry: './src/main.js',
    output: {
        //path: './dist/',
        path: path.join(__dirname, './dist'),
        filename: 'bundle.js'
    }
}