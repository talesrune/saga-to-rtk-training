const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin =
  require("webpack").container.ModuleFederationPlugin;
const path = require("path");
const deps = require("./package.json").dependencies;

module.exports = {
  entry: "./src/index.js",
  mode: "development",
  output: {
    publicPath: "http://localhost:3000/",
  },
  devServer: {
    // contentBase: path.join(__dirname, 'dist'),
    historyApiFallback: true,
    port: 3000,
    open: true,
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx", ".css", ".scss"],
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "completeRedux",
      remotes: {
        saga2: "sagaToRtk2@http://localhost:3005/remoteEntry.js",
      },
      shared: {
        ...deps,
        react: { singleton: true, eager: true, requiredVersion: deps["react"] },
        "react-dom": { singleton: true, eager: true, requiredVersion: deps["react-dom"] },
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
      template: "./public/index.html",
    }),
  ],
};
