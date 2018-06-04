var path = require('path');
var webpack = require('webpack');
var DashboardPlugin = require('webpack-dashboard/plugin');

var CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: [
        'webpack-dev-server/client?http://localhost:3000',
        'webpack/hot/only-dev-server',
        './node_modules/core-js/client/core.js',
        'whatwg-fetch',
        'react-hot-loader/patch',
        path.resolve(__dirname, '../src/App')
    ],
    devtool: 'inline-source-map',
    output: {
        path: path.resolve(__dirname, 'build'),
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
    plugins: [
        new DashboardPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.LoaderOptionsPlugin({
            debug: true
        }),
        new CopyWebpackPlugin([
            { from: 'static' }
        ])
    ],
    module: {
        rules: [{
            test: /\.jsx?$/,
            include: path.resolve(__dirname, '../src'),
            exclude: /node_modules/,
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



// devServer: {
//     port: 7777,
//         host: 'localhost',
//         historyApiFallback: true,
//         noInfo: false,
//         stats: 'minimal',
//         publicPath: publicPath
// }