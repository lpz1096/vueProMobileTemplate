module.exports = {
  devServer: {
    proxy: {
      "apiPath": {
        target: "需要跨域请求的地址",
        changeOrigin: true,
        pathRewrite: {
          "^/apiPath": "/",
        }
      },
    }
  }
};
