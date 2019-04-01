var path = require('path');
var webpack = require('webpack');
// const HtmlWebpackPlugin = require('html-webpack-plugin');
// const CleanWebpackPlugin = require('clean-webpack-plugin');
var DashboardPlugin = require('webpack-dashboard/plugin');

var CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: [
        'webpack-dev-server/client?http://0.0.0.0:3000', // WebpackDevServer host and port
        'webpack/hot/only-dev-server', // "only" prevents reload on syntax errors
        path.resolve(__dirname, '../src/App')
    ],
    devtool: 'inline-source-map',
    devServer: {
        hot: true,
        historyApiFallback: true,
        contentBase: path.resolve(__dirname, 'build')
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    },
    resolve: {
        modules: [path.resolve('./src'), path.resolve('./node_modules')],
        extensions: ['.js', '.jsx']
    },
    plugins: [
        // new DashboardPlugin(),
        // new webpack.LoaderOptionsPlugin({
        //     debug: true
        // }),
        new CopyWebpackPlugin([
            { from: 'static' }
        ]),
        new webpack.HotModuleReplacementPlugin()
    ],
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js'
    },
    stats: {
        colors: true,
        reasons: true
    }
};