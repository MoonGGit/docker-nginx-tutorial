/* eslint-disable */

const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const UglifyWebpackPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './public/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },
    devServer: {
        contentBase: path.resolve('./dist'),
        index: 'index.html',
        port: 9000,
        //open: true,
    },
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                use: 'ts-loader',
            },
            {
                // enforce: pre -> babel보다 먼저 실행되도록 함
                enforce: 'pre',
                test: /\.js$/,
                loader: 'source-map-loader',
            },
            {
                test: /\.js$/,
                include: path.join(__dirname),
                exclude: /(node_modules)|(dist)/,
                use: {
                    loader: 'babel-loader',
                },
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: 'html-loader',
                        options: { minimize: true },
                    },
                ],
            },
            {
                test: /\.json$/,
                loader: 'json-loader',
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]?[hash]',
                        },
                    },
                ],
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true,
                            localIdentName: '[name]__[local]___[hash:base64:5]',
                        },
                    },
                ],
            },
            {
                test: /\.scss$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true,
                            localIdentName: '[name]__[local]___[hash:base64:5]',
                        },
                    },
                    {
                        loader: 'sass-loader',
                    },
                ],
            },
        ],
    },
    resolve: {
        // import시 확장자 생략가능
        extensions: ['.ts', '.js', '.json'],
    },
    plugins: [
        new HtmlWebPackPlugin({
            //favicon: './static/asset/favicon.ico',
            template: './public/index.html', // public/index.html 파일을 읽는다.
            filename: 'index.html', // output으로 출력할 파일은 index.html 이다.
            //chunks: ['css', 'index', 'app', 'system', 'monitor']
        }),
        new MiniCssExtractPlugin({
            filename: 'style.css',
        }),
        new CleanWebpackPlugin(),
        new UglifyWebpackPlugin(),
    ],
};
