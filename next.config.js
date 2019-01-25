const withSass = require("@zeit/next-sass");
const withCSS = require("@zeit/next-css");
const withPlugins = require("next-compose-plugins");
const withPurgeCss = require("next-purgecss");
const commonConfig = {
  poweredByHeader: false,
  useFileSystemPublicRoutes: false,
  publicRuntimeConfig: {},
  webpack: config => {
    config.module.rules.push({
      test: /\.(png|svg|eot|otf|ttf|woff|woff2)$/i,
      use: {
        loader: "url-loader",
        options: {
          limit: 8192,
          publicPath: "./",
          outputPath: "static/css/",
          name: "[name].[ext]"
        }
      }
    });
    return config;
  },
  distDir: "../.next"
};
const plugins = [withCSS, withSass, withPurgeCss];

module.exports = withPlugins(plugins, commonConfig);
