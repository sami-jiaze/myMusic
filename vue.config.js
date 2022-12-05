const registerRouter = require('./backend/router.js')

module.exports = {
  css: {
    loaderOptions: {
      sass: {
        // 全局引入并编译
        additionalData: `@import "@/assets/scss/Variable.scss";
                        @import "@/assets/scss/mixin.scss";`
      }
    }
  },
  devServer: {
    before (app) {
      registerRouter(app)
    }
  }
}
