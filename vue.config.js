// vue.config.js
const path = require('path');
const IS_PROD = ['production', 'prod'].includes(process.env.NODE_ENV);
const CompressionWebpackPlugin = require('compression-webpack-plugin');
const resolve = (dir) => path.join(__dirname, dir);
module.exports = {
  publicPath: './',//process.env.NODE_ENV === 'production' ? '/site/vue-demo/' : '/',  // 公共路径
  indexPath: 'index.html', // 相对于打包路径index.html的路径
  outputDir: 'dist', // 'dist', 生产环境构建文件的目录 process.env.outputDir
  assetsDir: 'static', // 相对于outputDir的静态资源(js、css、img、fonts)目录
  lintOnSave: false, // 是否在开发环境下通过 eslint-loader 在每次保存时 lint 代码
  runtimeCompiler: true, // 是否使用包含运行时编译器的 Vue 构建版本
  productionSourceMap: !IS_PROD, // 生产环境的 source map
  parallel: require('os')
    .cpus().length > 1, // 是否为 Babel 或 TypeScript 使用 thread-loader。该选项在系统的 CPU 有多于一个内核时自动启用，仅作用于生产构建。
  pwa: {}, // 向 PWA 插件传递选项。
  chainWebpack: config => {
    config.resolve.symlinks(true); // 修复热更新失效
    // 如果使用多页面打包，使用vue inspect --plugins查看html是否在结果数组中
    config.plugin('html')
      .tap(args => {
        // 修复 Lazy loading routes Error
        args[0].chunksSortMode = 'none';
        return args;
      });
    config.resolve.alias // 添加别名
      .set('@', resolve('src'))
      .set('@assets', resolve('src/assets'))
      .set('@components', resolve('src/components'))
      .set('@views', resolve('src/views'))
      .set('@store', resolve('src/store'));
  },
  configureWebpack: config => {
    if (IS_PROD) {
      const productionGzipExtensions = /\.(js|css|json|txt|html|ico|svg)(\?.*)?$/i; // 开启gzip压缩， 按需写入
      // 配置webpack gzip 压缩,让页面加载更快
      config.plugins.push(
        new CompressionWebpackPlugin({
          filename: '[path].gz[query]',
          algorithm: 'gzip',
          test: productionGzipExtensions,
          threshold: 10240,
          minRatio: 0.8
        })
      );
    }
  },
  css: {
    extract: IS_PROD,
    sourceMap: true,
    loaderOptions: {}
  },
  devServer: {
    host: '0.0.0.0',
    port: 8080,
    https: false,
    open: true, //配置自动启动浏览器
    hotOnly: true, // 热更新
    proxy: {
      '/': {
        target: 'http://192.168.1.103:9005/psfep',
        ws: false,
        changeOrigin: true
      }
    }
  }
};
