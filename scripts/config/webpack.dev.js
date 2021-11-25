const { merge } = require('webpack-merge');
const common = require('./webpack.common');

module.exports = merge(common, {
    mode: 'development',
    devServer: {
        // stats: 'errors-only', // 终端仅打印 error
        // clientLogLevel: 'silent', // 日志等级
        compress: true, // 是否启用 gzip 压缩
        open: true, // 打开默认浏览器
        hot: true, // 热更新
    },
});

