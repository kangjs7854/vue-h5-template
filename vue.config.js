const CompressionWebpackPlugin = require('compression-webpack-plugin')
const isProd = process.env.NODE_ENV === 'production'

const cdn = {
  js: [
    "",//jscdn链接
    "",
  ]
}
module.exports = {
  // 设置跨域
  crossorigin: 'anonymous',
  /**
	 * 如果你不需要生产环境的 source map，可以将其设置为 false 以加速生产环境构建。
	 *  map文件的作用在于：项目打包后，代码都是经过压缩加密的，如果运行时报错，输出的错误信息无法准确得知是哪里的代码报错。
	 *  有了map就可以像未加密的代码一样，准确的输出是哪一行哪一列有错。
	 * */
  // lintOnSave:false,
  productionSourceMap: false,
  publicPath: "./", //配置打包后index.html导入的的文件目录
  assetsDir: "public", //配置打包后的静态文件目录
  lintOnSave: false,
  devServer: {
    open: true,
    proxy: {
      "^/api": {
        // 此处的写法，目的是为了 将 /api 替换成 https://www.baidu.com/
        target: "http://c.m.163.com",
        // 允许跨域
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          "^/api": "",
        },
      },
    },
  },
  configureWebpack: config => {
    if (isProd) {
      // 配置webpack 压缩
      config.plugins.push(
        new CompressionWebpackPlugin({
          test: /\.js$|\.html$|\.css$/,
          // 超过4kb压缩
          threshold: 4096
        })
      )
    }
  },
  //配置cdn
  chainWebpack: config => {
    config.plugin("html").tap(options => {
      options[0].cdn = cdn;
      return options;
    })
  }
};