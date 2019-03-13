const path = require('path');
module.exports = {
  entry: './main.js',
  mode: 'production',
  output: {
    filename: 'bundle.js',
    path: __dirname + '/assets'
  }
}