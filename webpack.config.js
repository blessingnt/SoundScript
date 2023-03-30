const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    mode: 'development',
    // entry: where our application begins
    entry: './client/index.js',

    //output: tells webpack name and location of our bundle file, for production development
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js'
    },

    //plugins: tells webpack to inject our bundle.js file into a file called index.html (which will serve our app, I believe)
    plugins: [
       new HtmlWebpackPlugin ({
        template: './client/index.html'
       })
    ],
    module: {
        rules: [
            {
                test: /.js$/, // transpiling all files that end in .js
                exclude: /node_modules/, //we don't need to transpile libraries
                use: {
                    loader: 'babel-loader', 
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react']
                    }
                }
            }
        ],
    },
    devServer: {
        static: {
          publicPath: '/',
          directory: path.join(__dirname, './dist')
        },
        proxy: {
          '/api/*': {
            target: 'http://localhost:3000',
            secure: false
          }
        },
        host: 'localhost',
        port: 8080
      }

}