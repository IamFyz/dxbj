module.exports = {
  configureWebpack: config => {
      require('vux-loader').merge(config, {
          options: {},
          plugins: [
            'vux-ui',
            {name:'less-theme',path:'./src/assets/css/vux_theme.less'}
          ]
      })
  }
}
