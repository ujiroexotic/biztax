const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

module.exports = {
  // other webpack configurations...
  optimization: {
    minimize: true,
    minimizer: [
      new CssMinimizerPlugin(),
      // other minimizers like terser for JavaScript minification
    ],
  },
};
