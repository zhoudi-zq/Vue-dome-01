const path = require('path')
const webpack = require('webpack')
const htmlWebpackPlugin = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
  // bundle入口
  entry:['./src/main.js'],
  // bundle输出
  output: {
    path: path.join(__dirname, './dist'),
    filename: 'bundle.js' //可重命名
  },
  mode:"development",
  plugins:[
    new htmlWebpackPlugin({//创建一个在内存中生成HTML页面的插件
      template:path.join(__dirname,'./src/index.html'),//指定模版页面，将来会根据指定的页面路径去生成内存中的页面
      filename:'index.html', //指定生成页面的名称
    }),
    new VueLoaderPlugin()
  ],
  module:{//配置插件的节点
    rules:[//这个节点用于配置所有第三方模块loader加载器
          { test:/\.css$/,use:['style-loader','css-loader']},//第三方loader规则
          { test:/\.less$/,use:['style-loader','css-loader','less-loader']},//第三方loader规则
          { test:/\.scss$/,use:['style-loader','css-loader','sass-loader']},//第三方loader规则
          { test:/\.(jpg|jpeg|png)$/,use:'url-loader?limit=69530&name=[hash:8]-[name].[ext]'},
          { test:/\.(ttf|eot|svg|woff|woff2)$/,use:'url-loader'},
          { test:/\.(js|jsx)$/,loader:'babel-loader',exclude:/node_modules/},//Babel来转换ES6高级语法
          { test:/\.vue$/,loader: 'vue-loader'}//处理vue文件的loader
           
    ]
  },
  resolve:{
    alias:{//修改 Vue 被导入包的时候的路径
      "vue$":"vue/dist/vue.js"
    }
  }
}