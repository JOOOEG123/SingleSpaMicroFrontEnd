const singleSpaAngularWebpack = require("single-spa-angular/lib/webpack");
const webpack = require("webpack");
// eslint-disable-next-line no-console
console.log(process.env);

module.exports = (config, options) => {
  config.plugins = [
    ...config.plugins,
    new webpack.DefinePlugin({
      $ENV: {
        ENVIRONMENT: JSON.stringify(process.env.LOCALAPPDATA),
        SomeAPIKey: JSON.stringify(process.env.USERNAME),
        SomeOtherAPIKey: JSON.stringify(process.env.APPDATA),
      },
    }),
  ];
  const singleSpaWebpackConfig = singleSpaAngularWebpack.default(
    config,
    options
  );

  // eslint-disable-next-line no-console
  console.log(config.plugins);
  // Feel free to modify this webpack config however you'd like to
  return singleSpaWebpackConfig;
};

// const { writeFile } = require("fs");
// // Configure Angular `environment.ts` file path
// const targetPath = "./src/environments/environment.ts";
// const targetPathProd = "./src/environments/environment.prod.ts";
// // Load node modules
// // const colors = require('colors');
// // require("dotenv").config();
// console.log(process.env);
// // `environment.ts` file structure
// const envConfigFile = `export const environment = {
//    apiBaseUrl: '${process.env.VSCODE_GIT_ASKPASS_EXTRA_ARGS}',
//    apiUrl: '${process.env.Path}',
//    appName: '${process.env.APP_NAME}',
//    awsPubKey: '${process.env.AWSKEY}',
//    nodeEnv: '${process.env.NODE_ENV}',
//    production: '${process.env.PRODUCTION}',
//    firebase: {
//     apiKey: '${process.env.FB_API_KEY}',
//     authDomain: '${process.env.FB_AUTH_DOMAIN}',
//     projectId: '${process.env.FB_PROJECT_ID}',
//     storageBucket: '${process.env.FB_STORAGE_BUCKET}',
//     messagingSenderId: '${process.env.FB_MESSAGING_SENDER_ID}',
//     appId: '${process.env.FB_APP_ID}',
//     measurementId: '${process.env.FB_MEASUREMENT_ID}',
//   }
// };
// `;
// console.log(
//   "The file `environment.ts` will be written with the following content: \n"
// );
// console.log(envConfigFile);
// const createVariables = (targetPathParam) => {
//   writeFile(targetPathParam, envConfigFile, function (err) {
//     if (err) {
//       throw console.error(err);
//     } else {
//       console.log(
//         `Angular environment.ts file generated correctly at ${targetPathParam} \n`
//       );
//     }
//   });
// };
// createVariables(targetPath);
// createVariables(targetPathProd);
