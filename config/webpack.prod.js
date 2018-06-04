var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: [
        './node_modules/core-js/client/core.js',
        'whatwg-fetch',
        path.resolve(__dirname, '../src/App')
    ],
    devtool: 'source-map',
    output: {
        path: path.resolve(__dirname, '../build'),
        filename: 'bundle.js'
    },
    stats: {
        colors: true,
        reasons: true
    },
    resolve: {
        modules: [path.resolve('./src'), path.resolve('./node_modules')],
        extensions: ['.js', '.jsx']
    },
    module: {
        rules: [{
                test: /\.jsx?$/,
                include: path.resolve(__dirname, '../src'),
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'stage-2', 'react']
                }
            }
            // ,
            // {
            //     test: /\.less$/,
            //     loader: "style-loader!css-loader!less-loader"
            // },
            // {
            //     test: /\.css$/,
            //     loader: "style-loader!css-loader"
            // }
        ]
    }
};




// plugins: [
//     new webpack.LoaderOptionsPlugin({
//         minimize: true,
//         debug: false
//     }),
//     new webpack.optimize.UglifyJsPlugin({
//         beautify: false,
//         mangle: {
//             screw_ie8: true,
//             keep_fnames: true
//         },
//         compress: {
//             screw_ie8: true
//         },
//         comments: false
//     })
// ]