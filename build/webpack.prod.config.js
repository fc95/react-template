const path = require('path');
// webpack v4 the extract-text-webpack-plugin should not be used for css
// const ExtractTextPlugin = require('extract-text-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

// const { NODE_ENV = 'development' } = process.env;
// const isDevMode = NODE_ENV !== 'production';
console.log(process.env.NODE_ENV);
const defaultSetting = require('./config/defaultSetting');

const { publicPath = "" } = defaultSetting;
console.log(publicPath);

module.exports = {
  mode: 'production', // 模式 development | production
  entry: {
    app: './src/index.js',
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    publicPath,
    filename: '[name].[hash].js'
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '../src'),
    },
    extensions: ['.js', '.jsx', '.ts', '.tsx']
  },
  devtool: 'source-map',
  performance: {
    hints: false
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        enforce: 'pre',
        exclude: /node_modules/,
        use: {
          loader: 'eslint-loader',
        },
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            babelrc: false,
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      },
      {
        test: /\.(le|c)ss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              hmr: true,
            },
          },
          {
            loader: 'css-loader',
            options: {
              // importLoaders: 2,
              // sourceMap: true,
              modules: {
                //重点
                mode: 'local',
                // localIdentName: '[path][name]__[local]___[hash:base64:5]',
                localIdentName: '[local]___[hash:base64:5]',
              }
            },
          },
          'postcss-loader',
          'less-loader',
        ],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10240,
              fallback: 'file-loader'
            },
          },
        ]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, '../public'),
        }
      ]
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.resolve(__dirname, '../src/index.html'),
      // hash: true,
    }),
    new MiniCssExtractPlugin({
      filename: '[name].[hash].css',
      chunkFilename: '[id].[hash].css',
    }),
  ]
};