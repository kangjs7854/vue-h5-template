const CompressionWebpackPlugin = require('compression-webpack-plugin')
const isProd = process.env.NODE_ENV === 'production'

module.exports = {
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
    }
  };