const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const GoogleFontsPlugin = require("google-fonts-webpack-plugin");

const extractSass = new ExtractTextPlugin({
    filename: "[name].[contenthash].css",
    disable: process.env.NODE_ENV === "development"
});

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [{
            test: /\.scss$/,
            use: extractSass.extract({
                use: [{
                    loader: "css-loader"
                }, {
                    loader: "sass-loader"
                }],
                // use style-loader in development
                fallback: "style-loader"
            })
        }, {
            test: /\.(jpg|jpeg|png|svg|gif)$/,
            use: {
                loader: 'file-loader',
                options: {
                    name: './assets/[name].[ext]',
                }
            }
        }]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
        extractSass,
        new GoogleFontsPlugin({
            fonts: [
                { family: "Montserrat", variants: ["300", "400", "600", "700"] },
                { family: "Playfair Display", variants: [ "400" ] }
            ]
        })
    ]
};