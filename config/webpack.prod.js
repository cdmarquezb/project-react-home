const { merge } = require("webpack-merge");
const ModuleFederationPLugin = require("webpack/lib/container/ModuleFederationPlugin");

const packageJson = require("../package.json");
const commonConfig = require("./webpack.common");

const prodConfig = {
  mode: "production",
  output: {
    filename: "[name].[contenthash].js",
    publicPath: "/home/latest/",
  },
  plugins: [
    new ModuleFederationPLugin({
      name: "home",
      filename: "remoteEntry.js",
      exposes: {
        "./HomeApp": "./src/bootstrap",
      },
      shared: packageJson.dependencies,
    }),
  ],
};

module.exports = merge(commonConfig, prodConfig);
