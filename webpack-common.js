const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode:'development',
    entry:{
        main:path.resolve(__dirname, 'src/js/app.js') , 
    },
    output:{ 
        filename: '[name].bundle.js',
        path:path.resolve(__dirname,'dist')
    },
 plugins: [
        new HtmlWebpackPlugin({
            template:'./src/template.html'
        }),
      ],

}


