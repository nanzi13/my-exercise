const { merge } = require('webpack-merge');
const common = require('./webpack.common');

module.exports = merge(common, {
    mode: 'development',
    devtool: 'eval-source-map', // 映射原始代码，帮助调试代码错误
    devServer: {
        compress: true, // 是否启用 gzip 压缩
        open: true, // 打开默认浏览器
    },
});

