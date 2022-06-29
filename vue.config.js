module.exports = {
  chainWebpack: config => {
    config.resolve.alias.set('vue', '@vue/compat')

    config.module
      .rule('vue')
      .use('vue-loader')
      .tap(options => {
        return {
          ...options,
          compilerOptions: {
            compatConfig: {
              MODE: 2
            }
          }
        }
      })
    config.module
      .rule('archieml')
      .test(/.+\.aml$/)
      .use('@newsdev/archieml-loader')
        .loader('@newsdev/archieml-loader')
        .end()
  }
}
