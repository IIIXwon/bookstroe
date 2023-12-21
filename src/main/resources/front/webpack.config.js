module.exports = {
    entry: "./jsx/app.jsx",
    output: {
        path:  __dirname + '/build',
        filename: "bundle.js"
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