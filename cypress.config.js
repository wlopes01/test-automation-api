const { defineConfig } = require('cypress')

module.exports = defineConfig({
  screenshotOnRunFailure: false,
  trashAssetsBeforeRuns: false,
  video: false,
  includeShadowDom: true,
  defaultCommandTimeout: 10000,
  retries: 0,
  env: {
    baseUrl: 'http://reqres.in/api',
    options: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
  },
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },
  },
})
