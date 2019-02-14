const path = require('path');
var ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

const resolve = {
    extensions: ['.ts', '.tsx', '.js', '.json']
};

const module1 = {
    rules: [{
        test: /\.ts$/,
        exclude: /node_modules/,
        loader: 'ts-loader',
        options: {
            // disable type checker - we will use it in fork plugin
            transpileOnly: true,
            experimentalWatchApi: true
        }
    }]
}

const webConfig = {
    entry: {
        "main": './src/Main.ts',
    },
    mode: 'development',
    devtool: "sourcemap",
    output: {
        filename: 'dist/[name].bundle.js',
        chunkFilename: 'dist/[name].bundle.js',
        path: path.resolve(__dirname, '..'),

    },
    resolve,
    module: module1,
    devServer: {
        // contentBase: path.join(__dirname, 'dist'),
        // index: '../index.html',
        // compress: true,

        host: '127.0.0.1',
        disableHostCheck: true,
        port: 9003,
        open: true
    },
    plugins: [
        new ForkTsCheckerWebpackPlugin()
    ]
};

module.exports = webConfig;