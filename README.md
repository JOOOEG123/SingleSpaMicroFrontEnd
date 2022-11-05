# SingleSpaMicroFrontEnd
# Fix commit Warning for husky pre-commit
    git commit -m "message" --no-verify
# Install CLI for Single Spa MFE
    npm i -g create-single-spa
# Create a  single spa
    create-single-spa
# Add main.js to the import maps ( serve the main in the dist folder)
    npm i -g http-server
    add the angular imports 
    uncomment zone js

# Webpack Setup for public path 
## source : https://stackoverflow.com/questions/55930482/configuring-css-loader-with-publicpath
## sol 1 
<!-- const path = require('path');
const express = require('express');

module.exports = {
  devServer: {
    setupMiddlewares: (middlewares, devServer) => {
      devServer.app.use('/assets/', express.static(path.resolve(__dirname, 'src/assets')));
      return middlewares;
    }
  }
} -->
# Update (webpack-dev-server 4)
{
  devServer: {
    static: { 
      directory: path.resolve(__dirname, './assets'), 
      publicPath: '/assets'
    }
  }
}

{
  devServer: {
    contentBase: path.resolve(__dirname, './assets'),
    contentBasePublicPath: '/assets'
  }  
}

# using proxy 
proxy: {
  '/static': {
      target: 'http://localhost:3333',
      pathRewrite: {'^/static' : '/app/static'}
   }
}




    
