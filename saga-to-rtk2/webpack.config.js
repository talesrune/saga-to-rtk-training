// filepath: /C:/Users/HowToDoThis/Desktop/Things to move/Bootcamp 2022/react_hookform/saga-to-rtk-training/saga-to-rtk2/webpack.config.js
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack').container.ModuleFederationPlugin;
const path = require('path');
const deps = require("./package.json").dependencies;

module.exports = {
  entry: './src/index.js',
  mode: 'development',
  devServer: {
    historyApiFallback: true,
    // contentBase: path.join(__dirname, 'dist'),
    port: 3005,
    open: true,
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"],
  },
  output: {
    publicPath: 'http://localhost:3005/',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'sagaToRtk2',
      filename: 'remoteEntry.js',
      exposes: {
        './App': './src/App',
        './handlers': './src/mocks/handlers'
      },
      shared: {
        ...deps,
        react: {
          singleton: true,
          eager: true,
          requiredVersion: deps.react,
        },
        "react-dom": {
          singleton: true,
          eager: true,
          requiredVersion: deps["react-dom"],
        },
        "react-router-dom": {
          singleton: true,
          eager: true,
          requiredVersion: deps["react-router-dom"],
        },
        '@reduxjs/toolkit': {
          singleton: true,
          eager: true,
          requiredVersion: deps['@reduxjs/toolkit'],
        },
        redux: {
          singleton: true,
          eager: true,
          requiredVersion: deps['redux'],
        },
        'react-redux': {
          singleton: true,
          eager: true,
          requiredVersion: deps['react-redux'],
        },
      },
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ],
};