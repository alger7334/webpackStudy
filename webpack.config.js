const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js'
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
                        outputPath:'img'
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
        new HtmlWebpackPlugin({
                title: 'webpack 文档学习',
                filename: 'index.html',
                template: './src/template.html',
                hash: true
            }

        )
    ]

    
}