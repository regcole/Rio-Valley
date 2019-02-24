const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    mode: "development",
    entry: {
        'lib.min': ['react', 'react-dom'],
        'main': ['@babel/polyfill','./src/index.js']
    },
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './docs'
    },
    resolve: {
        alias: {
            assets: path.resolve(__dirname, 'src/assets/'),
            views: path.resolve(__dirname, 'src/views/'),
            components: path.resolve(__dirname, 'src/components/')
        }
    },
    plugins: [
        new CleanWebpackPlugin(['docs']),
        new HtmlWebpackPlugin({
            title: 'Rio Valley Relief Project',
            template: 'public/index.html'
        }),
        new CopyWebpackPlugin([
            {from: 'public', to: ''},
        ])
    ],
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'docs')
    },
    module: {

        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                include: [path.resolve(__dirname, 'src')],
                use: {
                    loader: "babel-loader",
                    options: {
                        "plugins": [
                            "@babel/plugin-proposal-class-properties",
                            "@babel/plugin-transform-modules-commonjs"
                        ],
                        "presets": [
                            "@babel/preset-env",
                            "@babel/preset-react"]
                    }
                }

            },
            {
                test: /\.scss$/,
                use: [
                    {
                        loader: "style-loader" // creates style nodes from JS strings
                    },
                    {
                        loader: "css-loader" // translates CSS into CommonJS
                    },
                    {
                        loader: "sass-loader" // compiles Sass to CSS
                    }
                ]
            },
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