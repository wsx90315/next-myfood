const path = require('path')

module.exports = {
  i18n: {
    locales: ['zh-tw', 'en-us'],
    defaultLocale: 'zh-tw',
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
}