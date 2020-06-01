const path = require('path');
// webpack v4 the extract-text-webpack-plugin should not be used for css
// const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const defaultSetting = require('./config/defaultSetting');

const { publicPath = "" } = defaultSetting;
console.log(publicPath);
// const { NODE_ENV = 'development' } = process.env;
// const isDevMode = NODE_ENV !== 'production';
console.log(process.env.NODE_ENV);

module.exports = {
  mode: 'development', // 模式 development | production
  entry: {
    app: './src/index.js',
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    publicPath,
    filename: '[name].bundle.js'
  },
  devServer: {
    contentBase: false,
    port: 8004,
    open: true,
    hot: true,
    // hotOnly: true,
    host: '0.0.0.0',
    historyApiFallback: true,
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '../src'),
    },
    extensions: ['.js', '.jsx', '.ts', '.tsx']
  },
  devtool: 'inline-source-map',
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
            presets: ['@babel/preset-env', '@babel/preset-react'],
            plugins: [
              ['import', { libraryName: "antd-mobile", style: "css" }],
            ]
          }
        }
      },
      {
        test: /\.(le|c)ss$/,
        exclude: /node_modules/,
        use: [
          'style-loader',
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
          {
            loader: 'less-loader',
            options: {
              lessOptions: {
                javascriptEnabled: true
              }
            }
          },
        ],
      },
      {
        test: /\.(le|c)ss$/,
        exclude: /src/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
            },
          },
          'postcss-loader',
          {
            loader: 'less-loader',
            options: {
              lessOptions: {
                javascriptEnabled: true
              }
            }
          },
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
    }),
  ]
};