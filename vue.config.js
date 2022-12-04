module.exports = {
  css: {
    loaderOptions: {
      sass: {
        additionalData: `@import "@/assets/scss/Variable.scss";
                        @import "@/assets/scss/mixin.scss";`
      }
    }
  }
}
