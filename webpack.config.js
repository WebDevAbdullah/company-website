const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const path = require("path");

module.exports = {
  entry: {
    app: "./src/js/index.js",
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "main.js",
  },
  devServer: {
    static: {
      directory: path.join(__dirname, "public"),
    },
    hot: false,
    port: 1234,
    open: true,
    devMiddleware: {
      writeToDisk: true,
    },
  },
  module: {
    rules: [
      {
        test: /\.html$/i,
        loader: "html-loader",
        options: {
          minimize: true,
        },
      },
      {
        test: /\.(sa|sc|c)ss$/,
        exclude: /bootstrap\.scss$/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              esModule: false,
            },
          },
          "css-loader",
          "sass-loader",
        ],
      },
      {
        test: /bootstrap\.scss$/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              esModule: false,
            },
          },
          "rtlcss-loader",
          "sass-loader",
        ],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
        generator: {
          filename: "./img/[name][ext]",
        },
      },
      {
        test: /\.(svg|eot|woff|woff2|ttf)$/i,
        type: "asset/resource",
        generator: {
          filename: "./fonts/[name][ext]",
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "./src/index.html",
    }),
    new HtmlWebpackPlugin({
      filename: "projects.html",
      template: "./src/projects.html",
    }),
    new HtmlWebpackPlugin({
      filename: "project-details.html",
      template: "./src/project-details.html",
    }),
    new HtmlWebpackPlugin({
      filename: "blog.html",
      template: "./src/blog.html",
    }),
    new HtmlWebpackPlugin({
      filename: "blog-details.html",
      template: "./src/blog-details.html",
    }),
    new HtmlWebpackPlugin({
      filename: "add-blog.html",
      template: "./src/add-blog.html",
    }),
    new HtmlWebpackPlugin({
      filename: "about.html",
      template: "./src/about.html",
    }),
    new HtmlWebpackPlugin({
      filename: "contact.html",
      template: "./src/contact.html",
    }),
    new MiniCssExtractPlugin({
      filename: "css/style.css",
    }),
    new CssMinimizerPlugin(),
  ],
};
