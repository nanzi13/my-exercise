const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { isDev, PROJECT_PATH } = require('../constant');

const getCssLoaders = importLoaders => [
  'style-loader',
  {
    loader: 'css-loader',
    options: {
      modules: false, // 默认就是 false, 若要开启，可在官网具体查看可配置项
      sourceMap: isDev, // 开启后与 devtool 设置一致, 开发环境开启，生产环境关闭
      importLoaders: 0, // 指定在 CSS loader 处理前使用的 loader 数量
    },
  },
  {
    loader: 'postcss-loader',
    options: {
      sourceMap: isDev,
      postcssOptions: {
        plugins: [
          'postcss-flexbugs-fixes',
          [
            'postcss-preset-env',
            {
              autoprefixer: {
                grid: true,
                flexbox: 'no-2009',
              },
              stage: 3,
            },
          ],
          'postcss-normalize',
        ],
      },
    },
  },
];

module.exports = {
  // 入口文件是src下的index.js
  entry: {
    app: path.resolve(PROJECT_PATH, './src/index.tsx'),
  },
  // 输出的文件位置为根目录下的dist
  output: {
    //  生产环境不能使用缓存版本，需要请求到最新文件
    filename: `js/[name]${isDev ? '' : '.[contenthash]'}.js`,
    path: path.resolve(PROJECT_PATH, './dist'),
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.json'],
    alias: {
      'Src': path.resolve(PROJECT_PATH, './src'),
      'Components': path.resolve(PROJECT_PATH, './src/components'),
      'Utils': path.resolve(PROJECT_PATH, './src/utils'),
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(PROJECT_PATH, './public/index.html'),
      filename: 'index.html',
      cache: false, // 特别重要：防止之后使用v6版本 copy-webpack-plugin 时代码修改一刷新页面为空问题。
      minify: isDev
        ? false
        : {
            removeAttributeQuotes: true,
            collapseBooleanAttributes: true,
            collapseInlineTagWhitespace: true,
            minifyCSS: true,
            minifyJS: true,
            minifyURLs: true,
          },
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(tsx?|js)$/,
        loader: 'babel-loader',
        options: { cacheDirectory: true },
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: getCssLoaders(1),
      },
      {
        test: /\.less$/,
        use: [
          ...getCssLoaders(2),
          {
            loader: 'less-loader',
            options: {
              sourceMap: isDev,
            },
          },
        ],
      },
      {
        test: /\.scss$/,
        use: [
          ...getCssLoaders(2),
          {
            loader: 'sass-loader',
            options: {
              sourceMap: isDev,
            },
          },
        ],
      },
      {
        test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10 * 1024,
              name: '[name].[contenthash:8].[ext]',
              outputPath: 'assets/images',
            },
          },
        ],
      },
      {
        test: /\.(ttf|woff|woff2|eot|otf)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              name: '[name].[contenthash:8].[ext]',
              outputPath: 'assets/fonts',
            },
          },
        ],
      },
    ],
  },
};


