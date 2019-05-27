const HtmlWebPackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");
const path = require("path");
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const autoprefixer = require('autoprefixer');
const precss = require('precss');
//"webpack-dev-server --config webpack.dev.config.js --port=9091 --content-base public/ --history-api-fallback --https",
module.exports = {
    entry: "./src/index.tsx",
    output: {
        filename: "bundle.js",
        path: path.join(__dirname, "./public")
    },

    // Enable sourcemaps for debugging webpack's output.
    devtool: "source-map",

    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: [".ts", ".tsx", ".js", ".json"]
    },
    devServer: {
        historyApiFallback: true,
        contentBase: './',
        hot: true
    },
    module: {
        rules: [
            { test: /\.ts(x?)$/, loader: "awesome-typescript-loader" },
            {
                test: /\.js$/,
                enforce: "post",
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
            {
                test: /\.(scss)|.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        {
                            loader: 'css-loader', // translates CSS into CommonJS modules
                        }, {
                            loader: 'postcss-loader', // Run post css actions
                            options: {
                                plugins() {
                          
                                    return [
                                        precss,
                                        autoprefixer
                                    ];
                                }
                            }
                        }, {
                            loader: 'sass-loader' // compiles SASS to CSS
                        }
                    ]
                })
            },
        ]
    },
    plugins: [
        new webpack.ProvidePlugin({
            "React": "react",
        }),
        new ExtractTextPlugin('site.css')
    ]
};