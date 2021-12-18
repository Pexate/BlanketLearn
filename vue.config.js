module.exports = {
  pages: {
    'index': {
      entry: './src/main.js',
      template: 'public/index.html',
      title: 'BlanketLearn',
      chunks: ['chunk-vendors', 'chunk-common', 'index']
    },
    'informatika': {
      entry: './src/components/Informatika/App.vue',
      template: 'public/index2.html',
      title: 'Informatika - BlanketLearn',
      chunks: ['chunk-vendors', 'chunk-common', 'index']
    },
    'fizika': {
      entry: './src/components/Fizika/App.vue',
      template: 'public/index3.html',
      title: 'Fizika - BlanketLearn',
      chunks: ['chunk-vendors', 'chunk-common', 'index']
    },

    /* Disabled - Only one time
    'googleVerify': {
      entry: './src/error-instance.ts',
      template: 'public/somelink.html',
      title: 'Error page',
      chunks: ['chunk-vendors', 'chunk-common', 'index']
    },
    */

  },
  devServer: {
    'port': 3000
  },
  css: {
    sourceMap: false
  },
  pwa: {
    name: 'My App',
    themeColor: '#4DBA87',
    msTileColor: '#000000',
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: 'black',
  },
}
