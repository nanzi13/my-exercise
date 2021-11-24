const path = require('path');

module.exports = {
    // 入口文件是src下的app.js
    entry: {
        app: path.resolve(__dirname, '../../src/app.js'),
    },
    // 输出的文件位置为根目录下的dist
    output: {
        filename: 'js/[name].[hash:8].js',
        path: path.resolve(__dirname, '../../dist'),
    },
};
