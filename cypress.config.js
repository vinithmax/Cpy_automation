const { defineConfig } = require("cypress");
module.exports = defineConfig({
  chromeWebSecurity: false,
  waitForAnimations: false,
  animationDistanceThreshold: 50,
  e2e: {
    baseUrl:  'https://posteewebqa.azurewebsites.net',
    watchForFileChanges:false,
    defaultCommandTimeout:3000,
    viewportHeight:960,
    viewportWidth: 1536,
    pageLoadTimeout:10000,

    
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  reporter: "cypress-mochawesome-reporter",
  reporterOptions: {
    embeddedScreenshots: true,
    reporterEnabled: "mochawesome",
    mochawesomeReporterOptions: {
      reportDir: "cypress/reports/mocha",
      quite: true,
      overwrite: false,
      html: false,
      json: true
  }}
});
