const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { isDev, PROJECT_PATH } = require('../constant');

module.exports = {
    // 入口文件是src下的index.js
    entry: {
        app: path.resolve(PROJECT_PATH, './src/index.js'),
    },
    // 输出的文件位置为根目录下的dist
    output: {
        //  生产环境不能使用缓存版本，需要请求到最新文件
        filename: `js/[name]${isDev ? '' : '.[contenthash]'}.js`,
        path: path.resolve(PROJECT_PATH, './dist'),
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(PROJECT_PATH, './public/index.html'),
            filename: 'index.html',
            cache: false, // 特别重要：防止之后使用v6版本 copy-webpack-plugin 时代码修改一刷新页面为空问题。
            minify: isDev ? false : {
                removeAttributeQuotes: true,
                collapseBooleanAttributes: true,
                collapseInlineTagWhitespace: true,
                minifyCSS: true,
                minifyJS: true,
                minifyURLs: true,
            },
        }),
    ]
};
