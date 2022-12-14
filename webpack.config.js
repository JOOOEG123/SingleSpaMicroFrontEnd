const { merge } = require("webpack-merge");
const webpack = require("webpack");
const singleSpaDefaults = require("webpack-config-single-spa-ts");
const HtmlWebpackPlugin = require("html-webpack-plugin");
// https://stackoverflow.com/questions/34870888/serving-static-assets-in-webpack-dev-server

// eslint-disable-next-line no-console

const express = require("express");
const path = require("path");
module.exports = (webpackConfigEnv, argv) => {
  const orgName = "app-root";
  const defaultConfig = singleSpaDefaults({
    orgName,
    projectName: "root-config",
    webpackConfigEnv,
    argv,
    disableHtmlGeneration: true,
  });

  return merge(defaultConfig, {
    // modify the webpack config however you'd like to by adding to this object
    plugins: [
      new HtmlWebpackPlugin({
        inject: false,
        template: "src/index.ejs",
        templateParameters: {
          isLocal: webpackConfigEnv && webpackConfigEnv.isLocal,
          orgName,
        },
      }),
      new webpack.EnvironmentPlugin(),
      new webpack.DefinePlugin({
        $ENV: {
          ENVIRONMENT: JSON.stringify("process.env.ENVIRONMENT"),
          SomeAPIKey: JSON.stringify("process.env.SomeAPIKey"),
          SomeOtherAPIKey: JSON.stringify("process.env.SomeOtherAPIKey"),
        },
      }),
    ],
    devServer: {
      liveReload: true,
      // port: 9000,
      // historyApiFallback: true,
      // headers: {
      //   "Access-Control-Allow-Origin": "*",
      // },

      // This is needed for the single-spa playground to work
      // disableHostCheck: true,
      setupMiddlewares: (middlewares, devServer) => {
        // middlewares.content.use((req, res, next) => {
        //   res.header("Access-Control-Allow-Origin", "*");
        //   next();
        // });
        devServer.app.use(
          "**/assets/",
          express.static(path.resolve(__dirname, "public/assets"))
        );
        return middlewares;
      },
    },
  });
};
