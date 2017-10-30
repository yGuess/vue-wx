var webpack = require('webpack');
var path = require('path');
var webpack_config = {};

webpack_config = {
    entry: {
        main: './src/main.js'
    },
    output: {
        filename: '[name].bundle.js',
        publicPath: '/dist/',
        path: path.resolve(__dirname , './dist')
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.css$/,
                loader: ['style-loader','css-loader']
            },
            {
                test: /\.(jpg|png)$/,
                loader: 'file-loader'
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                include: path.resolve(__dirname,'src')
            }
        ]
    },
    resolve: {
        alias: {
          'vue$': 'vue/dist/vue.esm.js'
        }
    },
    devServer: {
        historyApiFallback: true,
        noInfo: true,
        hot: true
    },
    performance: {
        hints: false
    },
    devtool: '#eval-source-map'
};

// if(process.env.NODE_ENV === 'production'){
//     module.exports.devtool = '#source-map';
//     module.exports.plugins = [
//         new webpack.DefinePlugin({
//             'process.env': {
//                 NODE_ENV: '"production"'
//             }
//         }),
//         new webpack.optimize.UglifyJsPlugin({
//             sourceMap: true,
//             compress: {
//                 warnings: false
//             }
//         }),
//         new webpack.LoaderOptionsPlugin({
//             minimize: true
//         })
//         // new webpack.optimize.CommonsChunkPlugin({
//         //     name: 'common'
//         // })
        
//     ];
// }


module.exports = webpack_config;
