const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
   
    entry:{
        main:path.resolve(__dirname, 'src/js/app.js') , 
    },
   
 plugins: [
        new HtmlWebpackPlugin({
            template:'./src/template.html'
        }),
      ],

}


