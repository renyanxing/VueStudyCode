const OpenBrowserPlugin = require('open-browser-webpack-plugin')
module.exports = {
    configureWebpack: {
        plugins: [
            new OpenBrowserPlugin({
                url: "http://localhost:8080",
                browser: 'chrome'
            })
        ]
    },
    devServer: {
        port: 8080
    },
    lintOnSave: true,
    assetsDir: "assets",
    productionSourceMap: false
}