const path = require('path');

// entry point -> output
module.exports = {
    // entry point of our app
    entry: './src/app.js',
    // output file containing all our js code
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js'
    },
    module: {
        // different rules for webpack
        rules: [
            // rule for using babel to compile js files
            {
                loader: 'babel-loader',
                test: /\.js$/,
                exclude: /node_modules/
            },
            // rule for serving css and scss files
            {
                test: /\.s?css$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            }
        ]
    },
    // source map to efficiently track errors in devTools browser console
    devtool: 'cheap-module-eval-source-map',
    // development server specific to webpack
    devServer: {
        contentBase: path.join(__dirname, 'public'),
        historyApiFallback: true
    }
};