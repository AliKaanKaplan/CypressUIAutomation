const { defineConfig } = require('cypress')

module.exports = defineConfig({
  defaultCommandTimeout: 40000,
  pageLoadTimeout: 40000,
  env: {
    url: 'https://www.epam.com/',
  },
  chromeWebSecurity: false,
  retries: {
    runMode: 0,
  },
  e2e: {
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },
    specPattern:'cypress/e2e/BDD-Features',
    excludeSpecPattern: ['*.js', '*.md']
  },
})
