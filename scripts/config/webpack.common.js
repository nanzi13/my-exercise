const path = require('path');
const { PROJECT_PATH } = require('../constant');

module.exports = {
    // 入口文件是src下的app.js
    entry: {
        app: path.resolve(PROJECT_PATH, './src/app.js'),
    },
    // 输出的文件位置为根目录下的dist
    output: {
        filename: 'js/[name].[hash:8].js',
        path: path.resolve(PROJECT_PATH, './dist'),
    },
};
