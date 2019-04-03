let webpack = require('webpack');
let WebpackDevServer = require('webpack-dev-server');
let config = require('./config/webpack');

const port = 3000;

new WebpackDevServer(
    webpack(config),
    {
        contentBase: config.output.contentBase,
        hot: true,
        inline: true,
        https: false,
        stats: {
            colors: true
        },
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