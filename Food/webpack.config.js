'use strict';

let path = require('path');


module.exports = {
  mode: 'development',
  entry: './js/script.js',
  output: {
    filename: 'bundle.js',
    path: __dirname + '/js'
  },
  watch: true,

  devtool: "source-map",
  resolve: {
    fallback: {
      'path': require.resolve('path-browserify')
    }
  },

  module: {}
  
  
};
