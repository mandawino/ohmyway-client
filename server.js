var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./config/webpack');

const port = 3000;

new WebpackDevServer(webpack(config), {
    publicPath: config.output.path,
    // contentBase: config.output.contentBase,
    hot: true,
    // https: false,
    // stats: {
    //     colors: true
    // },
    headers: {
        'Access-Control-Allow-Origin': '*'
    },
    filename: 'bundle.js',
    historyApiFallback: true
}).listen(port, '0.0.0.0', function(err) {
        if (err) {
            console.log(err);
        }
        console.log('Listening at http://localhost:' + port);
    });



// new WebpackDevServer(webpack(config), {
//     publicPath: config.output.publicPath,
//     hot: true,
//     historyApiFallback: true
// }).listen(3000, 'localhost', function (err, result) {
//     if (err) {
//         return console.log(err);
//     }
//
//     console.log('Listening at http://localhost:3000/');
// });