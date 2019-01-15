const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    mode: "development",
    entry: './src/index.js',
        devtool: 'inline-source-map',
       devServer: {
         contentBase: './docs'
       },
    plugins: [
        new CleanWebpackPlugin(['docs']),
        new HtmlWebpackPlugin({
             title: 'Rio Valley Relief Project',
             template: 'src/index.ejs'
    }),
        new CopyWebpackPlugin([
            { from: 'static', to: 'static' },
        ])
],
    output: {
    filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'docs')
    },
    module: {

        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'file-loader'
                ]
            }
        ]
    }
};