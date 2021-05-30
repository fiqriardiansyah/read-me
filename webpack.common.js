const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
const copyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: path.resolve(__dirname, "src/app.js"),
    output: {
        path: path.resolve(__dirname,"dist"),
        filename: "bundle.js"
    },
    module: {
        rules: [
            {
                test:/\.(s*)css$/,
                use: [
                    {
                        loader: "style-loader"
                    },
                    {
                        loader: "css-loader"
                    },
                    {
                        loader: "sass-loader"
                    }
                ]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                loader: 'file-loader', 
                options: {
                  outputPath: 'images',
                },
            },
            {
                test: /\.(woff(2)?|otf|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
                use: ['url-loader?limit=100000']
            }
        ]
    },
    plugins: [
        new htmlWebpackPlugin({
            template: path.resolve(__dirname,"src/index.html"),
            filename: "index.html"
        }),
        new copyWebpackPlugin({
            patterns: [
              {
                from: path.resolve(__dirname, 'src/public/assets/'),
                to: path.resolve(__dirname, 'dist/'),
              },
            ],
        }),
    ]

}