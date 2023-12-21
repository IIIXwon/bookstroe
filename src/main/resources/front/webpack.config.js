module.exports = {
    entry: "./jsx/app.jsx",
    output: {
        path:  '/Users/hypeboy/Desktop/practices/BookStore/BookStore/src/main/resources/static/build',
        sourceMapFilename: "bundle.js.map",
        filename: "bundle.js",
        devtoolLineToLine: true,
    },
    devtool: 'source-map',
    devServer: {
        "port": 3000
    },
    stats: {
        colors: true,
        reasons: true
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules)/,
                loader: 'babel-loader'
            }
        ]
    }
}