const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
// step 1: tell Cypress to use Mochawesome as the reporter
  e2e: {
    baseUrl: 'http://localhost',
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on)
},
  env: {
  hideCredentials: true,
  requestMode: true,
},
experimentalRunAllSpecs: true,
  },
  fixturesFolder: false,
  video: false,
});
