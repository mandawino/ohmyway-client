var path = require('path');
var webpack = require('webpack');
var DashboardPlugin = require('webpack-dashboard/plugin');

var CopyWebpackPlugin = require('copy-webpack-plugin');
// var DefinePlugin = webpack.DefinePlugin;
// var childProcess = require('child_process');
//
// var gitTag = process.env.GIT_EXACTTAG_OR_BRANCH;
// var gitLong = process.env.GIT_COMMIT || childProcess.execSync('git rev-parse HEAD').toString();
// if (!gitTag) {
//     try {
//         gitTag = childProcess.execSync('git describe --exact-match HEAD').toString();
//     } catch (e) {
//     }
// }
// var gitBranch = process.env.BRANCH || childProcess.execSync('git rev-parse --abbrev-ref HEAD').toString();

module.exports = {
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
        path: path.resolve(__dirname, '../build'),
        filename: 'js/bundle.js'
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
        loaders: [{
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




// var webpack = require('webpack');
// var path = require('path');
//
// var BUILD_DIR = path.resolve(__dirname, '../static/js');
// var APP_DIR = path.resolve(__dirname, '../src');
//
// var config = {
//     entry: [
//         'webpack-dev-server/client?http://0.0.0.0:3000', // WebpackDevServer host and port
//         'webpack/hot/only-dev-server', // "only" prevents reload on syntax errors
//         // 'react-hot-loader/patch',
//         APP_DIR + '/index.jsx'
//     ],
//     output: {
//         path: BUILD_DIR,
//         filename: 'bundle.js'
//     },
//     plugins: [
//         new webpack.HotModuleReplacementPlugin()
//     ],
//     module : {
//         loaders : [
//             {
//                 test : /\.jsx?/,
//                 include : APP_DIR,
//                 exclude: /node_modules/,
//                 loader : ['babel-loader']
//             }
//         ]
//     }
// };
// // 'react-hot-loader/webpack',
// module.exports = config;