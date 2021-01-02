const path = require("path");
module.exports = {
  publicPath: "/",
  pages: {
    index: {
      entry: "src/main.js",
      title: "n"
    }
  },
  configureWebpack: {
    resolve: {
      modules: [path.resolve("./src/assets/less")]
    }
  }
};
