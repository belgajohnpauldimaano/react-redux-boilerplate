
const path = require('path');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
console.log(path.join(__dirname, '/public/scripts/'));

module.exports = {
    entry :  './src/index.js',
    output : {
        path : path.join(__dirname, '/public/scripts/'), 
        filename : 'bundle.js'
    },
    module : {
        rules : [
            {
                loader : 'babel-loader',
                test : /\.js$/,
                exclude : /node_modules/
            },
            {
                test : /\.s?css$/,
                use : [
                    'style-loader', 
                    'css-loader',
                    'sass-loader'
                ]
            }
        ]
    },
    devtool : 'cheap-module-eval-source-map',
    devServer : {
        contentBase : path.join(__dirname, '/public')
    }
};