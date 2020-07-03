const path = require(`path`);
const HTMLWebpackPlugin = require(`html-webpack-plugin`);
const MiniCssExtractPlugin = require(`mini-css-extract-plugin`);
const TerserPlugin = require('terser-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = {
  mode: `development`,
  entry: `./src/index.js`,
  output: {
    path: path.resolve(__dirname, `dist`),
    filename: `bundle.js`,    
    library: 'EmailsInput',
    libraryTarget:'umd',
    umdNamedDefine: true 
  },
  devServer: {
    port: 4200,
  },
  plugins: [
    new HTMLWebpackPlugin({
      title: `Webpack start`,
    }),
    new MiniCssExtractPlugin({
      filename: `[name].css`,
    }),
  ],
  optimization:{
    minimizer: [
      new TerserPlugin(),
      new OptimizeCssAssetsPlugin(),
    ]
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: { hmr: true, reloadAll: true },
          },
          `css-loader`,
        ],
      }
    ],
  },
  devtool: `source-map`,
  resolve: {
    extensions: ['*', '.js']
  },
};
