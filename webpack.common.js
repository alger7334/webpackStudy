const path = require('path');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        app: './src/index.js'
    },

    module: {
        rules: [{
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        esModule: false,
                        outputPath: 'img'
                    },

                }]
            },
            {
                test: /\.(htm|html)$/i,
                loader: 'html-withimg-loader'
            }
        ]
    },
    plugins: [
      
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
                title: 'webpack 文档学习',
                filename: 'index.html',
                template: './src/template.html',
                hash: true
            }

        ),
    ],
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    }
};
//打包的公用文件