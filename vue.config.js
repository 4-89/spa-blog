const path = require("path");
module.exports = {
  publicPath: "/",
  pages: {
    index: {
      entry: "src/main.js",
      title: "4-89"
    }
  },
  configureWebpack: {
    resolve: {
      modules: [path.resolve("./src/assets/less")]
    }
  }
};
